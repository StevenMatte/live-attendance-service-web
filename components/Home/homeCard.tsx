"use client";
import Image from "next/image";
import { RiHistoryLine, RiMapPin2Fill } from 'react-icons/ri';
import { useRouter } from "next/navigation";
export default function HomeCard() {
  const router = useRouter();
  
  return (
    <>
       <div className=" w-full">
          <div className="">
              <h1 className="text-start text-2xl md:text-3xl font-bold tracking-tight text-gray-600">John Doe</h1>
              <h1 className="text-start text-normal md:text-xl font-lighter tracking-tight text-gray-500">123456789 - Developer</h1>
          </div>
          <div className="w-full max-w-xl mx-auto justify-center bg-white border border-gray-200 rounded-2xl shadow-md mt-2 text-center">
                <p className="text-center lg:text-normal font-medium tracking-tight text-gray-500 mt-2">Live Attendance</p>
                <h1 className=" lg:text-5xl md:text-4xl sm:text-2xl xs:text-2xl font-extrabold tracking-tight text-sky-800 mt-3">09:01 AM</h1>
                <p className="text-center lg:text-sm font-medium tracking-tight text-gray-500 mt-2">Monday, 26 April 2025</p>
                <div className="flex gap-4 mx-10 justify-between mt-8 mb-6">
                  <button
                  onClick={()=>router.push("/clock-in")}
                  type="button"
                  className="gap-3 flex w-full outline-1 text-white outline justify-center rounded-lg bg-lime-400 px-3 py-3 text-sm/6 font-semibold text-gray-400 hover:bg-lime-300 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 text-center"
                > Clock In
                </button>
                <button
                  type="button"
                  className="gap-3 flex w-full outline-1  text-white outline justify-center rounded-lg bg-red-400 px-3 py-3 text-sm/6 font-semibold text-gray-400 hover:bg-red-300 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 text-center"
                > Clock Out
                </button>
                </div>
          </div>
            <div className="flex flex-row justify-around mt-4 mx-auto">
              <div className="flex gap-2 text-sky-800">
                <RiHistoryLine className="w-5 h-5 lg:w-8 lg:h-8"/>
                <h1 className="text-start lg:text-2xl font-normal tracking-tight ">Attendance Histories</h1>
              </div>
              <div className="flex gap-2 text-sky-800">
                  <a href="#" onClick={() => router.push("/history")} className="text-start lg:text-normal font-normal tracking-tight">See More</a>
              </div>
            </div>
       </div>
    </>
  );
}
