import { loadTranslation } from "@/utils/load-transloation";
import { Language, Translation } from "@/utils/types/language";
import Day from "@/components/day-tracker";
import { isFeatureEnabled } from "@/utils/feature-flags-service";
import { FaCalendarAlt, FaClock } from "react-icons/fa";

export default async function SchedulePage({ params }: { params: Promise<{ lang: Language }> }) {
    const { lang } = await params;
    const t = await loadTranslation(lang);

    if (!isFeatureEnabled("schedule-page")) {
        return <CommingSoon t={t} />;
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-8 text-center">{t.schedule}</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {Array.from({ length: 30 }, (_, i) => (
                    <Day key={i} dayIndex={i + 1} translation={t} />
                ))}
            </div>
        </div>
    );
}

const CommingSoon = ({ t }: { t: Translation }) => {
    return (
        <div className="min-h-[80vh] flex items-center justify-center px-4">
            <div className="text-center space-y-6 max-w-lg mx-auto">
                {/* Icon */}
                <div className="relative mx-auto w-24 h-24 mb-8">
                    <FaCalendarAlt className="w-24 h-24 text-[var(--border)] animate-pulse" />
                    <FaClock className="w-8 h-8 text-[var(--foreground)] absolute bottom-0 right-0 animate-bounce" />
                </div>

                {/* Title */}
                <h1 className="text-4xl font-bold">{t.schedule}</h1>

                {/* Coming Soon Text */}
                <p className="text-2xl font-semibold text-[var(--foreground)]/70">
                    {t.comingSoon.title}
                </p>

                {/* Description */}
                <p className="text-[var(--foreground)]/60">
                    {t.comingSoon.description}
                </p>

                {/* Progress Bar */}
                <div className="w-full h-2 bg-[var(--border)]/30 rounded-full overflow-hidden">
                    <div
                        className="h-full bg-[var(--border)] rounded-full w-3/4 animate-pulse"
                        style={{ animation: 'progress 2s ease-in-out infinite' }}
                    />
                </div>
            </div>
        </div>
    );
};