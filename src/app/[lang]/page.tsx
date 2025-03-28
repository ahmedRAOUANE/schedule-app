import { loadTranslation } from "@/utils/load-transloation";
import { Language } from "@/utils/types/language";
import Link from "next/link";
import { FaCalendarAlt, FaClock, FaCog } from "react-icons/fa";

export default async function Home({ params }: { params: Promise<{ lang: Language }> }) {
  const { lang } = await params;
  const t = await loadTranslation(lang);

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">{t.welcome}</h1>
        <p className="text-lg text-[var(--foreground)]/80">
          {t.schedule} - {t.prayer}
        </p>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {/* Schedule Card */}
        <Link
          href={`/${lang}/schedule`}
          className="group p-6 rounded-2xl bg-[var(--border)] hover:bg-[var(--border)]/80 transition-all"
        >
          <div className="flex flex-col items-center text-center">
            <FaCalendarAlt className="text-3xl mb-4 text-[var(--foreground)] group-hover:scale-110 transition-transform" />
            <h2 className="text-xl font-semibold mb-2">{t.navbarLinks.schedule}</h2>
            <p className="text-[var(--foreground)]/70">
              {t.schedule}
            </p>
          </div>
        </Link>

        {/* Prayers Card */}
        <Link
          href={`/${lang}/prayers`}
          className="group p-6 rounded-2xl bg-[var(--border)] hover:bg-[var(--border)]/80 transition-all"
        >
          <div className="flex flex-col items-center text-center">
            <FaClock className="text-3xl mb-4 text-[var(--foreground)] group-hover:scale-110 transition-transform" />
            <h2 className="text-xl font-semibold mb-2">{t.navbarLinks.prayers}</h2>
            <p className="text-[var(--foreground)]/70">
              {t.prayer}
            </p>
          </div>
        </Link>

        {/* Settings Card */}
        <Link
          href={`/${lang}/settings`}
          className="group p-6 rounded-2xl bg-[var(--border)] hover:bg-[var(--border)]/80 transition-all"
        >
          <div className="flex flex-col items-center text-center">
            <FaCog className="text-3xl mb-4 text-[var(--foreground)] group-hover:scale-110 transition-transform" />
            <h2 className="text-xl font-semibold mb-2">{t.navbarLinks.settings}</h2>
            <p className="text-[var(--foreground)]/70">
              {t.toggleTheme} & {t.toggleLanguage}
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
}