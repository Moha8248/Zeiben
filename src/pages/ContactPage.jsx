import { jsx, jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { submitContact } from "@/lib/firestore";
import { Mail, MapPin, Phone } from "lucide-react";
const initialForm = {
  name: "",
  email: "",
  message: ""
};
function ContactPage() {
  const { toast } = useToast();
  const [form, setForm] = useState(initialForm);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!form.name || !form.email || form.message.trim().length < 10) {
      toast({
        title: "Incomplete form",
        description: "Please provide your name, email, and a message of at least 10 characters.",
        variant: "destructive"
      });
      return;
    }
    setIsSubmitting(true);
    try {
      await submitContact(form);
      toast({
        title: "Message sent successfully",
        description: "We'll get back to you soon."
      });
      setForm(initialForm);
    } catch (error) {
      toast({
        title: "Error sending message",
        description: "Please try again later.",
        variant: "destructive"
      });
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen flex flex-col", children: [
    /* @__PURE__ */ jsx(Navbar, {}),
    /* @__PURE__ */ jsx("main", { className: "flex-1 pt-20", children: /* @__PURE__ */ jsxs("section", { className: "relative overflow-hidden bg-background py-24", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute top-0 right-0 h-full w-1/2 rounded-full bg-primary/5 blur-[120px] pointer-events-none" }),
      /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 relative z-10", children: [
        /* @__PURE__ */ jsxs("div", { className: "mx-auto mb-16 max-w-3xl text-center", children: [
          /* @__PURE__ */ jsxs("h1", { className: "mb-6 text-4xl font-heading font-bold md:text-6xl", children: [
            "Let's ",
            /* @__PURE__ */ jsx("span", { className: "text-primary", children: "Talk" })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-xl text-muted-foreground", children: "Whether you have a project in mind or just want to say hi, we're here." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "mx-auto grid max-w-6xl grid-cols-1 gap-12 lg:grid-cols-5", children: [
          /* @__PURE__ */ jsxs("div", { className: "space-y-8 lg:col-span-2", children: [
            /* @__PURE__ */ jsxs("div", { className: "rounded-3xl border border-border/50 bg-card/50 p-8 backdrop-blur-sm", children: [
              /* @__PURE__ */ jsx("h3", { className: "mb-6 text-2xl font-heading font-bold", children: "Contact Information" }),
              /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
                /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-4", children: [
                  /* @__PURE__ */ jsx("div", { className: "flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10", children: /* @__PURE__ */ jsx(Mail, { className: "h-5 w-5 text-primary" }) }),
                  /* @__PURE__ */ jsxs("div", { children: [
                    /* @__PURE__ */ jsx("p", { className: "mb-1 text-sm text-muted-foreground", children: "Email us at" }),
                    /* @__PURE__ */ jsx("p", { className: "font-semibold", children: "hello@zeiben.com" }),
                    /* @__PURE__ */ jsx("p", { className: "font-semibold", children: "support@zeiben.com" })
                  ] })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-4", children: [
                  /* @__PURE__ */ jsx("div", { className: "flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10", children: /* @__PURE__ */ jsx(Phone, { className: "h-5 w-5 text-primary" }) }),
                  /* @__PURE__ */ jsxs("div", { children: [
                    /* @__PURE__ */ jsx("p", { className: "mb-1 text-sm text-muted-foreground", children: "Call us at" }),
                    /* @__PURE__ */ jsx("p", { className: "font-semibold", children: "+1 (555) 123-4567" }),
                    /* @__PURE__ */ jsx("p", { className: "mt-1 text-sm text-muted-foreground", children: "Mon-Fri, 9am-6pm PST" })
                  ] })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-4", children: [
                  /* @__PURE__ */ jsx("div", { className: "flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10", children: /* @__PURE__ */ jsx(MapPin, { className: "h-5 w-5 text-primary" }) }),
                  /* @__PURE__ */ jsxs("div", { children: [
                    /* @__PURE__ */ jsx("p", { className: "mb-1 text-sm text-muted-foreground", children: "Visit us at" }),
                    /* @__PURE__ */ jsx("p", { className: "font-semibold", children: "123 Digital Ave, Suite 400" }),
                    /* @__PURE__ */ jsx("p", { className: "font-semibold", children: "San Francisco, CA 94107" })
                  ] })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "h-[300px] overflow-hidden rounded-3xl border border-border/50 bg-muted", children: /* @__PURE__ */ jsx(
              "iframe",
              {
                src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d100939.98555098464!2d-122.50764017948534!3d37.757814996609724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80859a6d00690021%3A0x4a501367f076adff!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1709664539886!5m2!1sen!2sus",
                width: "100%",
                height: "100%",
                style: { border: 0 },
                allowFullScreen: true,
                loading: "lazy",
                referrerPolicy: "no-referrer-when-downgrade",
                title: "Zeiben Location"
              }
            ) })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "lg:col-span-3", children: /* @__PURE__ */ jsxs("div", { className: "h-full rounded-3xl border border-border/50 bg-card/50 p-8 backdrop-blur-sm md:p-12", children: [
            /* @__PURE__ */ jsx("h3", { className: "mb-2 text-2xl font-heading font-bold", children: "Send us a message" }),
            /* @__PURE__ */ jsx("p", { className: "mb-8 text-muted-foreground", children: "We aim to respond to all inquiries within 24 hours." }),
            /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, className: "space-y-6", children: [
              /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 gap-6 md:grid-cols-2", children: [
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("label", { className: "mb-2 block text-sm font-medium", children: "Full Name" }),
                  /* @__PURE__ */ jsx(Input, { name: "name", value: form.name, onChange: handleChange, placeholder: "John Doe", className: "bg-background/50" })
                ] }),
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("label", { className: "mb-2 block text-sm font-medium", children: "Email Address" }),
                  /* @__PURE__ */ jsx(Input, { name: "email", type: "email", value: form.email, onChange: handleChange, placeholder: "john@example.com", className: "bg-background/50" })
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("label", { className: "mb-2 block text-sm font-medium", children: "Message" }),
                /* @__PURE__ */ jsx(
                  Textarea,
                  {
                    name: "message",
                    value: form.message,
                    onChange: handleChange,
                    placeholder: "How can we help you?",
                    className: "min-h-[200px] resize-none bg-background/50"
                  }
                )
              ] }),
              /* @__PURE__ */ jsx(Button, { type: "submit", className: "rounded-full px-8", size: "lg", disabled: isSubmitting, children: isSubmitting ? "Sending..." : "Send Message" })
            ] })
          ] }) })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
}
export {
  ContactPage as default
};
