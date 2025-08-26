"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";

export const ModeToggle = React.forwardRef<HTMLButtonElement, React.ComponentPropsWithoutRef<"button">>(
  ({ onClick, ...props }, ref) => {
    const { theme, setTheme } = useTheme();

    function handleClick(e: React.MouseEvent<HTMLButtonElement>) {
      setTheme(theme === "dark" ? "light" : "dark");
      if (onClick) onClick(e);
    }

    return (
      <Button
        variant="ghost"
        type="button"
        size="icon"
        className="px-2"
        onClick={handleClick}
        ref={ref}
        {...props}
      >
        <SunIcon className="h-[1.2rem] w-[1.2rem] text-neutral-800 dark:hidden dark:text-neutral-200" />
        <MoonIcon className="hidden h-[1.2rem] w-[1.2rem] text-neutral-800 dark:block dark:text-neutral-200" />
      </Button>
    );
  }
);

ModeToggle.displayName = "ModeToggle";
