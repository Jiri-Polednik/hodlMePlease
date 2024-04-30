import React from "react";

type PageSectionProps = {
  leftContent?: React.ReactNode;
  rightContent?: React.ReactNode;
  title?: string;
  darkBackground?: boolean;
  reverseOnMobile?: boolean;
  content?: React.ReactNode;
};

const PageSection: React.FC<PageSectionProps> = ({
  leftContent,
  rightContent,
  title,
  darkBackground = false,
  reverseOnMobile = false,
  content,
}) => {
  return (
    <section>
      {title && (
        <div className="flex justify-center w-full mt-36">
          <h3 className="text-8xl mb-10 text-center">{title}</h3>
        </div>
      )}
      <div
        className={`flex ${reverseOnMobile ? "flex-col-reverse" : "flex-col"} md:flex-row md:space-x-8 ${darkBackground ? "bg-green-dark" : "bg-green-light"}`}
      >
        <div className="w-full md:w-1/2 p-5 m-auto">{leftContent}</div>
        <div className="w-full md:w-1/2 p-5 m-auto">{rightContent}</div>
      </div>
      {content && (
        <div
          className={`${darkBackground ? "bg-green-dark" : "bg-green-light"}`}
        >
          {content}
        </div>
      )}
    </section>
  );
};

export default PageSection;
