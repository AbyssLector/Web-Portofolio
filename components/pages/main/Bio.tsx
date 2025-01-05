import React, { MouseEventHandler, useState } from 'react'
import { useTypewriter, Cursor, Typewriter } from 'react-simple-typewriter'
import {  links, mainTypeWrite, typeWrite } from '@/lib/static'
import RunningItem from './RunningItem'
import TextTitle from '@/components/utils/TextTitle'

export const Bio = () => {
    const [typed, setTyped] = useState(false);
    const [typed2, setTyped2] = useState(false);

    const clickHandler: MouseEventHandler<HTMLImageElement> = (e) => {
        if (typeof window !== "undefined") {
            const newTab = window.open(links[e.currentTarget.id], "_blank");

            if (newTab) {
                newTab.focus();
            } else {
                console.error("Failed to open the new tab. It may have been blocked by the browser.");
            }
        }
    }
    const [welcomeText] = useTypewriter({
        words: [mainTypeWrite],
        loop: 1,
        typeSpeed: 75,
        delaySpeed: 1000,
        onLoopDone: () => setTimeout(() => {
            setTyped(true)
            setTyped2(true)
        }, 1500)
    })

    return (
        <div className='mt-6 sm:mt-12' id='home'>
            <div className='text-transparent text-3xl sm:text-4xl font-bold bg-clip-text bg-gradient-to-br from-green-400 to-blue-400 text-center sm:text-left'>
                {welcomeText}
                {typed ?
                    <></>
                    :
                    <Cursor cursorStyle='_' cursorColor='#3BF6BE' />
                }
                <br />
                {typed2 ? (<>
                    <Typewriter words={[typeWrite]} />
                    <Cursor cursorStyle='_' cursorColor='#3BF6BE' />
                </>) : <></>}
            </div>
            <div className='mt-8 sm:mt-16 flex flex-col md:flex-row gap-8'>
                <div className='flex flex-col sm:flex-row gap-8 basis-2/3'>
                    <div className='flex-none mx-auto sm:mx-0 z-10'>
                        <div className='max-w-[150px] rounded-full bg-gradient-to-br from-green-400 to-blue-400 p-1 '>
                            <img src='/foto.png' className='rounded-full ' />
                        </div>
                    </div>
                    <div className='flex flex-col gap-6 '>
                        <TextTitle>Biography</TextTitle>
                        <div className='text-slate-400' > My name is <span className='text-bitWhite font-bold' > Muhammad Ihsanul Afkar </span>. Graduated from Information Technology ITS University. Excited in both
                            <span className='text-transparent bg-green-400 bg-clip-text font-bold'> Front-end </span> and
                            <span className='text-transparent bg-blue-400 bg-clip-text font-bold'> Back-end </span>web developer. Try to keep updated to technology in website development</div >
                    </div>
                </div>
                <div className='flex-none basis-1/3 flex flex-col gap-6'>
                    <TextTitle>Let&apos;s Connect</TextTitle>
                    <div className='flex justify-center sm:justify-start gap-8'>
                        <div className='hover:cursor-pointer'><img id='ig' src='/icons/ig.png'
                            onClick={clickHandler}
                        /></div>
                        <div className='hover:cursor-pointer'><img id='ln' src='/icons/ln.png'
                            onClick={clickHandler} /></div>
                        <div className='hover:cursor-pointer'><img id='email' src='/icons/email.png'
                            onClick={clickHandler} /></div>
                        <div className='hover:cursor-pointer'><img id='github' src='/icons/github.png'
                            onClick={clickHandler} /></div>
                    </div>
                </div>
            </div>
            <div className='mt-12'>
                <p className={'text-center font-bold text-bitWhite text-xl'}>Tech Stacks</p>
                <RunningItem />
            </div>

           
        </div>
    )
}
 {/* <div className='mt-16 sm:mt-28 flex flex-col md:flex-row gap-8'>
                <div className='basis-[38%] flex flex-col gap-8'>
                    <p className='text-bitWhite font-bold text-xl text-center md:text-left'>
                        What i do
                    </p>
                    <ul className='text-slate-400 font-semibold list-image-checkmark ml-6'>
                        {whatido.map((i, idx) => (
                            <li className={idx != whatido.length - 1 ? 'pb-2' : ''}>Build and maintain websites</li>
                        ))}
                        <li className='pb-2'>Figure what language/framework will be used</li>
                        <li>Keep looking for best practices when develop</li>
                    </ul>
                </div>
                <div className='flex justify-center gap-8 basis-[62%] mt-6 md:mt-0'>
                    <div className='bg-[#323443] rounded-xl p-4 relative basis-1/2 '>
                        <div className='absolute left-1/2 top-[-35px] -translate-x-1/2 rounded-full bg-gradient-to-br from-green-400 to-blue-400 p-[2px]'>
                            <div className='p-3 rounded-full bg-white'>
                                <Lottie animationData={codeAnimation} style={lottieStyle} />

                            </div>
                        </div>
                        <div className='mt-10'>
                            <p className='text-bitWhite font-bold text-xl text-center'>Front End</p>
                            <div className='mt-2 text-slate-400 text-center'>
                                <p>Tailwind CSS,
                                    Bootstrap, Materialize,
                                    CSS Preprocessor,
                                    React JS,
                                    DOM JS</p>
                            </div>
                        </div>
                    </div>
                    <div className='bg-[#323443] rounded-xl p-4 relative basis-1/2'>
                        <div className='absolute left-1/2 top-[-35px] -translate-x-1/2 rounded-full bg-gradient-to-br from-green-400 to-blue-400 p-[2px]'>
                            <div className='p-3 rounded-full bg-white'>
                                <Lottie animationData={gearAnimation} style={lottieStyle} />

                            </div>
                        </div>
                        <div className='mt-10'>
                            <p className='text-bitWhite font-bold text-xl text-center'>Back End</p>
                            <div className='mt-2 text-slate-400 text-center'>
                                <p>Next JS, Express, Laravel, Codeigniter, Flask, MySQL, PostgreSQL,
                                    MongoDB</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}