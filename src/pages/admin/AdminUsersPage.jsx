import { jsx, jsxs } from "react/jsx-runtime";
import { AdminSidebar } from "@/components/admin/AdminSidebar";
import { useAuth } from "@/contexts/AuthContext";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { InfoIcon, UserCircle } from "lucide-react";
function AdminUsersPage() {
  const { currentUser } = useAuth();
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-background flex", children: [
    /* @__PURE__ */ jsx(AdminSidebar, {}),
    /* @__PURE__ */ jsxs("main", { className: "flex-1 p-8 overflow-y-auto", children: [
      /* @__PURE__ */ jsx("h1", { className: "text-3xl font-heading font-bold mb-8", children: "View Users" }),
      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-8", children: [
        /* @__PURE__ */ jsxs(Card, { className: "bg-card border-border/50", children: [
          /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsx(UserCircle, { className: "h-5 w-5 text-primary" }),
            " Current Session"
          ] }) }),
          /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", children: "Email" }),
              /* @__PURE__ */ jsx("p", { className: "font-medium", children: currentUser?.email })
            ] }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", children: "User ID" }),
              /* @__PURE__ */ jsx("p", { className: "font-mono text-xs p-2 bg-muted rounded-md mt-1 break-all", children: currentUser?.uid })
            ] }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", children: "Account Created" }),
              /* @__PURE__ */ jsx("p", { className: "font-medium", children: currentUser?.metadata.creationTime ? new Date(currentUser.metadata.creationTime).toLocaleString() : "" })
            ] })
          ] }) })
        ] }),
        /* @__PURE__ */ jsxs(Card, { className: "bg-cyan-500/5 border-cyan-500/20", children: [
          /* @__PURE__ */ jsxs(CardHeader, { children: [
            /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center gap-2 text-cyan-600 dark:text-cyan-400", children: [
              /* @__PURE__ */ jsx(InfoIcon, { className: "h-5 w-5" }),
              " Admin Notice"
            ] }),
            /* @__PURE__ */ jsx(CardDescription, { children: "Regarding full user management" })
          ] }),
          /* @__PURE__ */ jsxs(CardContent, { className: "text-muted-foreground", children: [
            /* @__PURE__ */ jsxs("p", { className: "mb-4", children: [
              "Viewing and managing the complete list of registered users (listing all accounts, deleting other users, role assignment) requires the ",
              /* @__PURE__ */ jsx("strong", { children: "Firebase Admin SDK" }),
              " running in a secure backend environment."
            ] }),
            /* @__PURE__ */ jsx("p", { children: "The client-side Firebase Auth SDK (which this frontend uses) only allows access to the currently authenticated user's data for security reasons." })
          ] })
        ] })
      ] })
    ] })
  ] });
}
export {
  AdminUsersPage as default
};
