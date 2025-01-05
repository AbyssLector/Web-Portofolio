import { WorkExperience } from '@/types'
import { NextPage } from 'next'

interface Props {
    data: WorkExperience
}

const WorkCard: NextPage<Props> = ({ data }) => {
    return <div className='group flex relative gap-6 flex-col sm:flex-row hover:cursor-pointer rounded-xl py-3 px-4 hover:!opacity-100 group-hover/list:opacity-50 transform hover:scale-105 transition-all duration-200' >
        <div className='basis-1/3 '>
            <p className='text-slate-400 text-sm text-center md:text-start'>{data.start_month} - {data.end_month}</p>
        </div>
        <div className='basis-2/3 flex flex-col items-center md:items-start gap-2 text-center sm:text-left '>
           
            <p className='font-bold group-hover:text-blue-300 text-bitWhite '>{data.title}</p>
            {data.subtitle && (
                <p className='text-base text-bitWhite '>{data.subtitle}</p>
            )}
            <p className='text-slate-400 text-sm group-hover:text-bitWhite'>{data.description}</p>
            {data.tag && (
                <div className='flex gap-2 flex-wrap text-sm text-green-400 font-semibold' >{data.tag.split(',').map(i => (
                    <div key={i} className='px-4 rounded-full  bg-[#323443]'>{i}</div>
                ))}</div>
            )}
        </div>
    </div>
}

export default WorkCard