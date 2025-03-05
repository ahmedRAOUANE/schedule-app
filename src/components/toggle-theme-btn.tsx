"use client";

import { useEffect, useState } from "react";

const ToggleThemeBtn = ({ className }: { className?: string}) => {
    const [theme, setTheme] = useState("light");

    useEffect(() => {
        const currentTheme = localStorage.getItem("theme");
        if (currentTheme) {
            setTheme(currentTheme);
            document.documentElement.setAttribute("data-theme", currentTheme);
        }
    }, []);

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