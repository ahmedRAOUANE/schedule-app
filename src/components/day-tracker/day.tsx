"use client";

import { useSckedule } from "@/hooks/useSchedule";
import { translations } from "@/locals/translation"
import { Language } from "@/utils/types/day";
import { FaAngleRight, FaCheck } from "react-icons/fa"
import TaskList from "./task-list";
import { useEffect, useState } from "react";

const Day = ({ dayIndex, lang }: { dayIndex: number, lang: Language }) => {
    const { currentDay, schedule, toggleAll } = useSckedule();

    const [isCollapsed, setIsCollapsed] = useState(true);

    const isAllTasksChecked = () => {
        const day = schedule[dayIndex];
        if (!day || !day.tasks) return false;

        const prayers = day.tasks.prayers.every((prayer) => prayer === true);
        const shefa = day.tasks.shefa === true;

        return prayers && shefa;
    }

    useEffect(() => {
        setIsCollapsed(dayIndex !== currentDay);
    }, [currentDay, dayIndex]);

    return (
        <div className={`
            md:w-[200px] md:mx-auto p-4 border-[var(--border)] rounded-2xl transition-all
            ${dayIndex === currentDay ? "bg-[var(--border)]" : "bg-[var(--border)]/40"} 
        `}>
            <div className='flex items-center justify-between'>
                <h2 className="text-lg font-bold mb-2">{translations[lang]?.day} {dayIndex}</h2>

                <div className='flex items-center gap-2'>
                    <div>
                        <label
                            title='Check All'
                            htmlFor={`checkAll-${dayIndex}`}
                            className="w-8 h-8 flex items-center justify-center rounded-full bg-[var(--border)] cursor-pointer"
                            aria-label={`check all tasks for day ${dayIndex}`}
                        >
                            <FaCheck
                                className={`transition-all duration-300 ease-in-out ${isAllTasksChecked() ? "fill-green-500" : "fill-[var(--foreground)]"}`}
                            />
                        </label>

                        <input
                            checked={isAllTasksChecked()}
                            type="checkbox"
                            className="hidden"
                            id={`checkAll-${dayIndex}`}
                            onChange={() => toggleAll(dayIndex)}
                        />
                    </div>

                    <button
                        title='collapse'
                        className='w-8 h-8 flex items-center justify-center rounded-full bg-[var(--border)] cursor-pointer'
                        onClick={() => setIsCollapsed(!isCollapsed)}
                    >
                        <FaAngleRight />
                    </button>
                </div>
            </div>

            <div
                className={`
                    transition-all duration-300 ease-in-out overflow-hidden
                    ${isCollapsed ? "max-h-0 opacity-0" : "max-h-96 opacity-100 space-y-2 mt-4"}
                `}
            >
                <TaskList lang={lang} dayIndex={dayIndex} />
            </div>
        </div>
    )
}

export default Day

