import { jsx } from "react/jsx-runtime";
import * as React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
const SidebarContext = React.createContext(null);
function useSidebar() {
  const context = React.useContext(SidebarContext);
  if (!context) {
    throw new Error("useSidebar must be used within a SidebarProvider");
  }
  return context;
}
function SidebarProvider({ children }) {
  const [open, setOpen] = React.useState(true);
  const [openMobile, setOpenMobile] = React.useState(false);
  const toggleSidebar = React.useCallback(() => {
    setOpen((prev) => !prev);
    setOpenMobile((prev) => !prev);
  }, []);
  return /* @__PURE__ */ jsx(
    SidebarContext.Provider,
    {
      value: { open, setOpen, openMobile, setOpenMobile, toggleSidebar },
      children
    }
  );
}
function Sidebar({ className, children, ...props }) {
  return /* @__PURE__ */ jsx("div", { className: cn("bg-sidebar text-sidebar-foreground flex min-h-full flex-col", className), ...props, children });
}
function SidebarTrigger({ className, onClick, ...props }) {
  const { toggleSidebar } = useSidebar();
  return /* @__PURE__ */ jsx(
    Button,
    {
      variant: "ghost",
      size: "icon",
      className: cn("h-7 w-7", className),
      onClick: (event) => {
        onClick?.(event);
        toggleSidebar();
      },
      ...props,
      children: /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Toggle Sidebar" })
    }
  );
}
function SidebarRail({ className, ...props }) {
  const { toggleSidebar } = useSidebar();
  return /* @__PURE__ */ jsx(
    "button",
    {
      type: "button",
      className: cn("hidden sm:flex h-8 w-8 items-center justify-center", className),
      onClick: toggleSidebar,
      ...props
    }
  );
}
function SidebarInset({ className, ...props }) {
  return /* @__PURE__ */ jsx("main", { className: cn("flex-1", className), ...props });
}
function SidebarInput({ className, ...props }) {
  return /* @__PURE__ */ jsx(Input, { className: cn("w-full", className), ...props });
}
function SidebarHeader({ className, ...props }) {
  return /* @__PURE__ */ jsx("div", { className: cn("px-4 py-3", className), ...props });
}
function SidebarFooter({ className, ...props }) {
  return /* @__PURE__ */ jsx("div", { className: cn("px-4 py-3", className), ...props });
}
function SidebarSeparator({ className, ...props }) {
  return /* @__PURE__ */ jsx("div", { className: cn("my-2 h-px bg-border", className), ...props });
}
function SidebarContent({ className, ...props }) {
  return /* @__PURE__ */ jsx("div", { className: cn("flex-1 overflow-auto", className), ...props });
}
function SidebarGroup({ className, ...props }) {
  return /* @__PURE__ */ jsx("div", { className: cn("space-y-2", className), ...props });
}
function SidebarGroupLabel({ className, ...props }) {
  return /* @__PURE__ */ jsx("div", { className: cn("text-xs uppercase tracking-[0.2em] text-muted-foreground", className), ...props });
}
function SidebarGroupAction({ className, ...props }) {
  return /* @__PURE__ */ jsx("div", { className: cn("flex items-center", className), ...props });
}
function SidebarMenu({ className, ...props }) {
  return /* @__PURE__ */ jsx("div", { className: cn("space-y-1", className), ...props });
}
function SidebarMenuItem({ className, ...props }) {
  return /* @__PURE__ */ jsx("div", { className: cn("rounded-md px-2 py-1 text-sm", className), ...props });
}
function SidebarMenuButton({ className, ...props }) {
  return /* @__PURE__ */ jsx("button", { type: "button", className: cn("w-full text-left", className), ...props });
}
function SidebarMenuAction({ className, ...props }) {
  return /* @__PURE__ */ jsx("button", { type: "button", className: cn("text-sm", className), ...props });
}
function SidebarMenuBadge({ className, ...props }) {
  return /* @__PURE__ */ jsx("span", { className: cn("ml-auto rounded-full bg-muted px-2 py-0.5 text-xs", className), ...props });
}
function SidebarMenuSkeleton({ className, ...props }) {
  return /* @__PURE__ */ jsx("div", { className: cn("animate-pulse space-y-2", className), ...props });
}
function SidebarMenuSub({ className, ...props }) {
  return /* @__PURE__ */ jsx("div", { className: cn("pl-4 space-y-1", className), ...props });
}
function SidebarMenuSubItem({ className, ...props }) {
  return /* @__PURE__ */ jsx("div", { className: cn("rounded-md px-2 py-1 text-sm", className), ...props });
}
function SidebarMenuSubButton({ className, ...props }) {
  return /* @__PURE__ */ jsx("button", { type: "button", className: cn("w-full text-left", className), ...props });
}
export {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupAction,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInput,
  SidebarInset,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSkeleton,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarProvider,
  SidebarRail,
  SidebarSeparator,
  SidebarTrigger
};
