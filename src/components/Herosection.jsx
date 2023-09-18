"use client";
import React from 'react'
import { BsFillPersonPlusFill, BsArrowLeftShort } from "react-icons/bs"
import { BiMessageDots } from "react-icons/bi"
import ProgressBar from '@ramonak/react-progress-bar';
ProgressBar
const Herosection = () => {
    return (
        <div className='text-white px-7 py-9 max-w-[1280px] bg-[#15132B] mx-6  mt-8 rounded-[14px]  '>
            <div className='flex flex-col space-y-10 flex-wrap mr-[0] md:mr-[18%]'>
                <div className='flex w-full items-center space-y-10 md:space-y-0 justify-between md:flex-row flex-col flex-wrap space-x-5 relative'>
                    <BsArrowLeftShort className='absolute bg-gray-500 rounded-full text-[22px] top-2 -left-3 text-black ' />
                    <div className='flex flex-col space-y-2'>
                        <span className="text-[23px] font-medium">
                            School November Tasks
                        </span>
                        <span className='text-[13px] text-gray-400'>Created by Instructor Day on November 31, 2022</span>
                    </div>
                    <div className='flex items-center space-x-6'>
                        <div className='flex flex-col items-end'>
                            <span className='text-[14px] font-semibold'>Centered Martial Arts</span>
                            <span className='text-[13px] text-gray-400'>Sunnyvale, Ca</span>
                        </div>
                        <div className='bg-white p-1 rounded-[10px]'>
                            <img src="hello.png" alt="logo" />
                        </div>
                        <div>
                            <img src="icVert (1).png" />
                        </div>
                    </div>
                </div>
                <div className='flex justify-between w-full md:space-y-0 space-y-5 items-center flex-col md:flex-row text-[12px] font-semibold flex-wrap'>
                    <div className='flex items-center space-x-4 flex-wrap md:space-y-0 space-y-10'>
                        <img src="user.png" ></img>
                        <button className='bg-[#6418C3] flex space-x-1 items-center justify-center rounded-[14px]  w-[100px] h-[40px]'>
                            <BsFillPersonPlusFill />
                            <span>Invite People</span>
                        </button>
                        <button 
                        className='w-[80px] h-[40px] border border-[#6418C3] flex space-x-1 items-center justify-center rounded-[14px]  '
                        >Private</button>
                        <button
                        className='w-[80px] h-[40px]  bg-[#6418C3] flex space-x-1 items-center justify-center rounded-[14px]  '
                        >Edit</button>
                        <button
                        className='border-[#6418C3] border  flex space-x-1 items-center justify-center rounded-[14px]  w-[110px] h-[40px]'
                        >
                            <BiMessageDots />
                            <span>45 Comments</span>
                        </button>
                    </div>
                    <div className='flex items-center justify-center md:space-y-0 space-y-5 space-x-3 flex-wrap'>
                    <span className='text-[12px] font-normal'>Total Progress 60%</span>
                    <ProgressBar  height='10px' width='170px' baseBgColor='#1E1C3A' customLabel=' ' completed={50} />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Herosection