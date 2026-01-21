// components/layout/InnerContent.tsx
import { cn } from "@/lib/utils";

export default function InnerContent({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "mx-auto max-w-[1440px] px-10 lg:px-20 md:px-8 sm:px-5",
        className
      )}
    >
      {children}
    </div>
  );
}
