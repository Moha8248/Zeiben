import { jsx } from "react/jsx-runtime";
import { createContext, useContext, useEffect, useMemo, useState } from "react";
const ThemeProviderContext = createContext({
  theme: "system",
  setTheme: () => {
  }
});
function ThemeProvider({
  children,
  defaultTheme = "system",
  storageKey = "vite-ui-theme"
}) {
  const [theme, setTheme] = useState(() => {
    if (window === "undefined") {
      return defaultTheme;
    }
    return localStorage.getItem(storageKey) || defaultTheme;
  });
  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove("light", "dark");
    if (theme === "system") {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
      root.classList.add(systemTheme);
      return;
    }
    root.classList.add(theme);
  }, [theme]);
  const value = useMemo(
    () => ({
      theme,
      setTheme: (nextTheme) => {
        localStorage.setItem(storageKey, nextTheme);
        setTheme(nextTheme);
      }
    }),
    [storageKey, theme]
  );
  return /* @__PURE__ */ jsx(ThemeProviderContext.Provider, { value, children });
}
function useTheme() {
  return useContext(ThemeProviderContext);
}
export {
  ThemeProvider,
  useTheme
};
