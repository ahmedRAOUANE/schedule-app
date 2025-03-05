"use client";

import { translations } from "@/locals/translation";
import { useLanguage } from "@/providers/language-provider";
import { Language } from "@/utils/types"

interface ToggleLanguageProps {
    className?: string
}

const ToggleLanguage = ({className}: ToggleLanguageProps) => {
    const {toggleLanguage, language} = useLanguage()

    const languageName: Record<Language, string> = {
        [Language.ARABIC]: translations[language].appLanguage[Language.ARABIC],
        [Language.ENGLISH]: translations[language].appLanguage[Language.ENGLISH]
    }

    return (
        <label htmlFor="toggle-language" className={className}>
            <select 
                name="toggle-language" id="toggle-language" 
                className="cursor-pointer bg-[var(--border)] border-none focus:ring-0 outline-none text-sm font-semibold text-[var(--foreground)]" 
                defaultValue={language} 
                onChange={(e) => toggleLanguage(e.target.value as Language)}
            >
                {Object.values(Language).map((lang) => (
                    <option value={lang} key={lang} className="cursor-pointer text-[var(--foreground)]">
                        {languageName[lang]}
                    </option>
                ))}
            </select>
        </label>
    )
}

export default ToggleLanguage

