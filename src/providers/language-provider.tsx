"use client";

import { defaultLanguage } from "@/utils/constants";
import { Language } from "@/utils/types";
import { usePathname, useRouter } from "next/navigation";
import { createContext, useContext } from "react";
interface LanguageContextType {
    toggleLanguage: (selectedLanguage: Language) => void;
    language: Language;
}

const LanguageContext = createContext<LanguageContextType>({
    toggleLanguage: () => {},
    language: defaultLanguage,
});

const LanguageProvider = ({children}: {children: React.ReactNode}) => {
    const pathname = usePathname()
    const router = useRouter();
    const segments = pathname.split("/");
    
    let selectedLanguage = segments[1];

    if (!Object.values(Language).includes(selectedLanguage as Language)) {
        selectedLanguage = defaultLanguage;
    }

    const language = selectedLanguage as Language;
    
    const toggleLanguage = (selectedLanguage: Language = defaultLanguage) => {
        if (selectedLanguage !== language) {
            segments[1] = selectedLanguage;
            const newPath = segments.join("/");
            router.replace(newPath);
        }
    }

    return (
        <LanguageContext.Provider value={{ toggleLanguage, language }}>
            <html dir={language === Language.ARABIC ? "rtl" : "ltr"} lang={language}>
                <head>
                    {/* this script is to prevent the theme flickering */}
                    <script dangerouslySetInnerHTML={{
                        __html: `
                        (function() {
                            if (typeof window === "undefined") return;

                            let storedTheme = localStorage.getItem("theme");
                            let isLightMode = window.matchMedia("(prefers-color-scheme: light)").matches;
                            let theme = storedTheme || (isLightMode ? "light" : "dark");
                            document.documentElement.setAttribute("data-theme", theme);
                        })();
                    `
                    }} />
                </head>

                {children}
            </html>
        </LanguageContext.Provider>
    )
}

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error("useLanguage must be used within a LanguageProvider");
    }
    return context;
}

export default LanguageProvider

