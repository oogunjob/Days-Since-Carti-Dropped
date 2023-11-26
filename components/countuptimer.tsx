"use client";
import React, { useState, useEffect } from 'react';

const CountUpTimer = ({ startDate }: { startDate: string }) => {

    const calculateTimeDifference = (startDate: string) => {
        const now = new Date();
        const start = new Date(startDate);
        const diff = now.getTime() - start.getTime();

        let seconds = Math.floor(diff / 1000);
        let minutes = Math.floor(seconds / 60);
        let hours = Math.floor(minutes / 60);
        const days = Math.floor(hours / 24);

        hours = hours % 24;
        minutes = minutes % 60;
        seconds = seconds % 60;

        return { days, hours, minutes, seconds };
    };

    const [timeDiff, setTimeDiff] = useState(calculateTimeDifference(startDate));

    useEffect(() => {
        const interval = setInterval(() => {
            setTimeDiff(calculateTimeDifference(startDate));
        }, 1000);

        return () => clearInterval(interval);
    }, [startDate]);

    return (
        <div suppressHydrationWarning={true}>
            {timeDiff.days} DAYS {timeDiff.hours} HOURS {timeDiff.minutes} MINUTES {timeDiff.seconds} SECONDS
        </div>
    );
};

export default CountUpTimer;