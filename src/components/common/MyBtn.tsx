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
      className={`px-24 py-3 bg-gradient-to-r from-[#E97586CC] to-[#FCD655CC] text-white ${width}`}
    >
      {name}
    </button>
  );
};

export default MyBtn;
