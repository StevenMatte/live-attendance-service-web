import Image from "next/image";
import HomeCard from "../../../components/Home/homeCard";


export default function Home() {
  return (
    <div className="flex bg-gray-100">    
    {/* This inner div uses flex-grow to push HomeCard down or stretch it */}
    <div className="flex-grow mx-6 mt-6 p-4 bg-white">
        <HomeCard/>
    </div>
</div>
  );
}
