'use client';
import { createContext, useContext, useEffect, useState } from "react"
import { GiHamburgerMenu } from "react-icons/gi"
import "./sidebar.css"
import { AiOutlineDoubleLeft, AiFillBell, AiOutlineRight } from "react-icons/ai"
import { AiOutlineDown, AiFillSetting, AiFillWechat, AiFillShop, AiOutlineDashboard } from "react-icons/ai"
import { FaFileInvoiceDollar } from "react-icons/fa"
import { BsGrid } from "react-icons/bs"
import { BiSolidContact } from "react-icons/bi"
import { SlCalender } from "react-icons/sl"
import { MdEmail } from "react-icons/md"
import { BarChart3 } from 'lucide-react'
const SidebarContext = createContext()

export default function Sidebar({ children }) {

    const [expanded, setExpanded] = useState(true)


    const handleResize = () => {
        if (window.innerWidth > 990) {
            setExpanded(true)
        } else {
            setExpanded(false)
        }
    }

    useEffect(() => {
        window.addEventListener("resize", handleResize)
    })

    function closeNav() {
        document.getElementById("mySidenav").style.width = "0";
    }

    return (
        <div className="">

            <div id="mySidenav" className="sidenav text-white overflow-x-hidden fixed z-10  ">
                <div href="javascript:void(0)" className="closebtn flex mt-5 w-full items-center justify-between pl-10" onClick={() => closeNav()}>
                    <span className="text-[22px]">weframetech</span>
                    <AiOutlineDoubleLeft />
                </div>
                <div className="flex flex-col space-y-5 items-center">
                    <div class=" mt-5 w-64 relative ml-[45px]">
                        <span class="absolute inset-y-0 left-0 flex items-center pl-2 text-gray-500">
                            <svg width="25" height="25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path stroke="currentColor" stroke-width="2" stroke-linecap="round" d="M11.508 19.479a8 8 0 100-16 8 8 0 000 16zM21.508 21.478l-4.35-4.35" />
                            </svg>
                        </span>
                        <input placeholder="Search" className="rounded-[45px] h-[48px] w-[210px] bg-[#211A75] pl-12 pr-4 py-3 text-sm  placeholder-gray-600 text-gray-900" />
                    </div>
                    <div className='flex items-center space-x-5'>
                        <div className='relative'>
                            <AiFillBell className='text-[#7879F1] text-[30px]' />
                            <span className='bg-[#5ECFFF] absolute left-4 bottom-4 text-black w-[18px] h-[18px] text-[11px] rounded-full flex justify-center items-center'>16</span>
                        </div>
                        <div className='relative'>
                            <SlCalender className='text-[#7879F1] text-[30px]' />
                            <span className='bg-[#5ECFFF] absolute left-5 bottom-4 text-black w-[18px] h-[18px] text-[11px] rounded-full flex justify-center items-center'>5</span>
                        </div>
                        <div className='relative'>
                            <FaFileInvoiceDollar className='text-[#7879F1] text-[30px]' />
                            <span className='bg-[#5ECFFF] absolute left-5 bottom-4 text-black w-[18px] h-[18px] text-[11px] rounded-full flex justify-center items-center'>2</span>
                        </div>
                        <div className='relative'>
                            <AiFillShop className='text-[#7879F1] text-[30px]' />
                            <span className='bg-red-600 absolute left-5 bottom-4 text-black w-[18px] h-[18px] text-[11px] rounded-full flex justify-center items-center'>!</span>
                        </div>
                    </div>
                    <div>
                        <div className="flex space-y-2 flex-col">
                            <div className="flex items-center  my-2 py-[3px]
                                    font-medium rounded-md cursor-pointer
                                    transition-colors group px-[20px] w-[240px] text-[20px] space-x-3">
                                <span className="text-[#464366]"> <BarChart3 /> </span>
                                <div className="flex justify-between items-center w-[320px] font-light text-[18px] text-[#464366]">
                                    <span>Dashboard</span>

                                </div>

                            </div>

                            <div className="flex items-center  my-2 py-[3px]
                                    font-medium rounded-md cursor-pointer
                                    transition-colors group px-[20px] w-[240px] text-[20px] space-x-3">
                                <span className="text-[#464366]"> <MdEmail /> </span>
                                <div className="flex justify-between items-center w-[320px] font-light text-[18px] text-[#464366]">
                                    <span>Email</span>
                                    <span className="text-[#7879F1]"><AiOutlineDown /></span>

                                </div>

                            </div>

                            <div className="flex items-center  my-2 py-[3px]
                                    font-medium rounded-md cursor-pointer
                                    transition-colors group px-[20px] w-[240px] text-[20px] space-x-3">
                                <span className="text-[#7879F1]"> <AiFillWechat /> </span>
                                <div className="flex justify-between items-center w-[320px] font-light text-[18px] text-[#7879F1]">
                                    <span>Chat</span>

                                </div>

                            </div>

                            <div className="flex items-center  my-2 py-[3px]
                                    font-medium rounded-md cursor-pointer
                                    transition-colors group px-[20px] w-[240px] text-[20px] space-x-3">
                                <span className="text-[#6418C3]"> <BsGrid /> </span>
                                <div className="flex justify-between items-center w-[320px] font-light text-[18px] text-[#6418C3]">
                                    <span>Kanban</span>
                                    <span className="text-[#7879F1]"><AiOutlineRight /></span>

                                </div>

                            </div>

                            <div className="flex items-center  my-2 py-[3px]
                                    font-medium rounded-md cursor-pointer
                                    transition-colors group px-[20px] w-[240px] text-[20px] space-x-3">
                                <span className="text-[#7879F1]"> <SlCalender /> </span>
                                <div className="flex justify-between items-center w-[320px] font-light text-[18px] text-[#7879F1]">
                                    <span>Calender</span>

                                </div>

                            </div>

                            <div className="flex items-center  my-2 py-[3px]
                                    font-medium rounded-md cursor-pointer
                                    transition-colors group px-[20px] w-[240px] text-[20px] space-x-3">
                                <span className="text-[#7879F1]"> <BiSolidContact /> </span>
                                <div className="flex justify-between items-center w-[320px] font-light text-[18px] text-[#7879F1]">
                                    <span>Contact</span>

                                </div>

                            </div>

                            <div className="flex items-center  my-2 py-[3px]
                                    font-medium rounded-md cursor-pointer
                                    transition-colors group px-[20px] w-[240px] text-[20px] space-x-3">
                                <span className="text-[#6418C3]"> <FaFileInvoiceDollar /> </span>
                                <div className="flex justify-between items-center w-[320px] font-light text-[18px] text-[#6418C3]">
                                    <span>Invoices</span>
                                    <span className="text-[#7879F1]"><AiOutlineRight /></span>

                                </div>

                            </div>

                            <div className="flex items-center  my-2 py-[3px]
                                    font-medium rounded-md cursor-pointer
                                    transition-colors group px-[20px] w-[240px] text-[20px] space-x-3">
                                <span className="text-[#6418C3]"> <AiFillSetting /> </span>
                                <div className="flex justify-between items-center w-[320px] font-light text-[18px] text-[#6418C3]">
                                    <span>Settings</span>


                                </div>

                            </div>

                        </div>
                    </div>
                    <div className="w-[225px] h-[203px]  flex">

                        <div
                            className="
        flex relative   bg-blue-500  flex-col  text-left justify-start w-[170px] space-y-1 text-[23px] rounded-[32px] -mt-[12px]
        overflow-hidden transition-all   h-[180px]  py-[20px] px-[20px]" 
        
                        >

                            <img src="image1.png" alt="image" width={25} height={22} />

                            <div className="text-white font-bold leading-8 text-[15px]">
                                Increase Your Work with Kanban
                            </div>
                            <img src="Vector (1).png" alt="image" width={24} />
                            <img src="Ellipse 5.png" className="absolute right-0 -bottom-10" alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <aside className={` text-[18px] ${expanded ? `w-[250px]` : `w-[0px]`} h-[100%]`}>
                <nav className={`h-full  flex flex-col space-y-5  overflow-x-hidden fixed z-10  bg-[#15132B] ${expanded ? `w-[250px]` : `w-[0px]`}`}>
                    <div className="p-4 pb-2 flex items-center justify-center  mt-2 -ml-[60px]">
                        <div

                            className={`text-white text-[20px] font-bold ml-[55px] overflow-hidden transition-all ${expanded ? "w-34 " : "w-0 "
                                }`}
                        >
                            webframetech
                        </div>
                        {expanded &&

                            <GiHamburgerMenu className="p-1 left-[200px] absolute rounded-lg text-[30px] text-[#7879F1] " />
                        }
                    </div>
                    {expanded &&
                        <>                        <h3 class="text-sm ml-[35px] font-semibold text-white  ">MAIN MENU</h3>
                            <SidebarContext.Provider value={{ expanded }}>
                                <ul className="flex-1 px-3  ">{children}</ul>
                            </SidebarContext.Provider>
                        </>
                    }




                    <div className="w-[225px] h-[203px]  flex">

                        <div
                            className={`
                        flex relative   bg-blue-500  flex-col  text-left justify-start  space-y-1 text-[23px] rounded-[32px] -mt-[10px]
            overflow-hidden transition-all ${expanded ? "  h-[160px] ml-[50px] py-[20px] px-[15px]" : "w-0"}
                `}
                        >

                            <img src="image1.png" alt="image" width={25} height={22} />

                            <div className="text-white font-bold leading-8 text-[15px]">
                                Increase Your Work with Kanban
                            </div>
                            <img src="Vector (1).png" alt="image" width={24} />
                            <img src="Ellipse 5.png" className="absolute right-0 -bottom-10" alt="" />
                        </div>
                    </div>
                </nav>
            </aside>
        </div>
    )
}


