import { jsx, jsxs } from "react/jsx-runtime";
import { Router as WouterRouter, Route, Switch } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { AuthProvider } from "@/contexts/AuthContext";
import { ProtectedRoute } from "@/components/ProtectedRoute";
import HomePage from "@/pages/HomePage";
import AboutPage from "@/pages/AboutPage";
import ServicesPage from "@/pages/ServicesPage";
import ProjectsPage from "@/pages/ProjectsPage";
import ContactPage from "@/pages/ContactPage";
import LoginPage from "@/pages/LoginPage";
import SignupPage from "@/pages/SignupPage";
import AdminPage from "@/pages/admin/AdminPage";
import AdminProjectsPage from "@/pages/admin/AdminProjectsPage";
import AdminUsersPage from "@/pages/admin/AdminUsersPage";
import AdminContactsPage from "@/pages/admin/AdminContactsPage";
import NotFound from "@/pages/not-found";
const queryClient = new QueryClient();
function AppRoutes() {
  return /* @__PURE__ */ jsxs(Switch, { children: [
    /* @__PURE__ */ jsx(Route, { path: "/", component: HomePage }),
    /* @__PURE__ */ jsx(Route, { path: "/about", component: AboutPage }),
    /* @__PURE__ */ jsx(Route, { path: "/services", component: ServicesPage }),
    /* @__PURE__ */ jsx(Route, { path: "/projects", component: ProjectsPage }),
    /* @__PURE__ */ jsx(Route, { path: "/contact", component: ContactPage }),
    /* @__PURE__ */ jsx(Route, { path: "/login", component: LoginPage }),
    /* @__PURE__ */ jsx(Route, { path: "/signup", component: SignupPage }),
    /* @__PURE__ */ jsx(Route, { path: "/admin", children: /* @__PURE__ */ jsx(ProtectedRoute, { children: /* @__PURE__ */ jsx(AdminPage, {}) }) }),
    /* @__PURE__ */ jsx(Route, { path: "/admin/projects", children: /* @__PURE__ */ jsx(ProtectedRoute, { children: /* @__PURE__ */ jsx(AdminProjectsPage, {}) }) }),
    /* @__PURE__ */ jsx(Route, { path: "/admin/users", children: /* @__PURE__ */ jsx(ProtectedRoute, { children: /* @__PURE__ */ jsx(AdminUsersPage, {}) }) }),
    /* @__PURE__ */ jsx(Route, { path: "/admin/contacts", children: /* @__PURE__ */ jsx(ProtectedRoute, { children: /* @__PURE__ */ jsx(AdminContactsPage, {}) }) }),
    /* @__PURE__ */ jsx(Route, { path: "*", component: NotFound })
  ] });
}
function App() {
  return /* @__PURE__ */ jsx(QueryClientProvider, { client: queryClient, children: /* @__PURE__ */ jsx(ThemeProvider, { defaultTheme: "dark", children: /* @__PURE__ */ jsx(AuthProvider, { children: /* @__PURE__ */ jsxs(TooltipProvider, { children: [
    /* @__PURE__ */ jsx(WouterRouter, { base: import.meta.env.BASE_URL.replace(/\/$/, ""), children: /* @__PURE__ */ jsx(AppRoutes, {}) }),
    /* @__PURE__ */ jsx(Toaster, {})
  ] }) }) }) });
}
var App_default = App;
export {
  App_default as default
};
