"use client";

import React, { FC, useState } from "react";

type AnimatedTextAreaProps = {
  placeholder: string;
  id: string;
  name: string;
  rows?: number;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
};

const AnimatedTextArea: FC<AnimatedTextAreaProps> = ({
  placeholder,
  id,
  name,
  rows = 4,
  value,
  onChange,
}) => {
  const [focused, setFocused] = useState(false);

  return (
    <div className="relative border-2 rounded-lg border-gray-300 focus-within:border-blue-500">
      <textarea
        id={id}
        name={name}
        rows={rows}
        value={value}
        onChange={onChange}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        className={`w-full px-3 py-2 outline-none transition-all duration-300 ease-in-out rounded-lg resize-none`}
      />
      <label
        htmlFor={id}
        className={`absolute left-3 top-1.5 px-1 transition-all duration-300 ease-in-out bg-white ${
          focused || value
            ? "transform -translate-y-5 text-sm text-blue-500"
            : "text-gray-400"
        }`}
      >
        {placeholder}
      </label>
    </div>
  );
};

export default AnimatedTextArea;
