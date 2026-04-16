import { jsx, jsxs } from "react/jsx-runtime";
import { Link } from "wouter";
import { Globe, Camera, Briefcase, MessageCircle, Play } from "lucide-react";
const socialLinks = [
  { label: "Website", icon: Globe },
  { label: "Instagram", icon: Camera },
  { label: "LinkedIn", icon: Briefcase },
  { label: "X", icon: MessageCircle },
  { label: "YouTube", icon: Play }
];
function Footer() {
  return /* @__PURE__ */ jsx("footer", { className: "bg-background border-t border-border py-12 md:py-16", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4", children: [
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 gap-12 md:grid-cols-4", children: [
      /* @__PURE__ */ jsxs("div", { className: "md:col-span-1", children: [
        /* @__PURE__ */ jsxs(Link, { href: "/", className: "flex items-center gap-3 mb-6", children: [
          /* @__PURE__ */ jsx("img", { src: "/logo.png", alt: "Zeiben", className: "h-8 w-8 object-contain" }),
          /* @__PURE__ */ jsx("span", { className: "font-heading font-bold text-xl tracking-tight text-primary", children: "Zeiben" })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-muted-foreground mb-6", children: "Transforming ideas into digital reality with clean strategy, thoughtful design, and dependable execution." }),
        /* @__PURE__ */ jsx("div", { className: "flex items-center gap-4", children: socialLinks.map(({ label, icon: Icon }) => /* @__PURE__ */ jsx("a", { href: "#", "aria-label": label, className: "text-muted-foreground hover:text-primary transition-colors", children: /* @__PURE__ */ jsx(Icon, { className: "h-5 w-5" }) }, label)) })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h4", { className: "font-heading font-semibold text-foreground mb-6", children: "Quick Links" }),
        /* @__PURE__ */ jsx("ul", { className: "space-y-4", children: [
          ["/", "Home"],
          ["/about", "About Us"],
          ["/services", "Services"],
          ["/projects", "Projects"],
          ["/contact", "Contact"]
        ].map(([href, label]) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { href, className: "text-muted-foreground hover:text-primary transition-colors", children: label }) }, href)) })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h4", { className: "font-heading font-semibold text-foreground mb-6", children: "Services" }),
        /* @__PURE__ */ jsxs("ul", { className: "space-y-4 text-muted-foreground", children: [
          /* @__PURE__ */ jsx("li", { children: "Web Development" }),
          /* @__PURE__ */ jsx("li", { children: "Mobile Apps" }),
          /* @__PURE__ */ jsx("li", { children: "Digital Marketing" }),
          /* @__PURE__ */ jsx("li", { children: "Content Creation" }),
          /* @__PURE__ */ jsx("li", { children: "Editing & Production" }),
          /* @__PURE__ */ jsx("li", { children: "Photography & Videography" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h4", { className: "font-heading font-semibold text-foreground mb-6", children: "Contact" }),
        /* @__PURE__ */ jsxs("ul", { className: "space-y-4 text-muted-foreground", children: [
          /* @__PURE__ */ jsx("li", { children: "hello@zeiben.com" }),
          /* @__PURE__ */ jsx("li", { children: "+1 (555) 123-4567" }),
          /* @__PURE__ */ jsx("li", { children: "123 Digital Ave, Suite 400, San Francisco, CA 94107" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "border-t border-border mt-12 pt-8 flex flex-col gap-4 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between", children: [
      /* @__PURE__ */ jsx("p", { children: "\xA9 2026 Zeiben. All rights reserved." }),
      /* @__PURE__ */ jsxs("div", { className: "flex gap-6", children: [
        /* @__PURE__ */ jsx("a", { href: "#", className: "hover:text-primary transition-colors", children: "Privacy Policy" }),
        /* @__PURE__ */ jsx("a", { href: "#", className: "hover:text-primary transition-colors", children: "Terms of Service" })
      ] })
    ] })
  ] }) });
}
export {
  Footer
};
