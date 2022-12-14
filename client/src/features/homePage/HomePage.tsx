import SideMenu from './sideMenu/SideMenu';
import ScrollSpy from "react-ui-scrollspy";
import DayMenuCard from './dayMenuCard/DayMenuCard';
import { useEffect, useRef } from 'react';
import { useAppSelector } from '../../app/hooks';
import { selectDay } from './daySlice';

const HomePage = () => {
    const day = useAppSelector(selectDay);

    const monday = useRef<HTMLDivElement>(null);
    const tuesday = useRef<HTMLDivElement>(null);
    const wednesday = useRef<HTMLDivElement>(null);
    const thursday = useRef<HTMLDivElement>(null);
    const friday = useRef<HTMLDivElement>(null);
    const saturday = useRef<HTMLDivElement>(null);
    const sunday = useRef<HTMLDivElement>(null);

    const refs = [
        monday,
        tuesday,
        wednesday,
        thursday,
        friday,
        saturday,
        sunday
    ];

    useEffect(() => {
        refs[day.code].current?.scrollIntoView();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div className='grid grid-cols-6'>
            <div className='fixed bottom-0 w-full sm:sticky col-span-6 sm:col-span-1 sm:top-16 sm:left-0 sm:h-screen text-2xl bg-slate-200'>
                <SideMenu />
            </div>
            <div className='col-span-6 sm:col-span-5 px-4 sm:px-8 bg-white'>
                <ScrollSpy
                    scrollThrottle={100}
                    offsetBottom={30}
                >
                    <DayMenuCard reference={refs[1]} dayCode={1} />
                    <DayMenuCard reference={refs[2]} dayCode={2} />
                    <DayMenuCard reference={refs[3]} dayCode={3} />
                    <DayMenuCard reference={refs[4]} dayCode={4} />
                    <DayMenuCard reference={refs[5]} dayCode={5} />

                    <div ref={refs[6]} className='pt-20' id="saturday">
                        <h2 className='font-bold text-3xl text-primary border-b-2 pb-2' ><a href="#saturday">Saturday</a></h2>
                        <div className='uppercase p-4 text-2xl italic flex gap-4'>
                            <p>Rest Day</p>
                        </div>
                    </div>
                    <div ref={refs[0]} className='py-20' id="sunday">
                        <h2 className='font-bold text-3xl text-primary border-b-2 pb-2'><a href="#sunday">Sunday</a></h2>
                        <div className='uppercase p-4 text-2xl italic flex gap-4'>
                            <p>Rest Day</p>
                        </div>
                    </div>
                </ScrollSpy>
            </div>
        </div>
    )
}

export default HomePage