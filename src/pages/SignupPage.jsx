import { jsx, jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { Link, useLocation } from "wouter";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "@/lib/firebase";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { ArrowLeft } from "lucide-react";
function SignupPage() {
  const [, setLocation] = useLocation();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });
  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };
  const onSubmit = async (event) => {
    event.preventDefault();
    if (!form.name || !form.email || !form.password || !form.confirmPassword) {
      toast({
        title: "Missing information",
        description: "Please complete all fields.",
        variant: "destructive"
      });
      return;
    }
    if (form.password !== form.confirmPassword) {
      toast({
        title: "Passwords do not match",
        description: "Please confirm your password again.",
        variant: "destructive"
      });
      return;
    }
    setIsLoading(true);
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, form.email, form.password);
      await updateProfile(userCredential.user, { displayName: form.name });
      toast({
        title: "Account created successfully",
        description: "Welcome to Zeiben."
      });
      setLocation("/admin");
    } catch (error) {
      toast({
        title: "Signup failed",
        description: error.message || "An error occurred during registration.",
        variant: "destructive"
      });
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };
  return /* @__PURE__ */ jsxs("div", { className: "relative flex min-h-screen items-center justify-center overflow-hidden bg-background p-4", children: [
    /* @__PURE__ */ jsx("div", { className: "absolute top-1/4 right-1/4 h-[500px] w-[500px] rounded-full bg-primary/10 blur-[120px] pointer-events-none" }),
    /* @__PURE__ */ jsx("div", { className: "absolute bottom-1/4 left-1/4 h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[120px] pointer-events-none" }),
    /* @__PURE__ */ jsxs("div", { className: "relative z-10 w-full max-w-md", children: [
      /* @__PURE__ */ jsxs(Link, { href: "/", className: "mb-8 inline-flex items-center text-muted-foreground transition-colors hover:text-primary", children: [
        /* @__PURE__ */ jsx(ArrowLeft, { className: "mr-2 h-4 w-4" }),
        " Back to Home"
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "rounded-3xl border border-border/50 bg-card/50 p-8 shadow-2xl backdrop-blur-xl", children: [
        /* @__PURE__ */ jsxs("div", { className: "mb-8 text-center", children: [
          /* @__PURE__ */ jsx(Link, { href: "/", className: "mb-6 inline-block", children: /* @__PURE__ */ jsx("img", { src: "/logo.png", alt: "Zeiben", className: "mx-auto h-12 w-12 object-contain" }) }),
          /* @__PURE__ */ jsx("h1", { className: "mb-2 text-2xl font-heading font-bold", children: "Create Account" }),
          /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", children: "Join the Zeiben admin workspace" })
        ] }),
        /* @__PURE__ */ jsxs("form", { onSubmit, className: "space-y-4", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("label", { className: "mb-2 block text-sm font-medium", children: "Full Name" }),
            /* @__PURE__ */ jsx(Input, { name: "name", value: form.name, onChange: handleChange, placeholder: "John Doe", className: "bg-background/50" })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("label", { className: "mb-2 block text-sm font-medium", children: "Email" }),
            /* @__PURE__ */ jsx(Input, { name: "email", type: "email", value: form.email, onChange: handleChange, placeholder: "admin@zeiben.com", className: "bg-background/50" })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("label", { className: "mb-2 block text-sm font-medium", children: "Password" }),
            /* @__PURE__ */ jsx(Input, { name: "password", type: "password", value: form.password, onChange: handleChange, placeholder: "Enter a password", className: "bg-background/50" })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("label", { className: "mb-2 block text-sm font-medium", children: "Confirm Password" }),
            /* @__PURE__ */ jsx(Input, { name: "confirmPassword", type: "password", value: form.confirmPassword, onChange: handleChange, placeholder: "Re-enter your password", className: "bg-background/50" })
          ] }),
          /* @__PURE__ */ jsx(Button, { type: "submit", className: "mt-4 w-full rounded-full", size: "lg", disabled: isLoading, children: isLoading ? "Creating account..." : "Sign Up" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "mt-8 text-center text-sm text-muted-foreground", children: [
          "Already have an account?",
          " ",
          /* @__PURE__ */ jsx(Link, { href: "/login", className: "font-medium text-primary hover:underline", children: "Sign in" })
        ] })
      ] })
    ] })
  ] });
}
export {
  SignupPage as default
};
