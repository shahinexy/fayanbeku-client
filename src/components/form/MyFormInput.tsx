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
  type?: string;
  name: string;
  label?: string;
  onValueChange?: (value: string) => void;
  placeholder?: string;
  required?: boolean;
  className?: string;
  labelClassName?: string;
  inputClassName?: string;
  rows?: number;
  radioOptions?: RadioOption[];
  radioGroupClassName?: string;
  radioLabelClassName?: string;
  radioInputClassName?: string;
  radioImageClassName?: string;
  radioItemClassName?: string;
  isMultiple?: boolean;
  disabled?: boolean; // 🔹 NEW: Disable field option
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
  disabled = false, // 🔹 NEW: Default is false
}: MyFormInputProps) => {
  const { control, getValues, setValue } = useFormContext();
  const inputValue = useWatch({ control, name }) ?? "";
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [preview, setPreview] = useState<string | null>(null);

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
          className={cn("md:text-2xl text-xl font-semibold mb-1", labelClassName)}
        >
          {label}
        </label>
      )}
      <Controller
        name={name}
        control={control}
        defaultValue={getValues(name) ?? radioOptions?.[0]?.value ?? ""}
        rules={required ? { required: `${label} is required` } : {}}
        render={({ field, fieldState: { error } }) => (
          <div className="relative">
            {type === "file" ? (
              <div className="flex flex-col gap-2">
                <input
                  type="file"
                  id={name}
                  accept="image/*"
                  multiple={isMultiple}
                  disabled={disabled} // 🔹 NEW: Disable file input
                  className={cn(
                    "w-full px-4 py-2 gradient-input rounded-md cursor-pointer",
                    disabled ? "cursor-not-allowed opacity-50" : "",
                    error ? "border-red-500" : "border-gray-300",
                    inputClassName
                  )}
                  onChange={(e) => {
                    if (disabled) return; // Prevent change if disabled
                    const files = e.target.files;
                    if (files) {
                      if (isMultiple) {
                        setValue(name, Array.from(files));
                        setPreview(URL.createObjectURL(files[0]));
                      } else {
                        setValue(name, files[0]);
                        setPreview(URL.createObjectURL(files[0]));
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
                rows={rows || 3}
                disabled={disabled} // 🔹 NEW: Disable textarea
                className={cn(
                  "w-full px-4 py-2 gradient-input rounded-md",
                  disabled ? "cursor-not-allowed opacity-50" : "",
                  error ? "border-red-500" : "border-gray-300",
                  inputClassName
                )}
                value={field.value ?? ""}
              />
            ) : type === "radio" && radioOptions ? (
              <div className={cn("flex flex-col gap-2", radioGroupClassName)}>
                {radioOptions?.map((option) => (
                  <label
                    key={option.value}
                    className={cn(
                      "flex items-center gap-2",
                      disabled ? "opacity-50 cursor-not-allowed" : "",
                      radioLabelClassName
                    )}
                  >
                    <input
                      {...field}
                      type="radio"
                      value={option.value}
                      checked={field.value === option.value}
                      disabled={disabled} // 🔹 NEW: Disable radio buttons
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
                type={type === "password" ? (isPasswordVisible ? "text" : "password") : type}
                disabled={disabled} // 🔹 NEW: Disable input fields
                className={cn(
                  "w-full px-4 py-2 gradient-input rounded-[12px]",
                  disabled ? "cursor-not-allowed opacity-50" : "",
                  error ? "border-red-500" : "border-gray-300",
                  inputClassName
                )}
                value={field.value ?? ""}
              />
            )}
            {type === "password" && (
              <button
                type="button"
                onClick={() => setIsPasswordVisible((prev) => !prev)}
                className="absolute right-3 top-1/3 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                disabled={disabled} // 🔹 NEW: Disable password toggle button
              >
                {isPasswordVisible ? <HiEyeOff size={20} /> : <HiEye size={20} />}
              </button>
            )}
            <div className="h-4 mb-1">
              {error && <small className="text-red-500 text-xs">{error.message}</small>}
            </div>
          </div>
        )}
      />
    </div>
  );
};

export default MyFormInput;
