import React from "react";

export interface InputProps
    extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: string;
    helperText?: string;
    fullWidth?: boolean;
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
    (
        {
            label,
            error,
            helperText,
            fullWidth = false,
            leftIcon,
            rightIcon,
            className = "",
            id,
            ...props
        },
        ref
    ) => {
        const inputId = id || `input-${Math.random().toString(36).substr(2, 9)}`;

        // Base input styles
        const baseInputStyles =
            "flex h-10 rounded-lg border border-input bg-background px-3 py-2 text-sm transition-all duration-200 file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50";

        // Error styles
        const errorStyles = error
            ? "border-error-500 focus-visible:ring-error-500"
            : "";

        // Width styles
        const widthStyles = fullWidth ? "w-full" : "";

        // Icon padding
        const iconPaddingStyles = leftIcon
            ? "pl-10"
            : rightIcon
                ? "pr-10"
                : "";

        const combinedInputClassName = `${baseInputStyles} ${errorStyles} ${iconPaddingStyles} ${widthStyles} ${className}`.trim();

        return (
            <div className={`flex flex-col gap-1.5 ${fullWidth ? "w-full" : ""}`}>
                {/* Label */}
                {label && (
                    <label
                        htmlFor={inputId}
                        className="text-sm font-medium text-foreground"
                    >
                        {label}
                    </label>
                )}

                {/* Input Container */}
                <div className="relative">
                    {/* Left Icon */}
                    {leftIcon && (
                        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                            {leftIcon}
                        </div>
                    )}

                    {/* Input */}
                    <input
                        ref={ref}
                        id={inputId}
                        className={combinedInputClassName}
                        {...props}
                    />

                    {/* Right Icon */}
                    {rightIcon && (
                        <div className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                            {rightIcon}
                        </div>
                    )}
                </div>

                {/* Error or Helper Text */}
                {error && (
                    <p className="text-sm text-error-500 animate-slide-down">{error}</p>
                )}
                {!error && helperText && (
                    <p className="text-sm text-muted-foreground">{helperText}</p>
                )}
            </div>
        );
    }
);

Input.displayName = "Input";

export default Input;
