"use client";

import { useSckedule } from '@/hooks/useSchedule';
import { Language } from '@/utils/types/day';
import { translations } from '@/locals/translation';
import { TOTAL_DAYS } from '@/utils/constants';
import { FaAngleRight, FaCheck } from 'react-icons/fa';
import { useState } from 'react';
import Day from './day';

interface DayTrackerProps {
    lang: Language
}

const DayTracker = ({ lang }: DayTrackerProps) => {

    return (
        <div className="flex flex-col md:flex-row gap-4 flex-wrap mt-10">
            {Array.from({ length: TOTAL_DAYS }, (_, i) => (
                <Day key={i} lang={lang} dayIndex={i + 1} />
            ))}
        </div>
    )
}

export default DayTracker

