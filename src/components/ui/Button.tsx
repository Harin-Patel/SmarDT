import React from "react";

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "outline" | "danger" | "ghost";
    size?: "sm" | "md" | "lg";
    fullWidth?: boolean;
    children: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    (
        {
            variant = "primary",
            size = "md",
            fullWidth = false,
            className = "",
            children,
            disabled,
            ...props
        },
        ref
    ) => {
        // Base styles
        const baseStyles =
            "inline-flex items-center justify-center text-base font-semibold leading-none tracking-normal text-center transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 w-[225px] h-12 px-6 rounded-[100px]";

        // Variant styles
        const variantStyles = {
            primary:
                "bg-secondary-500 text-white hover:bg-secondary-600 active:bg-secondary-700",
            secondary:
                "bg-secondary-500 text-white hover:bg-secondary-600 active:bg-secondary-700",
            outline:
                "border-2 border-secondary-500 text-secondary-500 hover:bg-secondary-50 active:bg-secondary-100",
            danger:
                "bg-error-500 text-white hover:bg-error-600 active:bg-error-700",
            ghost:
                "hover:bg-neutral-100 active:bg-neutral-200",
        };



        // Width styles
        const widthStyles = fullWidth ? "w-full" : "";

        const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${widthStyles} ${className}`.trim();

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

Button.displayName = "Button";

export default Button;
