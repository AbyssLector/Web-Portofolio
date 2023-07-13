import React, { useState } from 'react'
import myCv from '../asset/CV ihsanul.pdf'

function Cv({ handleClick }) {
    return (
        <>
            <div className='hidden md:block fixed w-[75px] h-[75px] bg-[#FAFAF9] bottom-[5%] right-[5%] rounded-full hover:cursor-pointer'>
                <div className='flex-none mx-auto sm:mx-0 z-10' onClick={() => handleClick(myCv)}>
                    <div className='p-2'>
                        <img src='/icons/cv.png' className='rounded-full' />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cv