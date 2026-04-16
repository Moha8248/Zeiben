import { jsx, jsxs } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { collection, limit, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from "@/lib/firestore";
import { ArrowRight, ExternalLink } from "lucide-react";
function ProjectsPreviewSection() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const projectsQuery = query(collection(db, "projects"), orderBy("createdAt", "desc"), limit(3));
    const unsubscribe = onSnapshot(projectsQuery, (snapshot) => {
      setProjects(snapshot.docs.map((projectDoc) => ({ id: projectDoc.id, ...projectDoc.data() })));
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);
  return /* @__PURE__ */ jsx("section", { className: "py-24 bg-background", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-6 mb-12 md:flex-row md:items-end md:justify-between", children: [
      /* @__PURE__ */ jsxs("div", { className: "max-w-2xl", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-4xl font-heading font-bold mb-4", children: "Featured Work" }),
        /* @__PURE__ */ jsx("p", { className: "text-lg text-muted-foreground", children: "Explore some of our recent projects that pushed boundaries and delivered results." })
      ] }),
      /* @__PURE__ */ jsx(Button, { variant: "outline", className: "rounded-full shrink-0", asChild: true, children: /* @__PURE__ */ jsxs(Link, { href: "/projects", children: [
        "View All Projects ",
        /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4" })
      ] }) })
    ] }),
    loading ? /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3", children: [1, 2, 3].map((item) => /* @__PURE__ */ jsxs(Card, { className: "bg-card/50 overflow-hidden border-border/50", children: [
      /* @__PURE__ */ jsx(Skeleton, { className: "w-full aspect-video" }),
      /* @__PURE__ */ jsxs(CardContent, { className: "p-6", children: [
        /* @__PURE__ */ jsx(Skeleton, { className: "h-6 w-1/3 mb-3" }),
        /* @__PURE__ */ jsx(Skeleton, { className: "h-8 w-3/4 mb-4" }),
        /* @__PURE__ */ jsx(Skeleton, { className: "h-4 w-full mb-2" }),
        /* @__PURE__ */ jsx(Skeleton, { className: "h-4 w-2/3" })
      ] })
    ] }, item)) }) : projects.length === 0 ? /* @__PURE__ */ jsxs("div", { className: "rounded-2xl border border-dashed border-border/50 bg-card/20 py-20 text-center", children: [
      /* @__PURE__ */ jsx("h3", { className: "text-2xl font-heading font-semibold text-muted-foreground mb-2", children: "Projects coming soon" }),
      /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: "We're currently updating our portfolio." })
    ] }) : /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3", children: projects.map((project) => /* @__PURE__ */ jsxs(Card, { className: "h-full overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-colors duration-300", children: [
      /* @__PURE__ */ jsxs("div", { className: "relative aspect-video overflow-hidden bg-muted", children: [
        project.imageUrl ? /* @__PURE__ */ jsx("img", { src: project.imageUrl, alt: project.title, className: "h-full w-full object-cover transition-transform duration-700 hover:scale-105" }) : /* @__PURE__ */ jsx("div", { className: "flex h-full w-full items-center justify-center bg-gradient-to-br from-primary/20 to-cyan-500/20", children: /* @__PURE__ */ jsx("span", { className: "font-medium text-muted-foreground", children: "No Image" }) }),
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 flex items-center justify-center bg-background/70 opacity-0 transition-opacity duration-300 hover:opacity-100", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 font-medium text-primary", children: [
          "View Project ",
          /* @__PURE__ */ jsx(ExternalLink, { className: "h-4 w-4" })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxs(CardContent, { className: "p-6", children: [
        /* @__PURE__ */ jsx("span", { className: "mb-2 block text-xs font-semibold uppercase tracking-wider text-primary", children: project.category }),
        /* @__PURE__ */ jsx("h3", { className: "mb-3 font-heading text-xl font-bold", children: project.title }),
        /* @__PURE__ */ jsx("p", { className: "line-clamp-2 text-sm text-muted-foreground", children: project.description })
      ] })
    ] }, project.id)) })
  ] }) });
}
export {
  ProjectsPreviewSection
};
