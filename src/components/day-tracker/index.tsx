"use client";

import { useSckedule } from "@/hooks/useSchedule";
import { FaAngleRight, FaCheck } from "react-icons/fa"
import TaskList from "./task-list";
import { useEffect, useState } from "react";
import { Translation } from "@/utils/types/language";
import { Day as DayType } from "@/utils/types/day";

const Day = ({ dayIndex, translation }: { dayIndex: number, translation: Translation }) => {
    const { currentDay, schedule, toggleAll, togglePrayer, toggleShefa, isLoading } = useSckedule();

    const [isCollapsed, setIsCollapsed] = useState(true);
    const [isAllTasksChecked, setIsAllTasksChecked] = useState(false);

    useEffect(() => {
        setIsCollapsed(dayIndex !== currentDay);

        const day = schedule[dayIndex];
        if (!day || !day.tasks) {
            setIsAllTasksChecked(false);
            return;
        };

        const prayers = day.tasks.prayers.every((prayer) => prayer === true);
        const shefa = day.tasks.shefa === true;

        setIsAllTasksChecked(prayers && shefa);
    }, [currentDay, dayIndex, schedule]);

    return (
        <div className={`
            md:w-[200px] md:mx-auto p-4 border-[var(--border)] rounded-2xl 
            ${dayIndex === currentDay
                ? "bg-[var(--border)] row-span-4 order-first"
                : "row-span-1 bg-[var(--border)]/40"
            } 
            ${isCollapsed ? "row-span-1" : "row-span-4"}
        `}>
            <div className='flex items-center justify-between'>
                <h2 className="text-lg font-bold mb-2">{translation?.day} {dayIndex}</h2>

                <div className='flex items-center gap-2'>
                    <div>
                        <label
                            title='Check All'
                            htmlFor={`checkAll-${dayIndex}`}
                            className="w-8 h-8 flex items-center justify-center rounded-full bg-[var(--border)] cursor-pointer"
                            aria-label={`check all tasks for day ${dayIndex}`}
                        >
                            <FaCheck
                                className={`transition-all duration-300 ease-in-out ${isAllTasksChecked ? "fill-green-500" : "fill-[var(--foreground)]"}`}
                            />
                        </label>

                        <input
                            checked={isAllTasksChecked}
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
                        <FaAngleRight className={`${isCollapsed ? "rotate-90" : "rotate-0"} transition-all duration-300 ease-in-out`} />
                    </button>
                </div>
            </div>

            <div
                className={`
                    transition-all duration-300 ease-in-out overflow-hidden
                    ${isCollapsed ? "max-h-0 opacity-0" : "max-h-96 opacity-100 space-y-2 mt-4"}
                `}
            >
                <TaskList
                    dayIndex={dayIndex}
                    translation={translation}
                    togglePrayer={togglePrayer}
                    toggleShefa={toggleShefa}
                    isLoading={isLoading}
                    schedule={schedule as DayType[]}
                />
            </div>
        </div>
    )
}

export default Day

