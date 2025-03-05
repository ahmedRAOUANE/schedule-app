import Days from "@/components/days";
import ToggleLanguage from "@/components/toggle-language";
import ToggleThemeBtn from "@/components/toggle-theme-btn";
import { translations } from "@/locals/translation";
import { Language } from "@/utils/types";

export default async function Home({params}: {params: Promise<{lang: Language}>}) {
  const {lang} = await params;

  return (
    <main className="p-6 max-w-2xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-center">
          {translations[lang].mainTitle}
        </h1>
        <div className="flex items-center gap-3">
          <ToggleThemeBtn className="px-2 rounded-full bg-[var(--border)] flex items-center justify-center cursor-pointer" />
          <ToggleLanguage className="px-2 rounded-full bg-[var(--border)] flex items-center justify-center cursor-pointer" />
        </div>
      </div>
      <Days lang={lang} />
    </main>
  );
}

