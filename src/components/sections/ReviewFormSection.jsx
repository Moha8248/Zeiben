import { jsx, jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { addReview } from "@/lib/firestore";
const initialForm = {
  name: "",
  email: "",
  message: "",
  rating: 0
};
function ReviewFormSection() {
  const { toast } = useToast();
  const [form, setForm] = useState(initialForm);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!form.name || !form.email || !form.message || form.rating < 1) {
      toast({
        title: "Missing information",
        description: "Please fill out every field and choose a rating.",
        variant: "destructive"
      });
      return;
    }
    setIsSubmitting(true);
    try {
      await addReview(form);
      toast({
        title: "Review submitted successfully",
        description: "Thank you for your feedback!"
      });
      setForm(initialForm);
    } catch (error) {
      toast({
        title: "Error submitting review",
        description: "Please try again later.",
        variant: "destructive"
      });
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };
  return /* @__PURE__ */ jsx("section", { className: "py-24 bg-background", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4 max-w-3xl", children: /* @__PURE__ */ jsxs("div", { className: "rounded-3xl border border-border/50 bg-card/30 p-8 shadow-2xl shadow-primary/5 backdrop-blur-xl md:p-12", children: [
    /* @__PURE__ */ jsxs("div", { className: "text-center mb-10", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-3xl font-heading font-bold mb-4", children: "Leave a Review" }),
      /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: "We value your feedback. Let us know how we did." })
    ] }),
    /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, className: "space-y-6", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center justify-center space-y-3", children: [
        /* @__PURE__ */ jsx("label", { className: "text-base font-medium", children: "How would you rate your experience?" }),
        /* @__PURE__ */ jsx("div", { className: "flex items-center gap-2", children: [1, 2, 3, 4, 5].map((star) => /* @__PURE__ */ jsx(
          "button",
          {
            type: "button",
            onClick: () => setForm((current) => ({ ...current, rating: star })),
            className: "transition-transform hover:scale-110",
            children: /* @__PURE__ */ jsx(
              Star,
              {
                className: star <= form.rating ? "h-8 w-8 fill-primary text-primary" : "h-8 w-8 fill-muted text-muted"
              }
            )
          },
          star
        )) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 gap-6 md:grid-cols-2", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("label", { className: "mb-2 block text-sm font-medium", children: "Name" }),
          /* @__PURE__ */ jsx(Input, { name: "name", value: form.name, onChange: handleChange, placeholder: "John Doe", className: "bg-background/50" })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("label", { className: "mb-2 block text-sm font-medium", children: "Email" }),
          /* @__PURE__ */ jsx(Input, { name: "email", type: "email", value: form.email, onChange: handleChange, placeholder: "john@example.com", className: "bg-background/50" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("label", { className: "mb-2 block text-sm font-medium", children: "Your Review" }),
        /* @__PURE__ */ jsx(
          Textarea,
          {
            name: "message",
            value: form.message,
            onChange: handleChange,
            placeholder: "Tell us about your experience working with Zeiben...",
            className: "min-h-[120px] resize-none bg-background/50"
          }
        )
      ] }),
      /* @__PURE__ */ jsx(Button, { type: "submit", className: "w-full rounded-full", size: "lg", disabled: isSubmitting, children: isSubmitting ? "Submitting..." : "Submit Review" })
    ] })
  ] }) }) });
}
export {
  ReviewFormSection
};
