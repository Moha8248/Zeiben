import { jsx, jsxs } from "react/jsx-runtime";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ChevronDown } from "lucide-react";
function HeroSection() {
  return /* @__PURE__ */ jsxs("section", { className: "relative min-h-[100dvh] flex items-center justify-center pt-20 overflow-hidden bg-background", children: [
    /* @__PURE__ */ jsxs("div", { className: "absolute inset-0 overflow-hidden pointer-events-none", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute top-1/4 -left-1/4 h-1/2 w-1/2 rounded-full bg-primary/20 blur-[120px]" }),
      /* @__PURE__ */ jsx("div", { className: "absolute bottom-1/4 -right-1/4 h-1/2 w-1/2 rounded-full bg-cyan-500/20 blur-[120px]" })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4 relative z-10", children: /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto text-center", children: [
      /* @__PURE__ */ jsx("span", { className: "inline-block rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-6", children: "Premium Digital Agency" }),
      /* @__PURE__ */ jsxs("h1", { className: "text-5xl md:text-7xl font-heading font-bold leading-tight mb-6", children: [
        "Transforming Ideas into",
        " ",
        /* @__PURE__ */ jsx("span", { className: "bg-gradient-to-r from-primary to-cyan-400 bg-clip-text text-transparent", children: "Digital Reality" })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-xl md:text-2xl text-muted-foreground mb-10 max-w-2xl mx-auto", children: "We craft premium digital experiences that elevate your brand and drive exceptional results." }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row items-center justify-center gap-4", children: [
        /* @__PURE__ */ jsx(Button, { size: "lg", className: "rounded-full px-8 text-lg w-full sm:w-auto", asChild: true, children: /* @__PURE__ */ jsx(Link, { href: "/contact", children: "Get Started" }) }),
        /* @__PURE__ */ jsx(Button, { size: "lg", variant: "outline", className: "rounded-full px-8 text-lg w-full sm:w-auto", asChild: true, children: /* @__PURE__ */ jsx(Link, { href: "/services", children: "View Services" }) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("div", { className: "absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce", children: /* @__PURE__ */ jsx(ChevronDown, { className: "h-8 w-8 text-muted-foreground" }) })
  ] });
}
export {
  HeroSection
};
