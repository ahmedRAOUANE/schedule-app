import Day from "@/components/day-tracker";
import { TOTAL_DAYS } from "@/utils/constants";
import { loadTranslation } from "@/utils/load-transloation";
import { Language } from "@/utils/types/language";

export default async function PrayersPage({ params }: { params: Promise<{ lang: Language }> }) {
    const { lang } = await params;
    const translation = await loadTranslation(lang);

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {Array.from({ length: TOTAL_DAYS }, (_, i) => (
                <Day key={i} dayIndex={i + 1} translation={translation} />
            ))}
        </div>
    )
}

