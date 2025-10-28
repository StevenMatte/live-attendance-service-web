import Image from "next/image";
import HistoryCardSlips from "../../../components/History/historyCardSlips"


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
    <div className="flex bg-gray-100">    
        <div className="flex-grow mx-6 mt-6 p-4 bg-white">
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
  );
}
