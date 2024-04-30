import Button from "@components/ui/button";
import React from "react";

interface AccordionTextProps {
  title: string;
  descriptions: string[];
  buttonText: string;
}

export default function AccordionText({
  title,
  descriptions,
  buttonText,
}: AccordionTextProps) {
  return (
    <div className={"lg:p-10"}>
      <h3 className="text-9xl">{title}</h3>
      {descriptions.map((description, index) => (
        <p
          key={index}
          className="text-base lg:text-xl text-black text-opacity-50 py-5"
        >
          {description}
        </p>
      ))}
      <Button variant="secondary">{buttonText}</Button>
    </div>
  );
}
