// import { PRAYERS } from '@/utils/constants';
import { useSckedule } from '@/hooks/useSchedule';
import { Language } from '@/utils/types';
import { translations } from '@/locals/translation';

interface DayTrackerProps {
    day: number,
    isActive: boolean,
    lang: Language
}

const DayTracker = ({day, isActive, lang}: DayTrackerProps) => {
    const {schedule, togglePrayer, toggleShefa} = useSckedule();

    return (
        <div className={`p-4 border-[var(--border)] rounded-2xl ${isActive ? "bg-[var(--border)]" : "bg-[var(--border)]/40"} transition-all`}>
            <h2 className="text-lg font-bold mb-2">{translations[lang].day} {day}</h2>
            <div className="space-y-2">
                {translations[lang].prayers.map((prayer, index) => (
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
                    <span className="text-blue-700 font-semibold">{translations[lang].shefa}</span>
                </label>
            </div>
        </div>
    )
}

export default DayTracker

