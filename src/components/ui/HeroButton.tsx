import React from "react";

export interface HeroButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}

const HeroButton = React.forwardRef<HTMLButtonElement, HeroButtonProps>(
  ({ className = "", children, disabled, ...props }, ref) => {
    // Base styles
    const baseStyles =
      "inline-flex items-center justify-center font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 rounded-2xl";

    // Hero button responsive styles
    const heroStyles =
      "bg-secondary-500 text-white hover:bg-secondary-600 active:bg-secondary-700 shadow-lg hover:shadow-2xl hover:scale-105 active:scale-100 " +
      "px-6 py-3 text-base " +        // Mobile default
      "sm:px-8 sm:py-4 sm:text-lg " + // Small screens
      "md:px-10 md:py-5 md:text-xl";  // Medium & up (desktop)

    const combinedClassName = `${baseStyles} ${heroStyles} ${className}`.trim();

    return (
      <button
        ref={ref}
        className={combinedClassName}
        disabled={disabled}
        {...props}
      >
        {children}
      </button>
    );
  }
);

HeroButton.displayName = "HeroButton";

export default HeroButton;
