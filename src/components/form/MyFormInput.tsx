"use client";
import { useState, useEffect } from "react";
import { Controller, useFormContext, useWatch } from "react-hook-form";
import { cn } from "@/lib/utils";
import { HiEye, HiEyeOff } from "react-icons/hi"; // React Icons
import Image from "next/image";

interface RadioOption {
  value: string;
  label: string;
  image?: string; // Optional image for radio label
}

interface MyFormInputProps {
  type?: string; // Input type, defaults to "text"
  name: string; // Field name for react-hook-form
  label?: string; // Label text
  onValueChange?: (value: string) => void; // Optional callback for value changes
  placeholder?: string; // Optional placeholder text
  required?: boolean; // Optional required validation, default is true
  className?: string; // Custom className for input container
  labelClassName?: string; // Custom className for label
  inputClassName?: string; // Custom className for input
  rows?: number; // Number of rows for textarea
  radioOptions?: RadioOption[]; // Options for radio buttons
  radioGroupClassName?: string; // Custom className for radio group parent
  radioLabelClassName?: string; // Custom className for radio label
  radioInputClassName?: string; // Custom className for radio input
  radioImageClassName?: string; // Custom className for image
  radioItemClassName?: string; // Custom className for radio items
  isMultiple?: boolean;
}

const MyFormInput = ({
  type = "text",
  name,
  label,
  onValueChange,
  placeholder = "",
  required = true,
  className,
  labelClassName,
  inputClassName,
  rows,
  radioOptions,
  radioGroupClassName,
  radioLabelClassName,
  radioInputClassName,
  radioImageClassName,
  radioItemClassName,
  isMultiple = false,
}: MyFormInputProps) => {
  const { control, getValues, setValue } = useFormContext();
  const inputValue = useWatch({ control, name }) ?? ""; // Ensure no undefined value
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [preview, setPreview] = useState<string | null>(null); // Preview for file input

  useEffect(() => {
    if (onValueChange) {
      onValueChange(inputValue);
    }
  }, [inputValue, onValueChange]);

  useEffect(() => {
    if (type === "radio" && radioOptions?.length) {
      setValue(name, getValues(name) ?? radioOptions[0].value);
    }
  }, [type, radioOptions, name, setValue, getValues]);

  return (
    <div className={cn("flex flex-col gap-1", className)}>
      {label && (
        <label
          htmlFor={name}
          className={cn(
            "md:text-2xl text-xl font-semibold mb-1",
            labelClassName
          )}
        >
          {label}
        </label>
      )}
      <Controller
        name={name}
        control={control}
        defaultValue={getValues(name) ?? radioOptions?.[0]?.value ?? ""} // Ensures controlled behavior
        rules={required ? { required: `${label} is required` } : {}}
        render={({ field, fieldState: { error } }) => (
          <div className="relative">
            {/* File Input Handling */}
            {type === "file" ? (
              <div className="flex flex-col gap-2">
                <input
                  type="file"
                  id={name}
                  accept="image/*"
                  multiple={isMultiple}
                  className={cn(
                    "w-full px-4 py-2 gradient-input rounded-md  cursor-pointer",
                    error ? "border-red-500" : "border-gray-300",
                    inputClassName
                  )}
                  onChange={(e) => {
                    const files = e.target.files;
                    if (files) {
                      if (isMultiple) {
                        setValue(name, Array.from(files));
                        const firstFileUrl = URL.createObjectURL(files[0]);
                        setPreview(firstFileUrl);
                      } else {
                        setValue(name, files[0]);
                        const fileUrl = URL.createObjectURL(files[0]);
                        setPreview(fileUrl);
                      }
                    }
                  }}
                />
                {preview && (
                  <div className="w-full flex justify-center">
                    <Image
                      src={preview}
                      alt="Preview"
                      width={100}
                      height={100}
                      className="rounded-md border"
                    />
                  </div>
                )}
              </div>
            ) : type === "textarea" ? (
              <textarea
                {...field}
                id={name}
                placeholder={placeholder}
                rows={rows || 3} // Default to 3 rows if not provided
                className={cn(
                  "w-full px-4 py-2 gradient-input rounded-md ",
                  error ? "border-red-500" : "border-gray-300",
                  inputClassName
                )}
                value={field.value ?? ""} // Ensures controlled component
              />
            ) : type === "radio" && radioOptions ? (
              <div className={cn("flex flex-col gap-2", radioGroupClassName)}>
                {radioOptions?.map((option) => (
                  <label
                    key={option.value}
                    className={cn(
                      "flex items-center gap-2",
                      radioLabelClassName
                    )}
                  >
                    <input
                      {...field}
                      type="radio"
                      value={option.value}
                      checked={field.value === option.value}
                      className={cn("form-radio", radioInputClassName)}
                    />
                    <div className={cn("flex gap-2", radioItemClassName)}>
                      {option?.image && (
                        <Image
                          src={option.image}
                          alt={option.label}
                          width={100}
                          height={100}
                          className={cn("w-6 h-6", radioImageClassName)}
                        />
                      )}
                      <div>{option.label}</div>
                    </div>
                  </label>
                ))}
              </div>
            ) : (
              <input
                {...field}
                id={name}
                placeholder={placeholder}
                type={
                  type === "password"
                    ? isPasswordVisible
                      ? "text"
                      : "password"
                    : type
                }
                className={cn(
                  "w-full px-4 py-2 gradient-input rounded-[12px] ",
                  error ? "border-red-500" : "border-gray-300",
                  inputClassName
                )}
                value={field.value ?? ""} // Ensures controlled component
              />
            )}
            {/* Password Toggle Button */}
            {type === "password" && (
              <button
                type="button"
                onClick={() => setIsPasswordVisible((prev) => !prev)}
                className="absolute right-3 top-1/3 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
              >
                {isPasswordVisible ? (
                  <HiEyeOff size={20} />
                ) : (
                  <HiEye size={20} />
                )}
              </button>
            )}
            {/* Validation Error Message */}
            <div className="h-4 mb-1">
              {error && (
                <small className="text-red-500 text-xs">{error.message}</small>
              )}
            </div>
          </div>
        )}
      />
    </div>
  );
};

export default MyFormInput;
