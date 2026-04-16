import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import * as React from "react";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";
const SheetContext = React.createContext(null);
function Sheet({ open, onOpenChange, children }) {
  return /* @__PURE__ */ jsx(SheetContext.Provider, { value: { open, onOpenChange }, children });
}
function SheetTrigger({ children }) {
  const context = React.useContext(SheetContext);
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
function SheetContent({ side = "right", className, children }) {
  const context = React.useContext(SheetContext);
  if (!context?.open) {
    return null;
  }
  const position = side === "right" ? "right-0 top-0 h-full border-l" : "left-0 top-0 h-full border-r";
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("div", { className: "fixed inset-0 z-40 bg-black/50", onClick: () => context.onOpenChange?.(false) }),
    /* @__PURE__ */ jsxs("div", { className: cn("fixed z-50 w-[300px] max-w-[90vw] border-border bg-background p-6 shadow-xl", position, className), children: [
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
    ] })
  ] });
}
function SheetClose({ children }) {
  return children;
}
function SheetPortal({ children }) {
  return children;
}
function SheetOverlay() {
  return null;
}
function SheetHeader({ className, ...props }) {
  return /* @__PURE__ */ jsx("div", { className: cn("flex flex-col space-y-2 text-center sm:text-left", className), ...props });
}
function SheetFooter({ className, ...props }) {
  return /* @__PURE__ */ jsx("div", { className: cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className), ...props });
}
function SheetTitle({ className, ...props }) {
  return /* @__PURE__ */ jsx("div", { className: cn("text-lg font-semibold text-foreground", className), ...props });
}
function SheetDescription({ className, ...props }) {
  return /* @__PURE__ */ jsx("p", { className: cn("text-sm text-muted-foreground", className), ...props });
}
export {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetOverlay,
  SheetPortal,
  SheetTitle,
  SheetTrigger
};
