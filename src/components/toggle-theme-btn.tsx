"use client";

import { useEffect, useState } from "react";

const ToggleThemeBtn = ({ className }: { className?: string}) => {
    const isLightMode = window.matchMedia('(prefers-color-scheme: light)').matches; // Check if the system is using light mode
    const [theme, setTheme] = useState(localStorage.getItem("theme") || isLightMode ? "light" : "dark");

    useEffect(() => {
      localStorage.setItem("theme", theme);
      document.documentElement.setAttribute("data-theme", theme);
    }, [theme]);

    return (
        <button
            onClick={() => setTheme(prev => ({"light": "dark", "dark": "light"}[prev]))}
            className={`btn btn-secondary btn-sm ${className}`}
        >
            {theme === "light" ? "🌜" : "🌞"}
        </button>
    )
}

export default ToggleThemeBtn