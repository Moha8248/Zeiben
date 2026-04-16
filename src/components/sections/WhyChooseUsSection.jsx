import { jsx, jsxs } from "react/jsx-runtime";
import { Users, Lightbulb, Zap, Heart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
const features = [
  { title: "Experienced Team", description: "Industry veterans with a track record of digital excellence.", icon: Users, stat: "10+", statLabel: "Experts" },
  { title: "Creative Solutions", description: "Bespoke strategies that break through the noise.", icon: Lightbulb, stat: "500+", statLabel: "Ideas Delivered" },
  { title: "Fast Delivery", description: "Agile methodologies ensuring rapid time-to-market.", icon: Zap, stat: "2x", statLabel: "Faster Execution" },
  { title: "Client Satisfaction", description: "A relentless focus on exceeding expectations.", icon: Heart, stat: "99%", statLabel: "Happy Clients" }
];
function WhyChooseUsSection() {
  return /* @__PURE__ */ jsxs("section", { className: "py-24 bg-background relative overflow-hidden", children: [
    /* @__PURE__ */ jsx("div", { className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[800px] w-[800px] rounded-full bg-primary/5 blur-[100px] pointer-events-none" }),
    /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 relative z-10", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center max-w-3xl mx-auto mb-16", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-4xl font-heading font-bold mb-4", children: "Why Choose Zeiben" }),
        /* @__PURE__ */ jsx("p", { className: "text-lg text-muted-foreground", children: "We don't just build products. We shape dependable digital systems that help brands move with confidence." })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4", children: features.map((feature) => {
        const Icon = feature.icon;
        return /* @__PURE__ */ jsx(Card, { className: "h-full bg-card/40 backdrop-blur-md border-border/50 text-center hover:-translate-y-1 transition-transform duration-300", children: /* @__PURE__ */ jsxs(CardContent, { className: "pt-8 pb-8 px-6", children: [
          /* @__PURE__ */ jsx("div", { className: "mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10", children: /* @__PURE__ */ jsx(Icon, { className: "h-8 w-8 text-primary" }) }),
          /* @__PURE__ */ jsxs("div", { className: "mb-4", children: [
            /* @__PURE__ */ jsx("h3", { className: "text-3xl font-bold text-foreground mb-1", children: feature.stat }),
            /* @__PURE__ */ jsx("p", { className: "text-sm font-medium uppercase tracking-wider text-primary", children: feature.statLabel })
          ] }),
          /* @__PURE__ */ jsx("h4", { className: "font-heading text-xl font-semibold mb-3", children: feature.title }),
          /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-sm", children: feature.description })
        ] }) }, feature.title);
      }) })
    ] })
  ] });
}
export {
  WhyChooseUsSection
};
