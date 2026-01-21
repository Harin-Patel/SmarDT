import React from "react";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    variant?: "default" | "bordered" | "elevated";
    padding?: "none" | "sm" | "md" | "lg";
    children: React.ReactNode;
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
    (
        {
            variant = "default",
            padding = "md",
            className = "",
            children,
            ...props
        },
        ref
    ) => {
        // Base styles
        const baseStyles =
            "rounded-xl bg-card text-card-foreground transition-all duration-200";

        // Variant styles
        const variantStyles = {
            default: "border border-border",
            bordered: "border-2 border-border",
            elevated: "shadow-lg hover:shadow-xl",
        };

        // Padding styles
        const paddingStyles = {
            none: "",
            sm: "p-4",
            md: "p-6",
            lg: "p-8",
        };

        const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${paddingStyles[padding]} ${className}`.trim();

        return (
            <div ref={ref} className={combinedClassName} {...props}>
                {children}
            </div>
        );
    }
);

Card.displayName = "Card";

// Card Header Component
export interface CardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
}

const CardHeader = React.forwardRef<HTMLDivElement, CardHeaderProps>(
    ({ className = "", children, ...props }, ref) => {
        return (
            <div
                ref={ref}
                className={`flex flex-col space-y-1.5 ${className}`.trim()}
                {...props}
            >
                {children}
            </div>
        );
    }
);

CardHeader.displayName = "CardHeader";

// Card Title Component
export interface CardTitleProps
    extends React.HTMLAttributes<HTMLHeadingElement> {
    children: React.ReactNode;
    as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

const CardTitle = React.forwardRef<HTMLHeadingElement, CardTitleProps>(
    ({ className = "", children, as: Component = "h3", ...props }, ref) => {
        return (
            <Component
                ref={ref}
                className={`text-2xl font-semibold leading-none tracking-tight ${className}`.trim()}
                {...props}
            >
                {children}
            </Component>
        );
    }
);

CardTitle.displayName = "CardTitle";

// Card Description Component
export interface CardDescriptionProps
    extends React.HTMLAttributes<HTMLParagraphElement> {
    children: React.ReactNode;
}

const CardDescription = React.forwardRef<
    HTMLParagraphElement,
    CardDescriptionProps
>(({ className = "", children, ...props }, ref) => {
    return (
        <p
            ref={ref}
            className={`text-sm text-muted-foreground ${className}`.trim()}
            {...props}
        >
            {children}
        </p>
    );
});

CardDescription.displayName = "CardDescription";

// Card Content Component
export interface CardContentProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
}

const CardContent = React.forwardRef<HTMLDivElement, CardContentProps>(
    ({ className = "", children, ...props }, ref) => {
        return (
            <div ref={ref} className={`pt-0 ${className}`.trim()} {...props}>
                {children}
            </div>
        );
    }
);

CardContent.displayName = "CardContent";

// Card Footer Component
export interface CardFooterProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
}

const CardFooter = React.forwardRef<HTMLDivElement, CardFooterProps>(
    ({ className = "", children, ...props }, ref) => {
        return (
            <div
                ref={ref}
                className={`flex items-center pt-0 ${className}`.trim()}
                {...props}
            >
                {children}
            </div>
        );
    }
);

CardFooter.displayName = "CardFooter";

export default Card;
export { CardHeader, CardTitle, CardDescription, CardContent, CardFooter };
