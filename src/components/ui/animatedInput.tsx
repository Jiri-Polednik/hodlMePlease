"use client";

import React, { FC, useState } from "react";

type AnimatedInputProps = {
  placeholder: string;
  id: string;
  name: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const AnimatedInput: FC<AnimatedInputProps> = ({
  placeholder,
  id,
  name,
  type = "text",
  value,
  onChange,
}) => {
  const [focused, setFocused] = useState(false);

  return (
    <div className="relative border-2 rounded-lg border-gray-300 focus-within:border-blue-500">
      <input
        type={type}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        className={`w-full px-3 py-2 outline-none transition-all duration-300 ease-in-out rounded-lg`}
      />
      <label
        htmlFor={id}
        className={`absolute left-3 top-1.5 px-1 transition-all duration-300 ease-in-out bg-white ${
          (focused || value) && "transform -translate-y-5 text-sm"
        } ${focused ? "text-blue-500" : "text-gray-400"}`}
      >
        {placeholder}
      </label>
    </div>
  );
};

export default AnimatedInput;
