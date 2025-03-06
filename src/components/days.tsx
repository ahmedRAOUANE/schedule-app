"use client";

import { TOTAL_DAYS } from '@/utils/constants';
import DayTracker from './day-tracker'
import { useSckedule } from '@/hooks/useSchedule';
import { Language } from '@/utils/types';

const Days = ({lang}: {lang: Language}) => {
    const { currentDay } = useSckedule();

    return (
        <div className="flex flex-col md:flex-row gap-4 flex-wrap mt-10">
            {Array.from({ length: TOTAL_DAYS }, (_, i) => (
                <DayTracker lang={lang} key={i + 1} day={i + 1} isActive={i + 1 === currentDay} />
            ))}
        </div>
    )
}

export default Days

