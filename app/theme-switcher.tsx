"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

export function ThemeSwitcher() {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  const toggleTheme = () => {
    setTheme(currentTheme === "light" ? "dark" : "light");
  };

  return (
    <Button
      size="icon"
      onClick={toggleTheme}
      className={`fixed top-4 right-4 z-50 rounded-full shadow-lg transition-all duration-300`}
    >
      {currentTheme === "light" ? (
        <Moon className={`h-[1.2rem] w-[1.2rem]`} />
      ) : (
        <Sun className={`h-[1.2rem] w-[1.2rem]`} />
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
