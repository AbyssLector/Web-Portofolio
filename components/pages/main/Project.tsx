import { Project as ProjectType } from '@/types'
import { NextPage } from 'next'
import React from 'react'
interface ProjectPage {
    data: ProjectType,
    handleClick: (url: string) => void
}
const Project: NextPage<ProjectPage> = ({ data, handleClick }) => {
    return (
        <div className='group flex relative gap-6 flex-col sm:flex-row hover:cursor-pointer rounded-xl py-3 px-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50 transform hover:scale-105 transition-all duration-200' onClick={() => handleClick(data.url)} >
            <div className='basis-1/3 rounded-md overflow-hidden'>
                <img src={data.img} alt="" className='mx-auto rounded-md h-40 object-contain' />
            </div>
            <div className='basis-2/3 flex flex-col gap-2 text-center sm:text-left '>
                <div className='flex gap-2 flex-wrap text-sm text-green-400 font-semibold' >{data.tag.split(',').map(i => (
                    <div key={i} className='px-4 rounded-full bg-[#323443]'>{i}</div>
                ))}</div>
                <p className='text font-bold group-hover:text-blue-300 text-bitWhite hover:cursor-pointer'>{data.title}</p>
                <p className='text-slate-400 text-sm group-hover:text-bitWhite'>{data.desc}</p>
            </div>
        </div>
    )
}
export default Project