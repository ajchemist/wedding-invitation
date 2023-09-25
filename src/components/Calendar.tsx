"use client";

import { useState, useEffect } from 'react';
import dayjs, { Dayjs } from 'dayjs';
// @ts-ignore
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';
import { noto_serif_kr, cafe24_danjunghae, cafe24_dangdanghae, cafe24_simplehae } from '@/components/fonts';

dayjs.extend(utc);
dayjs.extend(timezone);

type CalendarProps = {
    dday: {
        year: number;
        month: number;
        day: number;
    };
}

export const Calendar = ({ dday }: CalendarProps) => {
    const { year, month, day } = dday;
    const targetDay = dayjs().year(year).month(month - 1).date(day);
    const [currentMonth, setCurrentMonth] = useState<Dayjs>(targetDay);
    const [daysRemaining, setDaysRemaining] = useState<number | null>(null);

    useEffect(() => {
        const { year, month, day } = dday;
        const targetDay = dayjs().year(year).month(month - 1).date(day);
        setCurrentMonth(targetDay);
        setDaysRemaining(dayjs(targetDay).diff(dayjs(), 'day'));
    }, [dday]);

    const daysInMonth = Array.from({ length: currentMonth.daysInMonth() }, (_, i) => i + 1);
    const startDay = currentMonth.startOf('month').day();

    return (
        <div className={`${noto_serif_kr.className} p-4 my-4 max-w-md`}>
            <div className="mb-7 text-center opacity-90">
                <h2 className={`tracking-tighter font-medium text-xl`}>{currentMonth.format('MM월')}</h2>
            </div>
            <div className={`grid grid-cols-7 gap-2 opacity-80`}>
                {['일', '월', '화', '수', '목', '금', '토'].map((day) => (
                    <div key={day} className="text-center min-h-[32px]">
                        {day}
                    </div>
                ))}
                {Array.from({ length: startDay + daysInMonth.length }).map((_, index) => {
                    const dayNumber = index - startDay + 1;
                    const isHighlighted = dayNumber === day;

                    return (
                        <div
                            key={index}
                            className={`m-auto min-w-[32px] min-h-[32px] text-center text-sm p-1.5 rounded-full ${isHighlighted ? 'bg-red-200' : 'transparent'}`}
                        >
                            {dayNumber > 0 && dayNumber <= daysInMonth.length && dayNumber}
                        </div>
                    );
                })}
            </div>
            <p className={`mt-7 text-center font-light tracking-tighter`}>
                <span className={`opacity-70`}>예식일이 </span> 
                <span className={`font-medium text-xl opacity-80`}>{daysRemaining ? Math.abs(daysRemaining) : null}</span>
                <span className={`opacity-70`}>{daysRemaining ? ( (daysRemaining < 0) ? '일 지났습니다.' : '일 남았습니다.' ) : null}</span>
            </p>
        </div>
    );
}