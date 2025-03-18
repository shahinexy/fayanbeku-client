import React from "react";

const MyBtn = ({
  name,
  width = "w-auto",
}: {
  name: string;
  width?: string;
}) => {
  return (
    <button
      className={`md:text-2xl text-[17px] px-24 py-3 bg-primary text-white rounded-full ${width}`}
    >
      {name}
    </button>
  );
};

export default MyBtn;
