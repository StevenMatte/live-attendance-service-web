"use client";
import React, { useState } from 'react';
import { usePathname } from 'next/navigation';
import { RiArrowLeftLine, RiTimeFill, RiDashboard2Fill } from 'react-icons/ri';
import { useRouter } from "next/navigation";
export default function sidebar ({ className }: { className?: string }) {
    const router = useRouter();
    const rootClasses = `flex h-screen flex-col justify-between border-e border-gray-100 bg-white ${className || ''}`;
    const pathname = usePathname();
    const [isSidebarExtended, setIsSidebarExtended] = useState(true);
    const navItems = [
    { name: 'Home', href: '/' , icon: RiDashboard2Fill},
    { name: 'Attendance History', href: '/history', icon: RiTimeFill },
  ];
    const sidebarWidthClass = isSidebarExtended ? 'w-64' : 'w-20';
    const arrowRotation = isSidebarExtended ? 'rotate-0' : 'rotate-180';

    return(
        <div className={`transition-all duration-300 ease-in-out ${sidebarWidthClass} ${rootClasses}`}>
            <div className="flex flex-col h-full px-4 py-6 overflow-y-auto ">
                <div className="flex justify-between items-center">

                    <div className={`
                            sticky inset-x-0 bottom-0 border-t border-gray-100 
                            transition-all duration-300 ease-in-out 
                            overflow-hidden 
                            ${isSidebarExtended 
                                ? 'opacity-100 max-h-40 pointer-events-auto' 
                                : 'opacity-0 max-h-0 pointer-events-none'   
                            }
                        `}>
                        <img
                            alt=""
                            src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                            className="size-10 rounded-full object-cover"
                        />
                       
                    </div>
               
                    <a 
                        href="#" 
                        className='flex 
                        items-center justify-center 
                        p-2 
                        rounded-full 
                        w-10 h-10
                        bg-gray-200 
                        text-gray-800
                        hover:bg-sky-600
                        hover:text-white'
                        onClick={() => setIsSidebarExtended(!isSidebarExtended)}
                    > 
                        <RiArrowLeftLine className={`w-6 h-6 ${arrowRotation}`} />
                    </a>
                </div>
                <ul className="mt-6 space-y-1">

                {navItems.map((item) => {
                    const IconComponent = item.icon;
                    return(
                    <li key={item.name}>
                        <a 
                        href={"#"}
                        onClick={() => router.push(item.href)}
                        className={`
                            block p-2 rounded-md transition-colors flex flex-row gap-4
                            sticky inset-x-0 bottom-0 border-t border-gray-100 
                            transition-all duration-300 ease-in-out 
                            overflow-hidden 
                            ${isSidebarExtended 
                                ? 'opacity-100 max-h-40 pointer-events-auto' 
                                : 'opacity-0  pointer-events-none'   
                            }
                            ${pathname === item.href ? 'block rounded-lg bg-sky-600 px-4 py-2 text-sm font-medium text-white-700' : 'block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-sky-600  hover:text-white hover:text-gray-700' }`}
                        >
                        <IconComponent className="w-5 h-5" />
                        {item.name}
                        
                        </a>
                    </li>)}
                )}
                </ul>
            </div>

            
    </div>
    );
}