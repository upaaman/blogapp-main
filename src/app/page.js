"use client";
import Herosection from '@/components/Herosection'
import KanbanBoard from '@/components/KanbanBoard'
import Navbar from '@/components/Navbar'
import Sidebar, { SidebarItem } from '@/components/Sidebar'
import { AiOutlineRight, AiOutlineDown, AiFillSetting, AiFillWechat, AiFillShop, AiOutlineDashboard } from "react-icons/ai"
import { FaFileInvoiceDollar } from "react-icons/fa"
import { BsGrid } from "react-icons/bs"
import { BiSolidContact } from "react-icons/bi"
import { SlCalender } from "react-icons/sl"
import { MdEmail } from "react-icons/md"
import { BarChart3 } from 'lucide-react'
import React, { useEffect, useState } from 'react'
const page = () => {

  const [sideBar, setSideBar] = useState(true);

  const handleResize = () => {
    if (window.innerWidth > 990) {
      setSideBar(true)
    } else {
      setSideBar(false)
    }
  }

  useEffect(() => {
    window.addEventListener("resize", handleResize)
  })
  return (
    <div className='overflow-hidden'>
      <div className='flex w-full bg-[#0D0B21]'>
        <Sidebar className="w-[25%]" >

          <SidebarItem icon={<BarChart3 size={22} />} text="Dashboard"  txtColor="gray"/>
          <SidebarItem icon={<MdEmail size={22} />} text="Email" icon2={<AiOutlineDown size={18}  txtColor="gray"/>}  txtColor="gray"/>
          <SidebarItem icon={<AiFillWechat size={22} />} text="Chat" />
          <SidebarItem icon={<BsGrid size={22} />} text="Kanban" icon2={<AiOutlineRight size={18}  />} txtColor="violet"/>
          <SidebarItem icon={<SlCalender size={22} />} text="Calender" />
          <SidebarItem icon={<BiSolidContact size={22} />} text="Contact" icon2={<AiOutlineRight size={18} />} txtColor="gray"/>
          <SidebarItem icon={<AiFillShop size={22} />} text="Shop" />
          <SidebarItem icon={<FaFileInvoiceDollar size={22} />} text="Invoices" icon2={<AiOutlineRight size={18} />} txtColor="violet"/>
          <SidebarItem icon={<AiFillSetting size={22} />} text="Settings" txtColor="violet" />
 
        </Sidebar>
        <div className={`w-[100%] ${sideBar ? `ml-[0px]` : `ml-0`} `}>
          <Navbar />
          <Herosection />
          <KanbanBoard />
        </div>
      </div>


    </div>
  )
}

export default page