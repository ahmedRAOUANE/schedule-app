"use client";

import { useSckedule } from "@/hooks/useSchedule";
import { translations } from "@/locals/translation";
import { Language } from "@/utils/types/day";
import TaskCheckbox from "./task-checkbox";

const Fallback = () => {
    return (
        <div className="animate-pulse space-y-2">
            {Array.from({ length: 5 }).map((_, index) => (
                <div key={index} className="h-6 bg-gray-300 rounded-md w-3/4"></div>
            ))}
        </div>
    )
};

const TaskList = ({lang, dayIndex}: {lang: Language, dayIndex: number}) => {
    const { schedule, togglePrayer, toggleShefa, isLoading } = useSckedule();

    return isLoading ? <Fallback /> : (
                <>
                    {translations[lang]?.prayers.map((prayer, index) => (
                        <TaskCheckbox
                            key={index}
                            checked={schedule[dayIndex]?.tasks.prayers[index] ?? false}
                            onChange={() => togglePrayer(dayIndex, index)}
                            checkboxStyle="accent-green-600"
                            taskName={prayer}
                        />
                    ))}

                    <TaskCheckbox
                        checked={schedule[dayIndex]?.tasks.shefa ?? false}
                        onChange={() => toggleShefa(dayIndex)}
                        checkboxStyle="accent-blue-600"
                        taskName={translations[lang]?.shefa}
                    />
                </>
        )
}

export default TaskList

