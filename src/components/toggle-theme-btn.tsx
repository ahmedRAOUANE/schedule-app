"use client";

import { useEffect, useState } from "react";

const ToggleThemeBtn = ({ className }: { className?: string}) => {
    const storedTheme = localStorage.getItem("theme");
    const isLightMode = window.matchMedia("(prefers-color-scheme: light)").matches;
    const [theme, setTheme] = useState(storedTheme || isLightMode ? "light" : "dark");

    useEffect(() => {
        const currentTheme = storedTheme;
        if (currentTheme) {
            setTheme(currentTheme);
            document.documentElement.setAttribute("data-theme", currentTheme);
        }
    }, [theme, storedTheme]);

    const handleChangeTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
        localStorage.setItem("theme", newTheme);
        document.documentElement.setAttribute("data-theme", newTheme);
    }

    return (
        <button
            onClick={handleChangeTheme}
            className={`btn btn-secondary btn-sm ${className}`}
        >
            {theme === "light" ? "🌜" : "🌞"}
        </button>
    )
}

export default ToggleThemeBtn

