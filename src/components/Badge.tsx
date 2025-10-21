import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "exclusive";
  className?: string;
}

export const Badge = ({ children, variant = "default", className }: BadgeProps) => {
  return (
    <span
      className={cn(
        "absolute top-3 left-3 px-3 py-1 text-xs tracking-wider uppercase backdrop-blur-sm z-10",
        variant === "exclusive"
          ? "bg-primary/90 text-primary-foreground"
          : "bg-card/90 text-card-foreground border border-border",
        className
      )}
    >
      {children}
    </span>
  );
};