export function SidebarItem({ icon, text, active, icon2, txtColor }) {
    const { expanded } = useContext(SidebarContext)

    const colorVariants = {
        gray: 'text-gray-700',
        violet: 'text-violet-700',
    }

    return (
        <li
            className={` 
        relative flex items-center  my-2 py-[3px]
        font-medium rounded-md cursor-pointer
        transition-colors group px-[20px] w-[240px] text-[25px]
        ${active
                    ? "bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800"
                    : "hover:bg-indigo-50 text-[#7879F1]"
                }
    `}
        >
            <span className={`${colorVariants[txtColor]} `}> {icon}</span>
            <span
                className={`overflow-hidden flex items-center justify-between font-light text-[18px] transition-all ${expanded ? "w-52 ml-3" : "w-0"
                    }`}
            >
                <span className={`${colorVariants[txtColor]} `}> {text}</span>
                <span className="">
                    {icon2}
                </span>
            </span>


            {!expanded && (
                <div
                    className={`
        absolute left-full rounded-md px-2 py-1 ml-6
        text-[20px]
        bg-indigo-100 text-indigo-800 text-sm
        invisible opacity-20 -translate-x-3 transition-all
        group-hover:visible group-hover:opacity-100 group-hover:translate-x-0
    `}
                >
                    {text}
                </div>
            )}
        </li>
    )
}