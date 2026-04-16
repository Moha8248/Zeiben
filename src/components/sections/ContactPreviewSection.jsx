import { jsx, jsxs } from "react/jsx-runtime";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Mail, MapPin } from "lucide-react";
function ContactPreviewSection() {
  return /* @__PURE__ */ jsxs("section", { className: "py-24 bg-primary text-primary-foreground relative overflow-hidden", children: [
    /* @__PURE__ */ jsx("div", { className: "absolute top-0 right-0 h-64 w-64 rounded-full bg-white/10 blur-[80px]" }),
    /* @__PURE__ */ jsx("div", { className: "absolute bottom-0 left-0 h-64 w-64 rounded-full bg-black/10 blur-[80px]" }),
    /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4 relative z-10", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center justify-between gap-12 lg:flex-row", children: [
      /* @__PURE__ */ jsxs("div", { className: "max-w-2xl", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-4xl md:text-5xl font-heading font-bold mb-6", children: "Ready to elevate your digital presence?" }),
        /* @__PURE__ */ jsx("p", { className: "text-xl text-primary-foreground/80 mb-8", children: "Let's create something extraordinary together. Our team is ready to turn your vision into reality." }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-6 sm:flex-row", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsx("div", { className: "flex h-12 w-12 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm", children: /* @__PURE__ */ jsx(Mail, { className: "h-5 w-5" }) }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("p", { className: "text-sm text-primary-foreground/70", children: "Email us at" }),
              /* @__PURE__ */ jsx("p", { className: "font-semibold", children: "hello@zeiben.com" })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsx("div", { className: "flex h-12 w-12 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm", children: /* @__PURE__ */ jsx(MapPin, { className: "h-5 w-5" }) }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("p", { className: "text-sm text-primary-foreground/70", children: "Find us in" }),
              /* @__PURE__ */ jsx("p", { className: "font-semibold", children: "San Francisco, CA" })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsx(Button, { size: "lg", variant: "secondary", className: "rounded-full px-10 py-8 text-lg font-bold shadow-xl", asChild: true, children: /* @__PURE__ */ jsx(Link, { href: "/contact", children: "Start a Project" }) })
    ] }) })
  ] });
}
export {
  ContactPreviewSection
};
