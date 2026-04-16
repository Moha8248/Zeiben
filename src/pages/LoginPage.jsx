import { jsx, jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { Link, useLocation } from "wouter";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/lib/firebase";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { ArrowLeft } from "lucide-react";
function LoginPage() {
  const [, setLocation] = useLocation();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [form, setForm] = useState({ email: "", password: "" });
  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };
  const onSubmit = async (event) => {
    event.preventDefault();
    if (!form.email || !form.password) {
      toast({
        title: "Missing credentials",
        description: "Enter both your email and password.",
        variant: "destructive"
      });
      return;
    }
    setIsLoading(true);
    try {
      await signInWithEmailAndPassword(auth, form.email, form.password);
      toast({
        title: "Login successful",
        description: "Welcome back to Zeiben admin."
      });
      setLocation("/admin");
    } catch (error) {
      toast({
        title: "Login failed",
        description: error.message || "Invalid email or password.",
        variant: "destructive"
      });
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };
  return /* @__PURE__ */ jsxs("div", { className: "relative flex min-h-screen items-center justify-center overflow-hidden bg-background p-4", children: [
    /* @__PURE__ */ jsx("div", { className: "absolute top-1/4 left-1/4 h-[500px] w-[500px] rounded-full bg-primary/10 blur-[120px] pointer-events-none" }),
    /* @__PURE__ */ jsx("div", { className: "absolute bottom-1/4 right-1/4 h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[120px] pointer-events-none" }),
    /* @__PURE__ */ jsxs("div", { className: "relative z-10 w-full max-w-md", children: [
      /* @__PURE__ */ jsxs(Link, { href: "/", className: "mb-8 inline-flex items-center text-muted-foreground transition-colors hover:text-primary", children: [
        /* @__PURE__ */ jsx(ArrowLeft, { className: "mr-2 h-4 w-4" }),
        " Back to Home"
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "rounded-3xl border border-border/50 bg-card/50 p-8 shadow-2xl backdrop-blur-xl", children: [
        /* @__PURE__ */ jsxs("div", { className: "mb-8 text-center", children: [
          /* @__PURE__ */ jsx(Link, { href: "/", className: "mb-6 inline-block", children: /* @__PURE__ */ jsx("img", { src: "/logo.png", alt: "Zeiben", className: "mx-auto h-12 w-12 object-contain" }) }),
          /* @__PURE__ */ jsx("h1", { className: "mb-2 text-2xl font-heading font-bold", children: "Welcome Back" }),
          /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", children: "Sign in to your Zeiben admin account" })
        ] }),
        /* @__PURE__ */ jsxs("form", { onSubmit, className: "space-y-6", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("label", { className: "mb-2 block text-sm font-medium", children: "Email" }),
            /* @__PURE__ */ jsx(
              Input,
              {
                name: "email",
                type: "email",
                value: form.email,
                onChange: handleChange,
                placeholder: "admin@zeiben.com",
                className: "bg-background/50"
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("label", { className: "mb-2 block text-sm font-medium", children: "Password" }),
            /* @__PURE__ */ jsx(
              Input,
              {
                name: "password",
                type: "password",
                value: form.password,
                onChange: handleChange,
                placeholder: "Enter your password",
                className: "bg-background/50"
              }
            )
          ] }),
          /* @__PURE__ */ jsx(Button, { type: "submit", className: "w-full rounded-full", size: "lg", disabled: isLoading, children: isLoading ? "Signing in..." : "Sign In" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "mt-8 text-center text-sm text-muted-foreground", children: [
          "Don't have an account?",
          " ",
          /* @__PURE__ */ jsx(Link, { href: "/signup", className: "font-medium text-primary hover:underline", children: "Sign up" })
        ] })
      ] })
    ] })
  ] });
}
export {
  LoginPage as default
};
