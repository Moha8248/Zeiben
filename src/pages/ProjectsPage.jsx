import { jsx, jsxs } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from "@/lib/firestore";
import { ExternalLink } from "lucide-react";
const CATEGORIES = ["All", "Web", "Mobile", "Marketing", "Content"];
function ProjectsPage() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState("All");
  useEffect(() => {
    const projectsQuery = query(collection(db, "projects"), orderBy("createdAt", "desc"));
    const unsubscribe = onSnapshot(projectsQuery, (snapshot) => {
      setProjects(snapshot.docs.map((projectDoc) => ({ id: projectDoc.id, ...projectDoc.data() })));
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);
  const filteredProjects = activeCategory === "All" ? projects : projects.filter(
    (project) => (project.category || "").toLowerCase().includes(activeCategory.toLowerCase())
  );
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen flex flex-col", children: [
    /* @__PURE__ */ jsx(Navbar, {}),
    /* @__PURE__ */ jsxs("main", { className: "flex-1 pt-20", children: [
      /* @__PURE__ */ jsx("section", { className: "relative overflow-hidden border-b border-border/50 bg-background py-24", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto max-w-4xl px-4 text-center", children: [
        /* @__PURE__ */ jsxs("h1", { className: "mb-6 text-4xl font-heading font-bold md:text-6xl", children: [
          "Selected ",
          /* @__PURE__ */ jsx("span", { className: "text-primary", children: "Works" })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-xl text-muted-foreground", children: "A showcase of our recent digital craftsmanship." })
      ] }) }),
      /* @__PURE__ */ jsx("section", { className: "min-h-[50vh] bg-muted/20 py-12 md:py-24", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4", children: [
        /* @__PURE__ */ jsx("div", { className: "mb-16 flex flex-wrap justify-center gap-2 md:gap-4", children: CATEGORIES.map((category) => /* @__PURE__ */ jsx(
          "button",
          {
            type: "button",
            onClick: () => setActiveCategory(category),
            className: activeCategory === category ? "rounded-full bg-primary px-6 py-2 text-sm font-medium text-primary-foreground shadow-md" : "rounded-full border border-border bg-card px-6 py-2 text-sm font-medium text-muted-foreground hover:bg-muted",
            children: category
          },
          category
        )) }),
        loading ? /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3", children: [1, 2, 3, 4, 5, 6].map((item) => /* @__PURE__ */ jsxs(Card, { className: "bg-card/50 overflow-hidden border-border/50", children: [
          /* @__PURE__ */ jsx(Skeleton, { className: "w-full aspect-video" }),
          /* @__PURE__ */ jsxs(CardContent, { className: "p-6", children: [
            /* @__PURE__ */ jsx(Skeleton, { className: "h-6 w-1/3 mb-3" }),
            /* @__PURE__ */ jsx(Skeleton, { className: "h-8 w-3/4 mb-4" }),
            /* @__PURE__ */ jsx(Skeleton, { className: "h-4 w-full mb-2" }),
            /* @__PURE__ */ jsx(Skeleton, { className: "h-4 w-2/3" })
          ] })
        ] }, item)) }) : filteredProjects.length === 0 ? /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-3xl rounded-3xl border border-dashed border-border/50 bg-card/20 py-32 text-center", children: [
          /* @__PURE__ */ jsx("h3", { className: "mb-2 text-2xl font-heading font-semibold text-muted-foreground", children: "No projects found" }),
          /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: "Try another category or check back later." })
        ] }) : /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3", children: filteredProjects.map((project) => /* @__PURE__ */ jsxs(Card, { className: "h-full overflow-hidden border-border/50 bg-card/80 backdrop-blur-sm hover:border-primary/50 transition-colors duration-300", children: [
          /* @__PURE__ */ jsxs("div", { className: "relative aspect-video overflow-hidden bg-muted", children: [
            project.imageUrl ? /* @__PURE__ */ jsx("img", { src: project.imageUrl, alt: project.title, className: "h-full w-full object-cover transition-transform duration-700 hover:scale-105" }) : /* @__PURE__ */ jsx("div", { className: "flex h-full w-full items-center justify-center bg-gradient-to-br from-primary/20 to-cyan-500/20", children: /* @__PURE__ */ jsx("span", { className: "font-medium text-muted-foreground", children: "No Image" }) }),
            /* @__PURE__ */ jsx("div", { className: "absolute inset-0 flex items-center justify-center bg-background/80 opacity-0 transition-opacity duration-300 hover:opacity-100", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 font-medium text-primary", children: [
              "View Details ",
              /* @__PURE__ */ jsx(ExternalLink, { className: "h-4 w-4" })
            ] }) })
          ] }),
          /* @__PURE__ */ jsxs(CardContent, { className: "p-6", children: [
            /* @__PURE__ */ jsx("span", { className: "mb-2 block text-xs font-semibold uppercase tracking-wider text-primary", children: project.category }),
            /* @__PURE__ */ jsx("h3", { className: "mb-3 font-heading text-2xl font-bold", children: project.title }),
            /* @__PURE__ */ jsx("p", { className: "line-clamp-3 text-sm leading-relaxed text-muted-foreground", children: project.description })
          ] })
        ] }, project.id)) })
      ] }) })
    ] }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
}
export {
  ProjectsPage as default
};
