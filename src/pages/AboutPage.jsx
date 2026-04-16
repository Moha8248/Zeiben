import { jsx, jsxs } from "react/jsx-runtime";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { TeamSection } from "@/components/sections/TeamSection";
const timeline = [
  { year: "2020", title: "The Inception", description: "Zeiben was founded by a small team of passionate builders focused on raising the standard of digital quality." },
  { year: "2022", title: "Global Expansion", description: "We expanded operations to support clients across multiple regions and significantly grew our team." },
  { year: "2024", title: "Award-Winning Work", description: "Our work gained recognition for turning complex digital problems into polished, usable experiences." },
  { year: "2026", title: "The Premium Standard", description: "Zeiben became the partner brands trust for premium, high-impact digital delivery." }
];
function AboutPage() {
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen flex flex-col", children: [
    /* @__PURE__ */ jsx(Navbar, {}),
    /* @__PURE__ */ jsxs("main", { className: "flex-1 pt-20", children: [
      /* @__PURE__ */ jsx("section", { className: "relative overflow-hidden bg-muted/30 py-24 md:py-32", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto max-w-4xl px-4 text-center", children: [
        /* @__PURE__ */ jsxs("h1", { className: "mb-6 text-4xl font-heading font-bold md:text-6xl", children: [
          "Crafting Digital ",
          /* @__PURE__ */ jsx("span", { className: "text-primary", children: "Legacies" })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-xl text-muted-foreground", children: "We are a collective of strategists, designers, and engineers dedicated to building thoughtful digital products." })
      ] }) }),
      /* @__PURE__ */ jsx("section", { className: "bg-background py-24", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 gap-12 md:grid-cols-2 lg:gap-24", children: [
        /* @__PURE__ */ jsxs("div", { className: "rounded-3xl border border-border/50 bg-card/30 p-10 backdrop-blur-sm", children: [
          /* @__PURE__ */ jsx("div", { className: "mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10", children: /* @__PURE__ */ jsx("span", { className: "text-3xl font-heading font-bold text-primary", children: "M" }) }),
          /* @__PURE__ */ jsx("h2", { className: "mb-4 text-3xl font-heading font-bold", children: "Our Mission" }),
          /* @__PURE__ */ jsx("p", { className: "text-lg leading-relaxed text-muted-foreground", children: "To help ambitious brands grow with digital tools and experiences that are strategic, elegant, and dependable." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "rounded-3xl border border-cyan-500/20 bg-cyan-500/5 p-10 backdrop-blur-sm", children: [
          /* @__PURE__ */ jsx("div", { className: "mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-500/10", children: /* @__PURE__ */ jsx("span", { className: "text-3xl font-heading font-bold text-cyan-500", children: "V" }) }),
          /* @__PURE__ */ jsx("h2", { className: "mb-4 text-3xl font-heading font-bold", children: "Our Vision" }),
          /* @__PURE__ */ jsx("p", { className: "text-lg leading-relaxed text-muted-foreground", children: "To set a higher standard for digital execution where design, performance, and clarity all work together." })
        ] })
      ] }) }) }),
      /* @__PURE__ */ jsx("section", { className: "bg-muted/20 py-24", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto max-w-5xl px-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "mb-16 text-center", children: [
          /* @__PURE__ */ jsx("h2", { className: "mb-4 text-3xl font-heading font-bold md:text-4xl", children: "Our Journey" }),
          /* @__PURE__ */ jsx("p", { className: "text-lg text-muted-foreground", children: "The milestones that shaped Zeiben." })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "space-y-10", children: timeline.map((item) => /* @__PURE__ */ jsxs("div", { className: "rounded-2xl border border-border/50 bg-card/40 p-8", children: [
          /* @__PURE__ */ jsx("span", { className: "mb-2 block text-xl font-bold tracking-wider text-primary", children: item.year }),
          /* @__PURE__ */ jsx("h3", { className: "mb-3 text-2xl font-heading font-bold", children: item.title }),
          /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: item.description })
        ] }, item.year)) })
      ] }) }),
      /* @__PURE__ */ jsx(TeamSection, {})
    ] }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
}
export {
  AboutPage as default
};
