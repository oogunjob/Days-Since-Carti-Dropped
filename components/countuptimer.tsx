"use client";
import React, { useState, useEffect } from 'react';

const CountUpTimer = ({ startDate }: { startDate: string }) => {

    const CalculateTimeDifference = (startDate: string) => {
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

    const [timeDiff, setTimeDiff] = useState<{ days: number, hours: number, minutes: number, seconds: number } | null>(null);
    const [isClient, setIsClient] = useState<boolean>(false);

    useEffect(() => {
        // Set to true once component mounts, indicating client-side rendering
        setIsClient(true);
    }, []);

    useEffect(() => {
        if (isClient) {
            // Set the initial time difference immediately, then update every second
            setTimeDiff(CalculateTimeDifference(startDate));

            const interval = setInterval(() => {
                setTimeDiff(CalculateTimeDifference(startDate));
            }, 1000);

            // Clear interval on cleanup
            return () => clearInterval(interval);
        }
    }, [startDate, isClient]);

    if (!isClient || !timeDiff) {
        // Return null or a loader until the actual date is available
        return <div>...</div>
    }

    return (
        <div>
            {timeDiff.days} DAYS {timeDiff.hours} HOURS {timeDiff.minutes} MINUTES {timeDiff.seconds} SECONDS
        </div>
    );
};

export default CountUpTimer;
