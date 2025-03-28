"use client";

import { Language, Translation } from "@/utils/types/language"
import { usePathname, useRouter } from "next/navigation";

interface ToggleLanguageProps {
    className?: string
    lang: Language
    translation: Translation
}

const ToggleLanguage = ({ className, lang, translation }: ToggleLanguageProps) => {
    const router = useRouter();
    const pathname = usePathname();

    const languageName: Record<Language, string> = {
        [Language.ARABIC]: translation.appLanguage[Language.ARABIC],
        [Language.ENGLISH]: translation.appLanguage[Language.ENGLISH]
    }

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedLanguage = e.target.value as Language;
        const pathWithoutLang = pathname.split("/").slice(2).join("/");
        router.push(`/${selectedLanguage}/${pathWithoutLang}`);
    }

    return (
        <label htmlFor="toggle-language" className={className} title={translation.toggleLanguage}>
            <select 
                name="toggle-language" id="toggle-language" 
                className="py-0.5 px-1 cursor-pointer bg-[var(--border)] border-none focus:ring-0 outline-none text-sm font-semibold text-[var(--foreground)] rounded-full" 
                defaultValue={lang}
                onChange={handleChange}
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

