import { jsx, jsxs } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { AdminSidebar } from "@/components/admin/AdminSidebar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { collection, getCountFromServer } from "firebase/firestore";
import { db } from "@/lib/firestore";
import { FolderKanban, MessageSquare, Star } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
function AdminPage() {
  const [stats, setStats] = useState({
    projects: 0,
    contacts: 0,
    reviews: 0
  });
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchStats = async () => {
      try {
        const projectsSnap = await getCountFromServer(collection(db, "projects"));
        const contactsSnap = await getCountFromServer(collection(db, "contact_submissions"));
        const reviewsSnap = await getCountFromServer(collection(db, "reviews"));
        setStats({
          projects: projectsSnap.data().count,
          contacts: contactsSnap.data().count,
          reviews: reviewsSnap.data().count
        });
      } catch (error) {
        console.error("Error fetching stats:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchStats();
  }, []);
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-background flex", children: [
    /* @__PURE__ */ jsx(AdminSidebar, {}),
    /* @__PURE__ */ jsx("main", { className: "flex-1 overflow-y-auto", children: /* @__PURE__ */ jsxs("div", { className: "p-8", children: [
      /* @__PURE__ */ jsx("h1", { className: "text-3xl font-heading font-bold mb-8", children: "Dashboard Overview" }),
      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6", children: [
        /* @__PURE__ */ jsxs(Card, { className: "bg-card/50 border-border/50", children: [
          /* @__PURE__ */ jsxs(CardHeader, { className: "flex flex-row items-center justify-between pb-2", children: [
            /* @__PURE__ */ jsx(CardTitle, { className: "text-sm font-medium text-muted-foreground", children: "Total Projects" }),
            /* @__PURE__ */ jsx(FolderKanban, { className: "h-4 w-4 text-muted-foreground" })
          ] }),
          /* @__PURE__ */ jsx(CardContent, { children: loading ? /* @__PURE__ */ jsx(Skeleton, { className: "h-8 w-16" }) : /* @__PURE__ */ jsx("div", { className: "text-3xl font-bold text-foreground", children: stats.projects }) })
        ] }),
        /* @__PURE__ */ jsxs(Card, { className: "bg-card/50 border-border/50", children: [
          /* @__PURE__ */ jsxs(CardHeader, { className: "flex flex-row items-center justify-between pb-2", children: [
            /* @__PURE__ */ jsx(CardTitle, { className: "text-sm font-medium text-muted-foreground", children: "Contact Submissions" }),
            /* @__PURE__ */ jsx(MessageSquare, { className: "h-4 w-4 text-muted-foreground" })
          ] }),
          /* @__PURE__ */ jsx(CardContent, { children: loading ? /* @__PURE__ */ jsx(Skeleton, { className: "h-8 w-16" }) : /* @__PURE__ */ jsx("div", { className: "text-3xl font-bold text-foreground", children: stats.contacts }) })
        ] }),
        /* @__PURE__ */ jsxs(Card, { className: "bg-card/50 border-border/50", children: [
          /* @__PURE__ */ jsxs(CardHeader, { className: "flex flex-row items-center justify-between pb-2", children: [
            /* @__PURE__ */ jsx(CardTitle, { className: "text-sm font-medium text-muted-foreground", children: "Total Reviews" }),
            /* @__PURE__ */ jsx(Star, { className: "h-4 w-4 text-muted-foreground" })
          ] }),
          /* @__PURE__ */ jsx(CardContent, { children: loading ? /* @__PURE__ */ jsx(Skeleton, { className: "h-8 w-16" }) : /* @__PURE__ */ jsx("div", { className: "text-3xl font-bold text-foreground", children: stats.reviews }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mt-12 bg-card/30 border border-border/50 rounded-2xl p-8 text-center", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-xl font-heading font-semibold mb-2", children: "Welcome to the Zeiben Admin Panel" }),
        /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: "Use the sidebar to navigate and manage your agency's content." })
      ] })
    ] }) })
  ] });
}
export {
  AdminPage as default
};
