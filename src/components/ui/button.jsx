import { jsx } from "react/jsx-runtime";
import * as React from "react";
import { Link } from "wouter";
import { cn } from "@/lib/utils";
const baseStyles = "inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50";
const variantStyles = {
  default: "bg-primary text-primary-foreground hover:opacity-90",
  outline: "border border-border bg-transparent hover:bg-muted",
  ghost: "bg-transparent hover:bg-muted",
  secondary: "bg-secondary text-secondary-foreground hover:opacity-90",
  destructive: "bg-destructive text-destructive-foreground hover:opacity-90"
};
const sizeStyles = {
  default: "h-10 px-4 py-2",
  sm: "h-9 px-3",
  lg: "h-11 px-6 text-base",
  icon: "h-10 w-10"
};
function buttonVariants({ variant = "default", size = "default", className } = {}) {
  return cn(baseStyles, variantStyles[variant], sizeStyles[size], className);
}
const Button = React.forwardRef(
  ({ className, variant = "default", size = "default", asChild = false, href, children, ...props }, ref) => {
    const classes = buttonVariants({ variant, size, className });
    if (asChild && React.isValidElement(children)) {
      return React.cloneElement(children, {
        className: cn(classes, children.props?.className),
        ...props
      });
    }
    if (href) {
      return /* @__PURE__ */ jsx(Link, { href, className: classes, ...props, children });
    }
    return /* @__PURE__ */ jsx("button", { ref, className: classes, ...props, children });
  }
);
Button.displayName = "Button";
export {
  Button,
  buttonVariants
};
