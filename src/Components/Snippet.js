import React from 'react'

const Snippet = ({ data, handleClick }) => {
    return (
        <div data-aos="fade-up" className='rounded-lg bg-[#323443] w-full lg:w-[45%] p-5 hover:cursor-pointer' onClick={() => handleClick(data.url)}>
            <p className='text-bitWhite font-bold text-lg'>{data.name}</p>
            <p className='mt-4 text-slate-400'>{data.description ? data.description : "No description"}</p>
            <div className='flex items-center justify-between mt-8 '>
                <div className='text-bitWhite'>{data.language}</div>
            </div>
        </div>
    )
}

export default Snippet