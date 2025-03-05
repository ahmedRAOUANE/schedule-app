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
        // const newPath = pathname.replace(`/${language}`, `/${selectedLanguage}`)
        // router.push(newPath);
        if (selectedLanguage !== language) {
            segments[1] = selectedLanguage;
            const newPath = segments.join("/");
            router.replace(newPath);
        }
    }

    return <LanguageContext.Provider value={{toggleLanguage, language}}>
        <html dir={language === Language.ARABIC ? "rtl" : "ltr"} lang={language}>
            {children}
        </html>
    </LanguageContext.Provider>
}

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error("useLanguage must be used within a LanguageProvider");
    }
    return context;
}

export default LanguageProvider

