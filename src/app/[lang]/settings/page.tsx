import { loadTranslation } from "@/utils/load-transloation";
import { Language } from "@/utils/types/language";
import ToggleThemeBtn from "@/components/toggle-theme-btn";
import ToggleLanguage from "@/components/toggle-language";

export default async function SettingsPage({ params }: { params: Promise<{ lang: Language }> }) {
    const { lang } = await params;
    const t = await loadTranslation(lang);

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-8 text-center">{t.navbarLinks.settings}</h1>

            <div className="max-w-md mx-auto space-y-6">
                {/* Theme Settings */}
                <div className="p-6 rounded-2xl bg-[var(--border)]">
                    <h2 className="text-xl font-semibold mb-4">{t.toggleTheme}</h2>
                    <ToggleThemeBtn
                        translations={t}
                        className="w-full p-3 rounded-xl bg-[var(--background)] flex items-center justify-between cursor-pointer"
                    />
                </div>

                {/* Language Settings */}
                <div className="p-6 rounded-2xl bg-[var(--border)]">
                    <h2 className="text-xl font-semibold mb-4">{t.toggleLanguage}</h2>
                    <ToggleLanguage
                        lang={lang}
                        translation={t}
                        className="w-full p-3 rounded-xl bg-[var(--background)] flex items-center justify-between cursor-pointer"
                    />
                </div>

                {/* App Info */}
                <div className="p-6 rounded-2xl bg-[var(--border)]">
                    <h2 className="text-xl font-semibold mb-4">App Info</h2>
                    <div className="space-y-2 text-[var(--foreground)]/70">
                        <p>Version: 1.0.0</p>
                        <p>Last Updated: {new Date().toLocaleDateString()}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}