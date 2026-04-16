import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { Link, useLocation } from "wouter";
import { useTheme } from "@/contexts/ThemeContext";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { Moon, Sun, Menu } from "lucide-react";
import { useState, useEffect } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
function Navbar() {
  const [location] = useLocation();
  const { theme, setTheme } = useTheme();
  const { currentUser, signOut } = useAuth();
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/services", label: "Services" },
    { href: "/projects", label: "Projects" },
    { href: "/contact", label: "Contact" }
  ];
  return /* @__PURE__ */ jsx(
    "nav",
    {
      className: `fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${scrolled ? "bg-background/80 backdrop-blur-md border-border/50 shadow-sm" : "bg-transparent border-transparent"}`,
      children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 h-20 flex items-center justify-between", children: [
        /* @__PURE__ */ jsxs(Link, { href: "/", className: "flex items-center gap-3 group", children: [
          /* @__PURE__ */ jsx(
            "img",
            {
              src: "/logo.png",
              alt: "Zeiben",
              className: "h-10 w-10 object-contain group-hover:scale-105 transition-transform"
            }
          ),
          /* @__PURE__ */ jsx("span", { className: "font-heading font-bold text-xl tracking-tight text-primary", children: "Zeiben" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "hidden md:flex items-center gap-8", children: [
          /* @__PURE__ */ jsx("div", { className: "flex items-center gap-6", children: navLinks.map((link) => /* @__PURE__ */ jsx(
            Link,
            {
              href: link.href,
              className: `text-sm font-medium transition-colors hover:text-primary ${location === link.href ? "text-primary" : "text-muted-foreground"}`,
              children: link.label
            },
            link.href
          )) }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
            /* @__PURE__ */ jsxs(
              Button,
              {
                variant: "ghost",
                size: "icon",
                onClick: () => setTheme(theme === "dark" ? "light" : "dark"),
                className: "rounded-full",
                children: [
                  theme === "dark" ? /* @__PURE__ */ jsx(Sun, { className: "h-5 w-5" }) : /* @__PURE__ */ jsx(Moon, { className: "h-5 w-5" }),
                  /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Toggle theme" })
                ]
              }
            ),
            currentUser ? /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(Button, { variant: "outline", asChild: true, className: "rounded-full", children: /* @__PURE__ */ jsx(Link, { href: "/admin", children: "Dashboard" }) }),
              /* @__PURE__ */ jsx(Button, { onClick: () => signOut(), className: "rounded-full", children: "Logout" })
            ] }) : /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(Button, { variant: "ghost", asChild: true, className: "rounded-full", children: /* @__PURE__ */ jsx(Link, { href: "/login", children: "Login" }) }),
              /* @__PURE__ */ jsx(Button, { asChild: true, className: "rounded-full", children: /* @__PURE__ */ jsx(Link, { href: "/signup", children: "Sign Up" }) })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "md:hidden flex items-center gap-4", children: [
          /* @__PURE__ */ jsx(
            Button,
            {
              variant: "ghost",
              size: "icon",
              onClick: () => setTheme(theme === "dark" ? "light" : "dark"),
              children: theme === "dark" ? /* @__PURE__ */ jsx(Sun, { className: "h-5 w-5" }) : /* @__PURE__ */ jsx(Moon, { className: "h-5 w-5" })
            }
          ),
          /* @__PURE__ */ jsxs(Sheet, { open: isOpen, onOpenChange: setIsOpen, children: [
            /* @__PURE__ */ jsx(SheetTrigger, { asChild: true, children: /* @__PURE__ */ jsxs(Button, { variant: "ghost", size: "icon", children: [
              /* @__PURE__ */ jsx(Menu, { className: "h-6 w-6" }),
              /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Toggle menu" })
            ] }) }),
            /* @__PURE__ */ jsx(SheetContent, { side: "right", className: "w-[300px] sm:w-[400px]", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-8 mt-8", children: [
              /* @__PURE__ */ jsx("div", { className: "flex flex-col gap-4", children: navLinks.map((link) => /* @__PURE__ */ jsx(
                Link,
                {
                  href: link.href,
                  onClick: () => setIsOpen(false),
                  className: `text-lg font-medium transition-colors hover:text-primary ${location === link.href ? "text-primary" : "text-muted-foreground"}`,
                  children: link.label
                },
                link.href
              )) }),
              /* @__PURE__ */ jsx("div", { className: "flex flex-col gap-4", children: currentUser ? /* @__PURE__ */ jsxs(Fragment, { children: [
                /* @__PURE__ */ jsx(Button, { variant: "outline", asChild: true, onClick: () => setIsOpen(false), children: /* @__PURE__ */ jsx(Link, { href: "/admin", children: "Dashboard" }) }),
                /* @__PURE__ */ jsx(
                  Button,
                  {
                    onClick: () => {
                      signOut();
                      setIsOpen(false);
                    },
                    children: "Logout"
                  }
                )
              ] }) : /* @__PURE__ */ jsxs(Fragment, { children: [
                /* @__PURE__ */ jsx(Button, { variant: "outline", asChild: true, onClick: () => setIsOpen(false), children: /* @__PURE__ */ jsx(Link, { href: "/login", children: "Login" }) }),
                /* @__PURE__ */ jsx(Button, { asChild: true, onClick: () => setIsOpen(false), children: /* @__PURE__ */ jsx(Link, { href: "/signup", children: "Sign Up" }) })
              ] }) })
            ] }) })
          ] })
        ] })
      ] })
    }
  );
}
export {
  Navbar
};
