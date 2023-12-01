import React from 'react'
import CountUpTimer from './countuptimer';
import Image from 'next/image';
import DateDisplay from './datedisplay';

function Album({ name, image, date, detailed }: { name: string, image: string, date: string, detailed?: boolean }) {
    return (
        <div className="flex flex-col justify-center items-center m-4 font-semibold text-lg">
            <div className='py-2'>
                {name}
            </div>
            <div>
                <Image
                    src={require(`../images/${image}`)}
                    width={280}
                    height={280}
                    alt={name}
                    priority={false}
                />
            </div>
            <div className='pt-3 text-center'>
                {new Date(date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' })}
            </div>
            <div className='py-3 text-center' suppressHydrationWarning={true}>
                {!detailed ? <DateDisplay startDate={date} /> : <CountUpTimer startDate={date} />}
            </div>
        </div>
    )
}

export default Album