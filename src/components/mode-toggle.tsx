"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { Button } from "~/components/ui/button";
import { FiSun, FiMoon } from "react-icons/fi";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  const handleTheme = () => {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  return (
    <Button
      onClick={handleTheme}
      variant="ghost"
      size="icon"
      className="min-w-[35px]"
    >
      <FiSun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <FiMoon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
