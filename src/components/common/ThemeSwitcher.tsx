"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";

export const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const handleThemeChange = () => {
    const newTheme = theme === "dark" ? "light" : "dark";

    if (!document.startViewTransition) {
      setTheme(newTheme);
      return;
    }
    document.startViewTransition(() => {
      setTheme(newTheme);
    });
  };

  return (
    <button
      className="p-2 rounded-md text-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer"
      onClick={handleThemeChange}
    >
      {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  );
}; 