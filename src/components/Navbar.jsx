"use client";
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { AiFillBell, AiFillCaretDown,AiFillShop } from 'react-icons/ai'
import {GiHamburgerMenu} from "react-icons/gi"
import { FaFileInvoiceDollar } from "react-icons/fa"
import { SlCalender } from "react-icons/sl"

function Navbar() {
    const [navbar, setNavbar] = useState(true);

    const handleResize = () => {
        if (window.innerWidth > 990) {
            setNavbar(true)
        } else {
            setNavbar(false)
        }
    }
    function openNav() {
        document.getElementById("mySidenav").style.width = "250px";
    }
    useEffect(() => {
        window.addEventListener("resize", handleResize)
    })
    return (

        <div className='max-w-[1280px]   px-7 bg-[#15132B] py-5 '>

            <div className='w-full flex items-center justify-between'>
                {!navbar &&
                    <div
                    className="text-white text-[18px] flex font-bold  items-center space-x-3 w-[200px]  ">
                    <GiHamburgerMenu onClick={() => openNav()} className="" />
                       <span> webframetech</span>
                    </div>
                }
                {navbar && <>
                    <div class="ml-3  w-64 lg:ml-0 relative">
                        <span class="absolute inset-y-0 left-0 flex items-center pl-2 text-gray-500">
                            <svg width="25" height="25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path stroke="currentColor" stroke-width="2" stroke-linecap="round" d="M11.508 19.479a8 8 0 100-16 8 8 0 000 16zM21.508 21.478l-4.35-4.35" />
                            </svg>
                        </span>
                        <input placeholder="Search" className="rounded-[45px] h-[48px] w-full bg-[#211A75] pl-12 pr-4 py-3 text-sm  placeholder-gray-600 text-gray-900" />
                    </div>


                    <div className='underline text-[#6418C3] text-[14px] md:w-[12%]'>
                        <a href="/">OTHER MENUS</a>
                    </div>

                    <div className='flex items-center space-x-4'>
                        <div className='relative'>
                            <AiFillBell className='text-[#7879F1] text-[25px]' />
                            <span className='bg-[#5ECFFF] absolute left-3 bottom-4 text-black w-[18px] h-[18px] text-[11px] rounded-full flex justify-center items-center'>16</span>
                        </div>
                        <div className='relative'>
                            <SlCalender className='text-[#7879F1] text-[25px]' />
                            <span className='bg-[#5ECFFF] absolute left-3 bottom-4 text-black w-[18px] h-[18px] text-[11px] rounded-full flex justify-center items-center'>5</span>
                        </div>
                        <div className='relative'>
                            <FaFileInvoiceDollar className='text-[#7879F1] text-[25px]' />
                            <span className='bg-[#5ECFFF] absolute left-3 bottom-4 text-black w-[18px] h-[18px] text-[11px] rounded-full flex justify-center items-center'>2</span>
                        </div>
                        <div className='relative'>
                            <AiFillShop className='text-[#7879F1] text-[25px]' />
                            <span className='bg-red-400 absolute left-3 bottom-4 text-black w-[18px] h-[18px] text-[11px] rounded-full flex justify-center items-center'>!</span>
                        </div>
                    </div>

                    <div className="rounded-[45px] flex h-[48px] w-[145px]  mr-[50] bg-[#211A75] justify-center gap-x-2 items-center  py-3 text-sm  placeholder-gray-600 text-gray-900">
                        <img src="united-states 1.png" alt="logo" />
                        <span className='text-white font-bold'>ENGLISH</span>
                        <AiFillCaretDown className='text-[#6418C3]' />
                    </div>
                </>
                }

                <div className='flex space-x-3 items-center '>
                    <div className='h-11 w-[2.3px] bg-[#1E1C3A]'></div>
                    <div className="rounded-[45px] space-x-3 items-center 
                                flex   text-sm  placeholder-gray-600 text-gray-900" >
                        <img className='w-[42px] h-[42px]' src="profilePicture.png" alt="logo" />
                        <div className='flex flex-col w-full space-y-1'>
                            <span className='text-white w-full text-bold text-[15px]'>
                                Instructor Day
                            </span>
                            <span className='text-[#7879F1] text-[13px]'>
                                Super Admin
                            </span>
                        </div>
                        <AiFillCaretDown className='text-[#6418C3] text-[34px]' />
                    </div>

                </div>
            </div>

        </div>
       
    );
}

export default Navbar;