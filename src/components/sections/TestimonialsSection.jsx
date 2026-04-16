import { jsx, jsxs } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { collection, onSnapshot, query } from "firebase/firestore";
import { db } from "@/lib/firestore";
import { Quote, Star } from "lucide-react";
function TestimonialsSection() {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const testimonialsQuery = query(collection(db, "testimonials"));
    const unsubscribe = onSnapshot(testimonialsQuery, (snapshot) => {
      setTestimonials(snapshot.docs.map((testimonialDoc) => ({ id: testimonialDoc.id, ...testimonialDoc.data() })));
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);
  if (!loading && testimonials.length === 0) {
    return null;
  }
  return /* @__PURE__ */ jsxs("section", { className: "py-24 bg-muted/30 relative overflow-hidden", children: [
    /* @__PURE__ */ jsx("div", { className: "absolute top-0 right-0 h-full w-1/3 rounded-full bg-cyan-500/5 blur-[120px] pointer-events-none" }),
    /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 relative z-10", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center max-w-3xl mx-auto mb-16", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-4xl font-heading font-bold mb-4", children: "Client Success Stories" }),
        /* @__PURE__ */ jsx("p", { className: "text-lg text-muted-foreground", children: "Hear what our partners have to say about working with Zeiben." })
      ] }),
      loading ? /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3", children: [1, 2, 3].map((item) => /* @__PURE__ */ jsx(Card, { className: "bg-card/50 border-border/50", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-8", children: [
        /* @__PURE__ */ jsx(Skeleton, { className: "h-8 w-8 rounded-full mb-6" }),
        /* @__PURE__ */ jsx(Skeleton, { className: "h-4 w-full mb-2" }),
        /* @__PURE__ */ jsx(Skeleton, { className: "h-4 w-full mb-2" }),
        /* @__PURE__ */ jsx(Skeleton, { className: "h-4 w-2/3 mb-6" }),
        /* @__PURE__ */ jsx(Skeleton, { className: "h-4 w-1/3" })
      ] }) }, item)) }) : /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3", children: testimonials.map((testimonial) => /* @__PURE__ */ jsx(Card, { className: "h-full bg-card/40 backdrop-blur-md border-border/50 hover:border-primary/30 transition-colors", children: /* @__PURE__ */ jsxs(CardContent, { className: "flex h-full flex-col p-8", children: [
        /* @__PURE__ */ jsx(Quote, { className: "mb-6 h-10 w-10 shrink-0 text-primary/40" }),
        /* @__PURE__ */ jsxs("p", { className: "mb-8 flex-grow text-lg italic text-foreground", children: [
          '"',
          testimonial.feedback,
          '"'
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "mt-auto", children: [
          testimonial.rating ? /* @__PURE__ */ jsx("div", { className: "mb-2 flex gap-1", children: Array.from({ length: 5 }).map((_, index) => /* @__PURE__ */ jsx(
            Star,
            {
              className: index < testimonial.rating ? "h-4 w-4 fill-primary text-primary" : "h-4 w-4 text-muted"
            },
            index
          )) }) : null,
          /* @__PURE__ */ jsx("p", { className: "font-heading font-semibold text-primary", children: testimonial.name })
        ] })
      ] }) }, testimonial.id)) })
    ] })
  ] });
}
export {
  TestimonialsSection
};
