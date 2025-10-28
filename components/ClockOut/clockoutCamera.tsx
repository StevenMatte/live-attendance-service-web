"use client";
import React, { useRef, useEffect, useState, Dispatch, SetStateAction} from 'react';
import { RiLoginBoxLine, RiMapPin2Fill, RiListView } from 'react-icons/ri';

export default function clockInCamera({setIsOpen}: {setIsOpen: Dispatch<SetStateAction<boolean>>}) {

  const videoConstraints = {
    width: 1280,
    height: 720,
    facingMode: "user" 
  };

  const videoRef = useRef<HTMLVideoElement>(null);
  const [isExtended, setIsExtended] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
        if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
            setError("Camera access not supported by this browser.");
            return;
        }

        navigator.mediaDevices.getUserMedia({ video: videoConstraints })
            .then((stream) => {
                if (videoRef.current) {
                    videoRef.current.srcObject = stream;
                }
            })
            .catch((err) => {
                console.error("Camera access error:", err);
                if (err.name === "NotAllowedError" || err.name === "PermissionDeniedError") {
                    setError("Camera access denied. Please check browser permissions.");
                } else if (err.name === "NotFoundError") {
                    setError("No camera found on this device.");
                } else {
                    setError("An unknown error occurred while accessing the camera.");
                }
            });

        return () => {
            const stream = videoRef.current?.srcObject as MediaStream | null;
            if (stream) {
                stream.getTracks().forEach(track => track.stop());
            }
        };
    }, []);

    if (error) {
        return <div className="text-red-600 p-4 border border-red-300 bg-red-50 rounded-lg">{error}</div>;
    }

  return (
        <>
        <div className=" flex flex-grow grid content-end">
        <div className="flex flex-grow justify-center items-center">
            <video 
            ref={videoRef} 
            autoPlay 
            playsInline 
            muted
            className={` w-2/3 max-w-lg
                    transition-all duration-300 ease-in-out
                    aspect-square rounded-full border-1 border-gray-500 shadow-2xl object-cover 
                    ${isExtended === false && 'w-full max-w-1/2' }
                `} />
        </div>
        
        
            <div className="flex w-full max-w-2xl mx-auto justify-center bg-white border border-gray-200 rounded-2xl shadow-md mt-2 text-center">
            
            <div className="flex flex-col">
                <div className="flex justify-center items-center mt-3" onClick={() => setIsExtended(!isExtended)}>
                    <div 
                        className="w-1/8 min-w-20 bg-gray-500 h-1 rounded-full cursor-pointer hover:bg-blue-500/60"
                    ></div>
                </div>

                <div 
                    className={`
                        transition-all duration-300 ease-in-out overflow-hidden
                        ${isExtended ? 'max-h-96' : 'max-h-2'} 
                    `}>
                    <div className="pt-2 pb-4">
                        <span className="flex flex-row text-center justify-center items-center gap-1">
                            <RiLoginBoxLine className="text-center lg:text-4xl text-3xl tracking-tight text-red-500 mt-2 transform rotate-180"/>
                            <p className="text-center lg:text-xl text-lg font-extrabold tracking-tight text-gray-800 mt-2">Clock Out</p>
                        </span>
                        
                        <div>
                            <div className="flex flex-row text-center items-start gap-1 mx-5">
                                <RiMapPin2Fill className="text-md tracking-tight text-gray-500 mt-2 sm:text-xl"/>
                                <p className="text-center text-sm/6 font-bold tracking-tight text-gray-700 mt-2 sm:text-md">Your Location</p>
                            </div>
                            <div className="mx-8 sm:mx-11">
                                <p className="text-start text-xs/6 font-medium tracking-tight text-gray-400 mt-2 sm:text-sm/6">Jl. Letjen S Parman kav 22-24, Jakarta 11480. (long address clipped for brevity)</p>
                            </div>
                        </div>
                        
                        <div>
                            <div className="flex flex-row text-center items-start gap-1 mx-5 sm:text-center">
                                <RiListView className="text-md tracking-tight text-gray-500 mt-2 sm:text-xl"/> 
                                <p className="text-center text-sm font-bold tracking-tight text-gray-700 mt-2 sm:text-md">Note (Optional)</p>
                            </div>
                            <div className="mx-8 sm:mx-11">
                                <div className="col-span-full">
                                    <div className="mt-2">
                                        <textarea
                                            id="note"
                                            name="about"
                                            rows={1}
                                            placeholder="Optional."
                                            className="block w-full rounded-md bg-white outline-1 outline-gray-600 px-3 py-1.5 text-base text-gray-400 outline-1 -outline-offset-1  placeholder:text-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-400 sm:text-sm/6"
                                            defaultValue={''}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> 
                
                <div className="flex flex-grow justify-center items-center">
                    <div className="w-1/2 ">
                        <button
                            onClick={()=>{setIsOpen(true)}}
                            type="submit"
                            className="flex w-full justify-center rounded-2xl bg-red-500 px-3 py-3 text-md/6 font-semibold text-white hover:bg-red-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
                            >
                           
                            Clock Out
                        </button>
                    </div>
                </div>
            </div>

            </div>
        </div>
        </>

  );
}
