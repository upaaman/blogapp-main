"use client";
import React from 'react'
import ProgressBar from '@ramonak/react-progress-bar';
import {BsThreeDots} from "react-icons/bs"
import {AiOutlineClockCircle} from "react-icons/ai"

const Card = ({title,color,description,percentage}) => {
    const colorVariants = {
        yellow:'text-yellow-400',
        pink:'text-pink-400',
        green:'text-green-400',
        blue: 'text-blue-400',
        red: 'text-red-400',
      }
    const colorBg = {
        yellow:'bg-yellow-400',
        pink:'bg-pink-400',
        green:'bg-green-400',
        blue: 'bg-blue-400',
        red: 'bg-red-400',

      }
  return (
    <div className="w-[310px] h-[210px] bg-[#211A75] rounded-[14px] px-4 py-4 space-y-5">
        <div className='flex justify-between items-center'>
            <div className='flex space-x-2 items-center'>
                <div className={`w-2 h-2 rounded-full ${colorBg[color]}`}></div>
                <span className={` ${colorVariants[color]} text-[18px]`}>{title}</span>
            </div>
            <div className='text-white text-[23px]'><BsThreeDots/></div>
        </div>
        <div>
            <p className='text-gray-300 text-[14px]'>{description}</p>
        </div>
        <div>
        <ProgressBar  height='10px' width='270px' baseBgColor="white" bgColor={color}  customLabel=' ' completed={percentage} />
        </div>
        <div className='flex justify-between items-center'>
            <div>
                <img width={100} src="user.png" alt="logo" />
            </div>
            <div className='flex text-gray-400 space-x-1 items-center text-[12px]'>
                <AiOutlineClockCircle/>
                <span>Due in 4 days</span>
            </div>
        </div>
    </div>
  )
}

export default Card