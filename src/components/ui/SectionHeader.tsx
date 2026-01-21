import React from "react";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  titleClassName?: string;
  subtitleClassName?: string;
  containerClassName?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  subtitle,
  align = "center",
  titleClassName = "",
  subtitleClassName = "",
  containerClassName = "",
}) => {
  const alignClass =
    align === "center"
      ? "text-center items-center"
      : "text-left items-start";

  const subtitleWidth =
    align === "center" ? "max-w-3xl" : "";

  return (
    <div className={`flex flex-col ${alignClass} ${containerClassName}`}>
      <h2
        className={`
          text-[48px]
          font-barlow
          font-semibold
          leading-tight
          text-primary-500
          ${titleClassName}
        `}
      >
        {title}
      </h2>

      {subtitle && (
        <p
          className={`
            text-lg
            font-medium
            font-inter
            text-neutral-950
            leading-relaxed
            ${subtitleWidth}
            ${subtitleClassName}
          `}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};
