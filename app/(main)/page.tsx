import Image from "next/image";
import HomeCard from "../../components/Home/homeCard";
import HistoryCardSlips from "../../components/History/historyCardSlips"
import {RiMapPin2Fill} from 'react-icons/ri'; 
export default function Home() {
  const arrayHistoryCardSlips = [
  {
    date: "25",
    month: "April",
    clock_in: "10:00",
    clock_out: "18:00",
    working_time: "10:10",
    location: "Jl. Letjen S Parman kav 22-24, Jakarta 11480. (long address clipped for brevity)",
  },
  {
    date: "24",
    month: "April",
    clock_in: "09:20",
    clock_out: "19:20",
    working_time: "10:40",
    location: "Jl. Letjen S Parman kav 22-24, Jakarta 11480. (long address clipped for brevity)",
  },
];
  return (
    <div className="flex min-h-screen bg-gray-100">    
    <div className="flex-grow mx-6 mt-6 p-4 bg-white">
        <HomeCard/>
        <div>
              {/* <div className="w-full max-w-xl mx-auto justify-start bg-white border border-gray-200 rounded-2xl shadow-md mt-7 py-3 flex flex-col gap-5 md:flex-row md:items-center">
                  <div className="w-full md:w-1/4">
                    <p className="text-center text-3xl font-medium tracking-tight text-gray-500 mt-2">25</p>
                    <p className="text-center text-normal font-medium tracking-tight text-gray-500 mt-2">April</p>
                  </div>
                  <div className="w-full mx-2 md:w-3/4 md:mx-0">
                    <div className="flex flex-row justify-around">
                      <div className="">
                        <p className="text-center text-sm font-bold tracking-tight text-gray-400 mt-2">Clock in</p>
                        <p className="text-center text-xl font-bold tracking-tight text-lime-500 mt-2">08:00</p>
                      </div>
                      <div className="">
                        <p className="text-center text-sm font-bold tracking-tight text-gray-400 mt-2">Clock Out</p>
                        <p className="text-center text-xl font-bold tracking-tight text-red-500 mt-2">17:20</p>
                      </div>
                      <div className="">
                        <p className="text-center text-sm font-bold tracking-tight text-gray-400 mt-2">Working Time</p>
                        <p className="text-center text-xl font-bold tracking-tight text-gray-500 mt-2">09:20</p>
                      </div>
                    </div>

                    <div className="flex flex-col items-center gap-0 mx-3 mt-3 md:flex-row md:gap-2 md:mr-4">
                      <RiMapPin2Fill className="w-5 h-5 text-gray-400"/>
                        <p className="flex-1 text-center text-xs font-medium tracking-tight text-gray-400 mt-2 md:text-start md:mt-0">
                          Jl. Letjen S Parman kav 22-24, Jakarta 11480.Jl. Letjen S Parman kav 22-24, Jakarta 11480.Jl. Letjen S Parman kav 22-24, Jakarta 11480.Jl. Letjen S Parman kav 22-24, Jakarta 11480.
                        </p>
                    </div>
                </div>
              </div> */}
              {arrayHistoryCardSlips.map((slipData) => (
                  <HistoryCardSlips
                      key={`${slipData.date}-${slipData.month}-${slipData.clock_in}`}
                      date={slipData.date}
                      month={slipData.month}
                      clock_in={slipData.clock_in}
                      clock_out={slipData.clock_out}
                      working_time={slipData.working_time}
                      location={slipData.location}
                  />
              ))}
          </div>
    </div>
</div>
  );
}
