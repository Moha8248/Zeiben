import { jsx } from "react/jsx-runtime";
import * as React from "react";
import * as RechartsPrimitive from "recharts";
import { cn } from "@/lib/utils";
const Chart = ({ className, style, children, ...props }) => /* @__PURE__ */ jsx("div", { className: cn("relative", className), style, ...props, children });
const ChartTooltip = RechartsPrimitive.Tooltip;
const ChartTooltipContent = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx("div", { ref, className: cn("rounded-lg border bg-background p-3 text-xs shadow-xl", className), ...props }));
ChartTooltipContent.displayName = "ChartTooltipContent";
const ChartLegend = RechartsPrimitive.Legend;
const ChartLegendContent = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx("div", { ref, className: cn("flex flex-wrap gap-2", className), ...props }));
ChartLegendContent.displayName = "ChartLegendContent";
export {
  Chart,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent
};
