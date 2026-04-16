"use client";
import { jsx } from "react/jsx-runtime";
import { useTheme } from "next-themes";
const Toaster = ({ ...props }) => {
  const { theme = "system" } = useTheme();
  return /* @__PURE__ */ jsx(
    Sonner,
    {
      theme: theme["theme"],
      className: "toaster group",
      toastOptions: {
        classNames
      },
      ...props
    }
  );
};
export {
  Toaster
};
