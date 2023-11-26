"use client";
import React from 'react'
import CountUpTimer from './countuptimer';
import Image from 'next/image';

// Calculate the number of days since a date
function DaysSince(dateString: string) {
    const pastDate: Date = new Date(dateString);
    const currentDate: Date = new Date();

    const daysSince: number = Math.floor((currentDate.getTime() - pastDate.getTime()) / (1000 * 60 * 60 * 24));

    return daysSince;
}

function Album({ name, image, date, detailed }: { name: string, image: string, date: string, detailed?: boolean }) {
    return (
        <div className="flex flex-col justify-center items-center m-4 font-semibold text-lg">
            <div className='py-2'>
                {name}
            </div>
            <div>
                <Image
                    src={require(`../images/${image}.jpg`)}
                    width={280}
                    height={280}
                    alt={name}
                    priority={false}
                />
            </div>
            <div className='py-3 text-center' suppressHydrationWarning={true}>
                {!detailed ? `${DaysSince(date)} Days` : <CountUpTimer startDate={date} />}
            </div>
        </div>
    )
}

export default Album