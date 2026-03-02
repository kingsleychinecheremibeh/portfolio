import { createContext, useContext, useState, useEffect } from "react";

const ThemeContext = createContext();

export const ACCENT_COLORS = [
  { name: "orange", color: "#f97316" },
  { name: "green", color: "#22c55e" },
  { name: "yellow", color: "#eab308" },
  { name: "red", color: "#ef4444" },
  { name: "blue", color: "#3b82f6" },
  { name: "purple", color: "#a855f7" },
];

export function ThemeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("darkMode");
      return saved !== null ? JSON.parse(saved) : true;
    }
    return true;
  });

  const [accentColor, setAccentColor] = useState(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("accentColor");
      return saved || "orange";
    }
    return "orange";
  });

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
    if (darkMode) {
      document.documentElement.classList.remove("light");
    } else {
      document.documentElement.classList.add("light");
    }
  }, [darkMode]);

  useEffect(() => {
    localStorage.setItem("accentColor", accentColor);
    document.documentElement.setAttribute("data-accent", accentColor);
  }, [accentColor]);

  const toggleTheme = () => setDarkMode(!darkMode);

  return (
    <ThemeContext.Provider
      value={{
        darkMode,
        toggleTheme,
        accentColor,
        setAccentColor,
        accentColors: ACCENT_COLORS,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
