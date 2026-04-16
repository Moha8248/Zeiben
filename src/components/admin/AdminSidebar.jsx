import { jsx, jsxs } from "react/jsx-runtime";
import { Link, useLocation } from "wouter";
import { useAuth } from "@/contexts/AuthContext";
import { LayoutDashboard, FolderKanban, Users, MessageSquare, LogOut, Home } from "lucide-react";
function AdminSidebar() {
  const [location] = useLocation();
  const { signOut } = useAuth();
  const navItems = [
    { href: "/admin", label: "Dashboard", icon: LayoutDashboard },
    { href: "/admin/projects", label: "Manage Projects", icon: FolderKanban },
    { href: "/admin/users", label: "View Users", icon: Users },
    { href: "/admin/contacts", label: "Contact Submissions", icon: MessageSquare }
  ];
  return /* @__PURE__ */ jsxs("aside", { className: "w-64 bg-card border-r border-border h-screen flex flex-col sticky top-0", children: [
    /* @__PURE__ */ jsx("div", { className: "h-20 flex items-center px-6 border-b border-border", children: /* @__PURE__ */ jsxs(Link, { href: "/", className: "flex items-center gap-3", children: [
      /* @__PURE__ */ jsx("img", { src: "/logo.png", alt: "Zeiben", className: "h-8 w-8 object-contain" }),
      /* @__PURE__ */ jsx("span", { className: "font-heading font-bold text-xl text-primary", children: "Admin" })
    ] }) }),
    /* @__PURE__ */ jsx("div", { className: "flex-1 py-6 px-4 space-y-2 overflow-y-auto", children: navItems.map((item) => {
      const Icon = item.icon;
      const isActive = location === item.href;
      return /* @__PURE__ */ jsxs(
        Link,
        {
          href: item.href,
          className: `flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${isActive ? "bg-primary/10 text-primary font-medium" : "text-muted-foreground hover:bg-muted hover:text-foreground"}`,
          children: [
            /* @__PURE__ */ jsx(Icon, { className: "h-5 w-5" }),
            item.label
          ]
        },
        item.href
      );
    }) }),
    /* @__PURE__ */ jsxs("div", { className: "p-4 border-t border-border space-y-2", children: [
      /* @__PURE__ */ jsxs(
        Link,
        {
          href: "/",
          className: "flex items-center gap-3 px-4 py-3 rounded-lg text-muted-foreground hover:bg-muted hover:text-foreground transition-colors",
          children: [
            /* @__PURE__ */ jsx(Home, { className: "h-5 w-5" }),
            "Back to Site"
          ]
        }
      ),
      /* @__PURE__ */ jsxs(
        "button",
        {
          onClick: () => signOut(),
          className: "flex items-center gap-3 px-4 py-3 rounded-lg text-red-500 hover:bg-red-500/10 w-full transition-colors text-left",
          children: [
            /* @__PURE__ */ jsx(LogOut, { className: "h-5 w-5" }),
            "Logout"
          ]
        }
      )
    ] })
  ] });
}
export {
  AdminSidebar
};
