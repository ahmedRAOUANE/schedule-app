import { Language, Translation } from '@/utils/types/language'
import React from 'react'
import ToggleThemeBtn from './toggle-theme-btn'
import ToggleLanguage from './toggle-language'

const Header = ({ lang, translation }: { lang: Language, translation: Translation }) => {
    return (
        <header className="fixed top-0 left-0 right-0 px-6 py-2 z-100 backdrop-blur bg-[var(--border)]/40 shadow-lg">
            <div className="flex items-center justify-between max-w-6xl mx-auto">
                <h1 className="text-2xl font-bold text-center">
                    {translation.mainTitle}
                </h1>

                <div className="flex items-center gap-3">
                    <ToggleThemeBtn translations={translation} className="px-2 rounded-full bg-[var(--border)] flex items-center justify-center cursor-pointer" />
                    <ToggleLanguage translation={translation} lang={lang} className="px-2 rounded-full bg-[var(--border)] flex items-center justify-center cursor-pointer" />
                </div>
            </div>
        </header>
    )
}

export default Header