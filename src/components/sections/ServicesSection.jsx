import { jsx, jsxs } from "react/jsx-runtime";
import { Globe, Smartphone, Film, TrendingUp, PenTool, Camera } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
const services = [
  { title: "Web Development", description: "Custom, high-performance websites built with modern frameworks and pixel-perfect precision.", icon: Globe },
  { title: "Mobile App Development", description: "Native and cross-platform mobile experiences that engage users on any device.", icon: Smartphone },
  { title: "Digital Marketing", description: "Data-driven strategies to amplify your reach, engage audiences, and drive growth.", icon: TrendingUp },
  { title: "Content Creation", description: "Compelling narratives and copy that resonate with your target demographic.", icon: PenTool },
  { title: "Photo/Video Editing", description: "Professional post-production that turns raw footage into cinematic masterpieces.", icon: Film },
  { title: "Photography & Videography", description: "Premium visual capture services for brands, products, and corporate events.", icon: Camera }
];
function ServicesSection() {
  return /* @__PURE__ */ jsx("section", { className: "py-24 bg-muted/30", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4", children: [
    /* @__PURE__ */ jsxs("div", { className: "text-center max-w-3xl mx-auto mb-16", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-4xl font-heading font-bold mb-4", children: "Our Premium Services" }),
      /* @__PURE__ */ jsx("p", { className: "text-lg text-muted-foreground", children: "We provide a comprehensive suite of digital solutions tailored for ambitious brands." })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3", children: services.map((service) => {
      const Icon = service.icon;
      return /* @__PURE__ */ jsxs(Card, { className: "h-full bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300", children: [
        /* @__PURE__ */ jsxs(CardHeader, { children: [
          /* @__PURE__ */ jsx("div", { className: "mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10", children: /* @__PURE__ */ jsx(Icon, { className: "h-6 w-6 text-primary" }) }),
          /* @__PURE__ */ jsx(CardTitle, { className: "font-heading text-xl", children: service.title })
        ] }),
        /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsx(CardDescription, { className: "text-base", children: service.description }) })
      ] }, service.title);
    }) })
  ] }) });
}
export {
  ServicesSection
};
