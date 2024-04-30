import React, { ReactNode } from "react";

interface TextSectionProps extends React.HTMLProps<HTMLDivElement> {
  title: string;
  children: ReactNode;
  titleSize?: string;
  titleBold?: boolean;
}

const TextContent: React.FC<TextSectionProps> = ({
  title,
  children,
  titleSize = "text-4xl",
  titleBold = true,
  className,
  ...props
}) => {
  return (
    <div className={`${className || "w-3/4 m-auto"}`} {...props}>
      <p className={`${titleSize} ${titleBold ? "font-bold" : ""}`}>{title}</p>
      {children}
    </div>
  );
};

export default TextContent;
