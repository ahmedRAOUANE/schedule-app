"use client";

import { Day } from "@/utils/types/day";
import TaskCheckbox from "./task-checkbox";
import { Translation } from "@/utils/types/language";

const Fallback = () => {
    return (
        <div className="animate-pulse space-y-2">
            {Array.from({ length: 5 }).map((_, index) => (
                <div key={index} className="h-6 bg-gray-300 rounded-md w-3/4"></div>
            ))}
        </div>
    )
};

const TaskList = ({
    dayIndex, translation, togglePrayer, toggleShefa, isLoading, schedule
}: {
    dayIndex: number, translation: Translation,
    togglePrayer: (dayIndex: number, index: number) => void,
    toggleShefa: (dayIndex: number) => void, isLoading: boolean, schedule: Day[]
}) => {
    return isLoading ? <Fallback /> : (
        <>
            {translation?.prayers.map((prayer: string, index: number) => (
                <TaskCheckbox
                    key={`prayer-${dayIndex}-${index}`}
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
                taskName={translation?.shefa}
            />
        </>
    )
}

export default TaskList

