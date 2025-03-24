"use client";

import { TOTAL_DAYS } from "@/utils/constants";
import { Day } from "@/utils/types/day";
import { useEffect, useState } from "react";

type Days = Record<number, Day>;

export const useSckedule = () => {
    const savedData = localStorage.getItem("schedule");

    const [schedule, setSchedule] = useState<Days>({});
    const [currentDay, setCurrentDay] = useState<number>(1);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    // update the current day
    const getToday = () => {
        const today = new Date().getDate();
        return today > TOTAL_DAYS ? TOTAL_DAYS : today;
    }

    // load saved data from local storage
    useEffect(() => {
        if (savedData) {
            const parsedData: Days = JSON.parse(savedData);

            // convert the saved data to the Day instance
            const restoredSchedule: Days = Object.fromEntries(
                Object.entries(parsedData).map(([key, value]) => [
                    key,
                    new Day(value.tasks)
                ])
            )

            setSchedule(restoredSchedule);
            setIsLoading(false);
        } else {
            // initialize empty schedule
            const initialSchedule: Days =
                Array.from({ length: TOTAL_DAYS }, () => new Day())
                    .reduce((acc, day, index) => ({ ...acc, [index + 1]: day }), {});

            setSchedule(initialSchedule);
            localStorage.setItem("schedule", JSON.stringify(initialSchedule));
        }

        setCurrentDay(getToday());
        setIsLoading(false);
    }, [savedData]);

    // update a specific prayer in the status
    const togglePrayer = (day: number, prayer: number) => {
        const updatedSchedule: Days = {
            ...schedule,
            [`${day}`]: schedule[day].togglePrayer(prayer)
        };
        setSchedule(updatedSchedule);
        localStorage.setItem("schedule", JSON.stringify(updatedSchedule));
    }


    const toggleShefa = (day: number) => {
        const updatedSchedule: Days = {
            ...schedule,
            [`${day}`]: schedule[day].toggleShefa()
        };
        setSchedule(updatedSchedule);
        localStorage.setItem("schedule", JSON.stringify(updatedSchedule));
    }

    const toggleAll = (selectedDay: number) => {
        const currentDay = schedule[selectedDay];

        if (!currentDay) return;

        const allChecked = currentDay.tasks.prayers.every((prayer) => prayer) && currentDay.tasks.shefa;
        // console.log("5. allChecked: ", allChecked);

        if (allChecked) {
            const updatedDay = currentDay.uncheckAll();
            const updatedSchedule = {
                ...schedule,
                [`${selectedDay}`]: updatedDay
            };
            setSchedule(updatedSchedule);
            localStorage.setItem("schedule", JSON.stringify(updatedSchedule));
            return;
        }

        const updatedTasks = {
            prayers: currentDay.tasks.prayers.map(() => true),
            shefa: true
        };
        const updatedDay = new Day(updatedTasks);

        const updatedSchedule = {
            ...schedule,
            [`${selectedDay}`]: updatedDay
        };

        setSchedule(updatedSchedule);
        localStorage.setItem("schedule", JSON.stringify(updatedSchedule));
    }

    return {
        schedule,
        isLoading,
        currentDay,
        setCurrentDay,
        togglePrayer,
        toggleShefa,
        toggleAll
    };
};

