"use client";
import React, { useState, useEffect } from 'react';

const DateDisplay = ({ startDate }: { startDate: string }) => {

    // Calculate the number of days since a date
    function CalculateDaysSince(dateString: string) {
        const pastDate: Date = new Date(dateString);
        const currentDate: Date = new Date();

        const daysSince: number = Math.floor((currentDate.getTime() - pastDate.getTime()) / (1000 * 60 * 60 * 24));

        return daysSince;
    }

    const [daysSince, setDaysSince] = useState<number | null>(null);
    const [isClient, setIsClient] = useState<boolean>(false);

    useEffect(() => {
        // Set to true once component mounts, indicating client-side rendering
        setIsClient(true);
    }, []);

    useEffect(() => {
        if (isClient) {
            // Set the initial time difference immediately, then update every second
            setDaysSince(CalculateDaysSince(startDate));
        }
    }, [startDate, isClient]);

    if (!isClient || !daysSince) {
        // Return null or a loader until the actual date is available
        return <div className='text-black'>.</div>
    }

    return (
        <div>
            {daysSince} Days
        </div>
    );
};

export default DateDisplay;
