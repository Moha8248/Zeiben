import { jsx, jsxs } from "react/jsx-runtime";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhyChooseUsSection } from "@/components/sections/WhyChooseUsSection";
import { Globe, Smartphone, Film, TrendingUp, PenTool, Camera, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
const detailedServices = [
  { title: "Web Development", description: "High-performance websites and web apps built for speed, scale, and maintainability.", icon: Globe, features: ["Custom Web Apps", "E-Commerce Solutions", "CMS Integration", "Performance Optimization"] },
  { title: "Mobile App Development", description: "Thoughtful mobile experiences designed to feel intuitive and dependable on every device.", icon: Smartphone, features: ["iOS Development", "Android Development", "Cross-Platform Apps", "Store Readiness"] },
  { title: "Digital Marketing", description: "Campaigns grounded in strategy, analytics, and a clear path to measurable growth.", icon: TrendingUp, features: ["SEO / SEM", "Paid Campaigns", "Social Media", "Conversion Optimization"] },
  { title: "Content Creation", description: "Brand messaging and content systems that make your story easier to understand and trust.", icon: PenTool, features: ["Copywriting", "Brand Strategy", "Blog Content", "Social Content"] },
  { title: "Photo & Video Editing", description: "Professional post-production that sharpens raw footage into polished, on-brand media.", icon: Film, features: ["Color Grading", "Motion Graphics", "Audio Mixing", "Narrative Editing"] },
  { title: "Photography & Videography", description: "Visual capture for products, brands, events, and campaigns with a premium production feel.", icon: Camera, features: ["Product Photography", "Corporate Videos", "Event Coverage", "Drone Footage"] }
];
function ServicesPage() {
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen flex flex-col", children: [
    /* @__PURE__ */ jsx(Navbar, {}),
    /* @__PURE__ */ jsxs("main", { className: "flex-1 pt-20", children: [
      /* @__PURE__ */ jsxs("section", { className: "relative overflow-hidden border-b border-border/50 bg-background py-24", children: [
        /* @__PURE__ */ jsx("div", { className: "absolute top-0 right-0 h-[500px] w-[500px] rounded-full bg-primary/10 blur-[100px] pointer-events-none" }),
        /* @__PURE__ */ jsxs("div", { className: "container mx-auto max-w-4xl px-4 text-center", children: [
          /* @__PURE__ */ jsxs("h1", { className: "mb-6 text-4xl font-heading font-bold md:text-6xl", children: [
            "Our ",
            /* @__PURE__ */ jsx("span", { className: "text-primary", children: "Capabilities" })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-xl text-muted-foreground", children: "Comprehensive digital solutions tailored for ambitious brands seeking extraordinary results." })
        ] })
      ] }),
      /* @__PURE__ */ jsx("section", { className: "bg-muted/20 py-24", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 gap-12 lg:grid-cols-2", children: detailedServices.map((service) => {
        const Icon = service.icon;
        return /* @__PURE__ */ jsxs("div", { className: "rounded-3xl border border-border/50 bg-card/50 p-8 transition-colors hover:border-primary/30 md:p-12", children: [
          /* @__PURE__ */ jsxs("div", { className: "mb-8 flex items-center gap-6", children: [
            /* @__PURE__ */ jsx("div", { className: "flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10", children: /* @__PURE__ */ jsx(Icon, { className: "h-8 w-8 text-primary" }) }),
            /* @__PURE__ */ jsx("h2", { className: "text-3xl font-heading font-bold", children: service.title })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "mb-8 text-lg leading-relaxed text-muted-foreground", children: service.description }),
          /* @__PURE__ */ jsx("h3", { className: "mb-4 font-semibold text-foreground", children: "Key Features" }),
          /* @__PURE__ */ jsx("ul", { className: "mb-8 grid grid-cols-1 gap-3 sm:grid-cols-2", children: service.features.map((feature) => /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-2 text-muted-foreground", children: [
            /* @__PURE__ */ jsx("div", { className: "h-1.5 w-1.5 rounded-full bg-primary" }),
            feature
          ] }, feature)) }),
          /* @__PURE__ */ jsx(Button, { variant: "outline", className: "rounded-full", asChild: true, children: /* @__PURE__ */ jsxs(Link, { href: "/contact", children: [
            "Discuss Your Needs ",
            /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4" })
          ] }) })
        ] }, service.title);
      }) }) }) }),
      /* @__PURE__ */ jsx(WhyChooseUsSection, {})
    ] }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
}
export {
  ServicesPage as default
};
