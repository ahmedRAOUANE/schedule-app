import ToggleLanguage from '@/components/toggle-language'
import ToggleThemeBtn from '@/components/toggle-theme-btn'
import { translations } from '@/locals/translation'
import { Language } from '@/utils/types/day'

const Layout = async ({ children, params }: { children: React.ReactNode, params: Promise<{ lang: Language }> }) => {
    const {lang} = await params;
    
    return (
        <div>
            <header className="fixed top-0 left-0 right-0 px-6 py-2 z-100 backdrop-blur bg-[var(--border)]/40 shadow-lg">
                <div className="flex items-center justify-between max-w-6xl mx-auto">
                    <h1 className="text-2xl font-bold text-center">
                        {translations[lang]?.mainTitle}
                    </h1>

                    <div className="flex items-center gap-3">
                        <ToggleThemeBtn language={lang} className="px-2 rounded-full bg-[var(--border)] flex items-center justify-center cursor-pointer" />
                        <ToggleLanguage className="px-2 rounded-full bg-[var(--border)] flex items-center justify-center cursor-pointer" />
                    </div>
                </div>
            </header>

            {children}
        </div>
    )
}

export default Layout