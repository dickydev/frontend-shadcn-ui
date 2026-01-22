import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

const advancedButtonVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium transition-colors",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground",
        danger: "bg-red-600 text-white hover:bg-red-700",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

export type AdvancedButtonProps =
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    asChild?: boolean;
    variant?: "default" | "danger";
    loading?: boolean;
  };

export const AdvancedButton = React.forwardRef<
  HTMLButtonElement,
  AdvancedButtonProps
>(({ asChild, loading, className, variant, children, ...props }, ref) => {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      ref={ref}
      disabled={loading}
      className={cn(advancedButtonVariants({ variant }), className)}
      {...props}
    >
      {loading && <span className="animate-pulse">...</span>}
      {children}
    </Comp>
  );
});

AdvancedButton.displayName = "AdvancedButton";
