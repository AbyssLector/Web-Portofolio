import React from 'react'

const Project = ({ data, handleClick }) => {

    return (
        <div className='flex gap-6 flex-col sm:flex-row mb-4' data-aos="fade-up">
            <div className='basis-1/2 rounded-md overflow-hidden hover:shadow-md hover:shadow-blue-400 hover:opacity-80 flex'>
                <img src={data.img} className='hover:cursor-pointer w-full h-auto rounded-md' onClick={() => handleClick(data.url)} />
            </div>
            <div className='basis-1/2 flex flex-col gap-4 text-center sm:text-left'>
                <p className='text-bitWhite ' >{data.tag}</p>
                <p className='text-2xl font-bold text-bitWhite hover:cursor-pointer' onClick={() => handleClick(data.url)}>{data.title}</p>
                <p className='text-slate-400'>{data.desc}</p>
            </div>
        </div>
    )
}

export default Project