"use client";

import Image from "next/image";
import { RiHistoryLine, RiMapPin2Fill } from 'react-icons/ri';
import { useRouter } from "next/navigation";

export default function historyCardSlips({ date, month, clock_in, clock_out, working_time, location } : { date?: string, month?: string ,clock_in?:string, clock_out?:string, working_time?:string, location?:string}) {
    const router = useRouter();
    return (
        <>
            <div className="w-full max-w-xl mx-auto justify-start bg-white border border-gray-200 rounded-2xl shadow-md mt-7 py-3 flex flex-col gap-5 md:flex-row md:items-center">
                    <div className="w-full md:w-1/4">
                    <p className="text-center text-3xl font-medium tracking-tight text-gray-500 mt-2">{date}</p>
                    <p className="text-center text-normal font-medium tracking-tight text-gray-500 mt-2">{month}</p>
                    </div>
                    <div className="w-full mx-2 md:w-3/4 md:mx-0">
                    <div className="flex flex-row justify-around">
                        <div className="">
                        <p className="text-center text-sm font-bold tracking-tight text-gray-400 mt-2">Clock in</p>
                        <p className="text-center text-xl font-bold tracking-tight text-lime-500 mt-2">{clock_in || 'N/A'}</p>
                        </div>
                        <div className="">
                        <p className="text-center text-sm font-bold tracking-tight text-gray-400 mt-2">Clock Out</p>
                        <p className="text-center text-xl font-bold tracking-tight text-red-500 mt-2">{clock_out || 'N/A'}</p>
                        </div>
                        <div className="">
                        <p className="text-center text-sm font-bold tracking-tight text-gray-400 mt-2">Working Time</p>
                        <p className="text-center text-xl font-bold tracking-tight text-gray-500 mt-2">{working_time || 'N/A'}</p>
                        </div>
                    </div>

                    <div className="flex flex-col items-center gap-0 mx-3 mt-3 md:flex-row md:gap-2 md:mr-4">
                        <RiMapPin2Fill className="w-5 h-5 text-gray-400"/>
                        <p className="flex-1 text-center text-xs font-medium tracking-tight text-gray-400 mt-2 md:text-start md:mt-0">
                            {location}
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

