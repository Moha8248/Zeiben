import { jsx } from "react/jsx-runtime";
import * as React from "react";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";
const ToastProvider = ({ children }) => children;
const ToastViewport = ({ className, ...props }) => /* @__PURE__ */ jsx(
  "div",
  {
    className: cn("fixed right-4 top-4 z-[100] flex w-full max-w-[420px] flex-col gap-3", className),
    ...props
  }
);
const Toast = React.forwardRef(({ className, variant, children, ...props }, ref) => /* @__PURE__ */ jsx(
  "div",
  {
    ref,
    className: cn(
      "relative rounded-md border border-border bg-card p-4 pr-10 shadow-lg",
      variant === "destructive" && "border-destructive bg-destructive/10",
      className
    ),
    ...props,
    children
  }
));
const ToastTitle = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx("div", { ref, className: cn("text-sm font-semibold", className), ...props }));
const ToastDescription = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx("div", { ref, className: cn("text-sm text-muted-foreground", className), ...props }));
const ToastAction = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx("button", { ref, className: cn("rounded-md border px-3 py-1 text-sm", className), ...props }));
const ToastClose = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "button",
  {
    ref,
    type: "button",
    className: cn("absolute right-2 top-2 rounded-md p-1 text-muted-foreground hover:text-foreground", className),
    ...props,
    children: /* @__PURE__ */ jsx(X, { className: "h-4 w-4" })
  }
));
export {
  Toast,
  ToastAction,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport
};
