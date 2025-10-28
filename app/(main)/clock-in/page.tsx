'use client'
import { useState } from 'react'
import Image from "next/image";
import ClockinCamera from "../../../components/ClockIn/clockinCamera";
import ClockinSuccessModal from "../../../components/ClockIn/clockinSuccessModal"
export default function ClockIn() {
const [isOpen, setIsOpen] = useState(false)
  return (
    <div className="flex min-h-screen bg-gray-700">
      <div className="flex-grow mx-6 mt-6 bg-gray-700 shadow-md flex justify-center items-center flex-col">     
             {/* Need Rework ASAP */}
        <ClockinCamera setIsOpen={setIsOpen}/>
        <ClockinSuccessModal isOpen={isOpen} setIsOpen={setIsOpen}/>
      </div>
    </div>
  );
}
