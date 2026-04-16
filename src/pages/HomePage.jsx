import { jsx, jsxs } from "react/jsx-runtime";
import { HeroSection } from "@/components/sections/HeroSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { WhyChooseUsSection } from "@/components/sections/WhyChooseUsSection";
import { TeamSection } from "@/components/sections/TeamSection";
import { ProjectsPreviewSection } from "@/components/sections/ProjectsPreviewSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { ReviewFormSection } from "@/components/sections/ReviewFormSection";
import { ContactPreviewSection } from "@/components/sections/ContactPreviewSection";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
function HomePage() {
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen flex flex-col", children: [
    /* @__PURE__ */ jsx(Navbar, {}),
    /* @__PURE__ */ jsxs("main", { className: "flex-1", children: [
      /* @__PURE__ */ jsx(HeroSection, {}),
      /* @__PURE__ */ jsx(ServicesSection, {}),
      /* @__PURE__ */ jsx(WhyChooseUsSection, {}),
      /* @__PURE__ */ jsx(TeamSection, {}),
      /* @__PURE__ */ jsx(ProjectsPreviewSection, {}),
      /* @__PURE__ */ jsx(TestimonialsSection, {}),
      /* @__PURE__ */ jsx(ReviewFormSection, {}),
      /* @__PURE__ */ jsx(ContactPreviewSection, {})
    ] }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
}
export {
  HomePage as default
};
