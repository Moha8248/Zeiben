import { jsx } from "react/jsx-runtime";
import * as React from "react";
const TooltipProvider = ({ children }) => children;
const Tooltip = ({ children }) => children;
const TooltipTrigger = ({ children }) => children;
const TooltipContent = React.forwardRef(({ children, className, ...props }, ref) => /* @__PURE__ */ jsx("div", { ref, className, ...props, children }));
TooltipContent.displayName = "TooltipContent";
export {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
};
