// import { PRAYERS } from '@/utils/constants';
import { useSckedule } from '@/hooks/useSchedule';
import { Language } from '@/utils/types';
import { translations } from '@/locals/translation';

interface DayTrackerProps {
    day: number,
    isActive: boolean,
    lang: Language
}

const Fallback = () => {
    return (
        <div className="animate-pulse space-y-2">
            {Array.from({ length: 5 }).map((_, index) => (
                <div key={index} className="h-6 bg-gray-300 rounded-md w-3/4"></div>
            ))}
        </div>
    )
};

const DayTracker = ({day, isActive, lang}: DayTrackerProps) => {
    const { schedule, togglePrayer, toggleShefa, isLoading } = useSckedule();

    return (
        <div className={`md:w-[200px] md:mx-auto p-4 border-[var(--border)] rounded-2xl ${isActive ? "bg-[var(--border)]" : "bg-[var(--border)]/40"} transition-all`}>
            <h2 className="text-lg font-bold mb-2">{translations[lang]?.day} {day}</h2>

            {isLoading ? <Fallback /> : (
                <div className="space-y-2">
                    {translations[lang]?.prayers.map((prayer, index) => (
                        <label key={index} className="flex items-center space-x-2">
                            <input
                                type="checkbox"
                                checked={schedule[day]?.tasks.prayers[index] ?? false}
                                onChange={() => togglePrayer(day, index)}
                                className="w-5 h-5 accent-green-600"
                            />
                            <span>{prayer}</span>
                        </label>
                    ))}

                    <label className="flex items-center space-x-2 mt-4">
                        <input
                            type="checkbox"
                            checked={schedule[day]?.tasks.shefa ?? false}
                            onChange={() => toggleShefa(day)}
                            className="w-5 h-5 accent-blue-600"
                        />
                        <span className="text-blue-700 font-semibold">{translations[lang]?.shefa}</span>
                    </label>
                </div>
            )}
        </div>
    )
}

export default DayTracker

