import { Fragment, jsx } from "react/jsx-runtime";
import { Redirect } from "wouter";
import { useAuth } from "@/contexts/AuthContext";
import { Loader2 } from "lucide-react";
function ProtectedRoute({ children }) {
  const { currentUser, loading } = useAuth();
  if (loading) {
    return /* @__PURE__ */ jsx("div", { className: "min-h-screen flex items-center justify-center", children: /* @__PURE__ */ jsx(Loader2, { className: "h-8 w-8 animate-spin text-primary" }) });
  }
  if (!currentUser) {
    return /* @__PURE__ */ jsx(Redirect, { to: "/login" });
  }
  return /* @__PURE__ */ jsx(Fragment, { children });
}
export {
  ProtectedRoute
};
