import { jsx, jsxs } from "react/jsx-runtime";
import { Card, CardContent } from "@/components/ui/card";
import { Globe, ArrowUpRight } from "lucide-react";
const team = [
  { name: "Gopika", role: "Developer, Team Lead", initials: "G", gradient: "from-amber-400 to-orange-600" },
  { name: "Mohanraj", role: "Developer", initials: "M", gradient: "from-blue-400 to-indigo-600" },
  { name: "Diviyadharani", role: "Client Manager", initials: "D", gradient: "from-emerald-400 to-teal-600" },
  { name: "Sam", role: "Content Creator & Digital Marketing", initials: "S", gradient: "from-fuchsia-400 to-pink-600" },
  { name: "Praba", role: "Editor", initials: "P", gradient: "from-rose-400 to-red-600" }
];
function TeamSection() {
  return /* @__PURE__ */ jsx("section", { className: "py-24 bg-muted/30", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4", children: [
    /* @__PURE__ */ jsxs("div", { className: "text-center max-w-3xl mx-auto mb-16", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-4xl font-heading font-bold mb-4", children: "Meet the Artisans" }),
      /* @__PURE__ */ jsx("p", { className: "text-lg text-muted-foreground", children: "The creative minds powering the Zeiben experience." })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "flex flex-wrap justify-center gap-8", children: team.map((member) => /* @__PURE__ */ jsx("div", { className: "w-full max-w-sm sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)]", children: /* @__PURE__ */ jsx(Card, { className: "bg-card/50 backdrop-blur-sm border-border/50 text-center hover:shadow-xl hover:shadow-primary/5 transition-all duration-300", children: /* @__PURE__ */ jsxs(CardContent, { className: "pt-10 pb-8 px-6", children: [
      /* @__PURE__ */ jsx("div", { className: `mx-auto mb-6 flex h-32 w-32 items-center justify-center rounded-full bg-gradient-to-br ${member.gradient}`, children: /* @__PURE__ */ jsx("span", { className: "text-4xl font-bold text-white", children: member.initials }) }),
      /* @__PURE__ */ jsx("h3", { className: "font-heading text-xl font-bold mb-1", children: member.name }),
      /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground mb-6 min-h-10", children: member.role }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center gap-4", children: [
        /* @__PURE__ */ jsx("a", { href: "#", className: "text-muted-foreground hover:text-primary transition-colors", "aria-label": `${member.name} profile`, children: /* @__PURE__ */ jsx(Globe, { className: "h-5 w-5" }) }),
        /* @__PURE__ */ jsx("a", { href: "#", className: "text-muted-foreground hover:text-primary transition-colors", "aria-label": `${member.name} social`, children: /* @__PURE__ */ jsx(ArrowUpRight, { className: "h-5 w-5" }) })
      ] })
    ] }) }) }, member.name)) })
  ] }) });
}
export {
  TeamSection
};
