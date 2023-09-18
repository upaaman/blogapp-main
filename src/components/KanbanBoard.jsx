import React from 'react'
import Card from './Card'
import { AiOutlinePlus } from "react-icons/ai"
import EmptyCard from './EmptyCard'

const KanbanBoard = () => {
    return (
        <div className='  w-[1190px] overflow-hidden mt-[40px]'>
            <div className=' flex px-7 space-x-9 overflow-auto w-full'>
                <div className='flex flex-col space-y-5'>
                    <div className='flex text-white justify-between px-5 items-center'>
                        <span className='text-[18px] font-semibold'>To-Do List(24)</span>
                        <div className='bg-[#6418C3] rounded-[11px] w-[37px] h-[37px] flex items-center justify-center 
                    font-bold text-[25px]'><AiOutlinePlus /></div>
                    </div>
                    <Card
                        title="Instructor Meeting"
                        description="Plan holiday demonstration program. Create outline."
                        color="yellow"
                        percentage="50"
                    />
                    <Card
                        title="Important"
                        description="Create sign up sheet for holiday student/parent."
                        color="pink"
                        percentage="50"
                    />
                    <Card
                        title="Important"
                        description="Create sign up sheet for holiday student/parent."
                        color="red"
                        percentage="50"
                    />
                </div>


                <div className='flex flex-col space-y-5'>
                    <div className='flex text-white justify-between px-5 items-center'>
                        <span className='text-[18px] font-semibold'>In Progress(2)</span>
                        <div className='bg-[#211A75] rounded-[11px] w-[37px] h-[37px] flex items-center justify-center 
                        text-[#6418C3] 
                     text-[25px]'><AiOutlinePlus /></div>
                    </div>
                    <Card
                        title="Important"
                        description="Create sign up sheet for holiday student/parent."
                        color="red"
                        percentage="50"
                    />
                </div>



                <div className='flex flex-col space-y-5'>
                    <div className='flex text-white justify-between px-5 items-center'>
                        <span className='text-[18px] font-semibold'>Done</span>
                        <div className='bg-[#211A75] rounded-[11px] w-[37px] h-[37px] flex items-center justify-center 
                        text-[#6418C3] 
                     text-[25px]'><AiOutlinePlus /></div>
                    </div>
                    <Card
                        title="Important"
                        description="Create sign up sheet for holiday student/parent."
                        color="blue"
                        percentage="50"
                    />
                    <Card
                        title="Important"
                        description="Create sign up sheet for holiday student/parent."
                        color="green"
                        percentage="50"
                    />
                    <Card
                        title="Important"
                        description="Create sign up sheet for holiday student/parent."
                        color="pink"
                        percentage="50"
                    />
                </div>



                <div className='flex flex-col space-y-5'>
                    <div className='flex text-white justify-between px-5 items-center'>
                        <span className='text-[18px] font-semibold'>Revised(0)</span>
                        <div className='bg-[#211A75] rounded-[11px] w-[37px] h-[37px] flex items-center justify-center 
                        text-[#6418C3] 
                     text-[25px]'><AiOutlinePlus /></div>
                    </div>
                    <EmptyCard/>
                </div>




                <div className='flex flex-col space-y-5'>
                    <div className='flex text-white justify-between px-5 items-center'>
                        <span className='text-[18px] font-semibold'>Contant(2)</span>
                        <div className='bg-[#211A75] rounded-[11px] w-[37px] h-[37px] flex items-center justify-center 
                        text-[#6418C3] 
                     text-[25px]'><AiOutlinePlus /></div>
                    </div>
                    <Card
                        title="Important"
                        description="Create sign up sheet for holiday student/parent."
                        color="green"
                        percentage="50"
                    />
                    <Card
                        title="Important"
                        description="Create sign up sheet for holiday student/parent."
                        color="pink"
                        percentage="50"
                    />
                    <Card
                        title="Important"
                        description="Create sign up sheet for holiday student/parent."
                        color="green"
                        percentage="50"
                    />
                </div>

            </div>
        </div>
    )
}

export default KanbanBoard