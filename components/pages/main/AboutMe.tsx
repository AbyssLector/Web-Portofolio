import { NextPage } from 'next'

const AboutMe: NextPage= ({ }) => {
    return <div  className='w-full max-w-2xl mx-auto'>
        <p id='about' className={'text-center font-bold text-bitWhite text-2xl'}>About Me</p>
        <p className='text-justify text-slate-300 mt-4 text-base sm:text-lg'>I'm a <b>Web Developer</b> graduated from <b>Information Technology</b> in <b>Institut Teknologi Sepuluh Nopember</b> university. Proficient in developing dynamic web app for both <b>Front-End</b> and <b>Back-End</b> using PHP and Javascript frameworks like <b>Laravel</b> and <b>Next JS</b>.</p>
        <p className='text-justify text-slate-300 mt-4 text-base sm:text-lg'>During college, i've experiences some <b>projects</b> and <b>internships</b> to sharpen my skills. Fortunately, after graduated, i was hired as professional in company where I interned in college, <b>Adma Digital Solusi</b>, as <b>Fullstack Web Developer</b>. Thanks to these experiences, i'm able to understand <b>professional-level website</b> built.</p>
        <p className='text-justify text-slate-300 mt-4 text-base sm:text-lg'>Back in high school, i joined programming extracurricular. In there, i was introduced in programming world and learn my first programming language, Pascal. At that point, my interest in programming sparks and make me decided what major should i take for college.</p>
        <p className='text-justify text-slate-300 mt-4 text-base sm:text-lg'>During my free time, i often played games (like most boys do) or playing piano.</p>
    </div>
}

export default AboutMe