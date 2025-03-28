"use client";

import { Translation } from "@/utils/types/language";
import { useEffect, useState } from "react";

type Theme = "light" | "dark" | null;

const ToggleThemeBtn = ({ className, translations }: { className?: string, translations: Translation }) => {
    const [theme, setTheme] = useState<Theme>(null);

    useEffect(() => {
        if (typeof window !== "undefined") {
            const storedTheme = localStorage.getItem("theme");
            const isLightMode = window.matchMedia("(prefers-color-scheme: light)").matches;

            const initialTheme: Theme = storedTheme ? storedTheme as Theme : isLightMode ? "light" : "dark";

            setTheme(initialTheme);
            document.documentElement.setAttribute("data-theme", initialTheme!);
        }
    }, []);

    const handleChangeTheme = () => {
        if (!theme) return;

        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
        localStorage.setItem("theme", newTheme);
        document.documentElement.setAttribute("data-theme", newTheme);
    }

    if (!theme) return null;

    return (
        <button
            title={translations.toggleTheme}
            onClick={handleChangeTheme}
            className={`btn btn-secondary btn-sm ${className}`}
        >
            {theme === "light" ? "🌜" : "🌞"}
        </button>
    )
}

export default ToggleThemeBtn

