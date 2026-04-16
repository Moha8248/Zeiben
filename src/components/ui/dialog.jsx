import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import * as React from "react";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";
const DialogContext = React.createContext(null);
function Dialog({ open, onOpenChange, children }) {
  return /* @__PURE__ */ jsx(DialogContext.Provider, { value: { open, onOpenChange }, children });
}
function DialogTrigger({ children }) {
  const context = React.useContext(DialogContext);
  if (!context || !React.isValidElement(children)) {
    return children;
  }
  return React.cloneElement(children, {
    onClick: (event) => {
      children.props?.onClick?.(event);
      context.onOpenChange?.(true);
    }
  });
}
function DialogContent({ className, children }) {
  const context = React.useContext(DialogContext);
  if (!context?.open) {
    return null;
  }
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("div", { className: "fixed inset-0 z-40 bg-black/50", onClick: () => context.onOpenChange?.(false) }),
    /* @__PURE__ */ jsxs(
      "div",
      {
        className: cn(
          "fixed left-1/2 top-1/2 z-50 w-[calc(100%-2rem)] max-w-lg -translate-x-1/2 -translate-y-1/2 rounded-lg border border-border bg-background p-6 shadow-xl",
          className
        ),
        children: [
          /* @__PURE__ */ jsxs(
            "button",
            {
              type: "button",
              className: "absolute right-4 top-4 rounded-sm p-1 text-muted-foreground hover:text-foreground",
              onClick: () => context.onOpenChange?.(false),
              children: [
                /* @__PURE__ */ jsx(X, { className: "h-4 w-4" }),
                /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Close" })
              ]
            }
          ),
          children
        ]
      }
    )
  ] });
}
function DialogPortal({ children }) {
  return children;
}
function DialogOverlay() {
  return null;
}
function DialogClose({ children }) {
  return children;
}
function DialogHeader({ className, ...props }) {
  return /* @__PURE__ */ jsx("div", { className: cn("flex flex-col space-y-1.5 text-center sm:text-left", className), ...props });
}
function DialogFooter({ className, ...props }) {
  return /* @__PURE__ */ jsx("div", { className: cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className), ...props });
}
function DialogTitle({ className, ...props }) {
  return /* @__PURE__ */ jsx("h2", { className: cn("text-lg font-semibold leading-none tracking-tight", className), ...props });
}
function DialogDescription({ className, ...props }) {
  return /* @__PURE__ */ jsx("p", { className: cn("text-sm text-muted-foreground", className), ...props });
}
export {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
  DialogTrigger
};
