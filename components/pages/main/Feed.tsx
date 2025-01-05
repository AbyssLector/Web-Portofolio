
import Project from './Project'
import { NextPage } from 'next'
import { myProjects, workExperiences } from '@/lib/static'
import WorkCard from './WorkCard'
interface Feed {
    handleClick: (url: string) => void
}
export const Feed: NextPage<Feed> = ({ handleClick }) => {

    return (
        <div className='flex flex-col md:flex-row justify-stretch gap-4 h-auto md:h-[80vh]' id='project' data-aos="fade-right">
            <div className='basis-1 md:basis-1/3 flex flex-col justify-center items-center gap-6'>
                <p className='text-bitWhite text-2xl font-bold text-center sm:text-left lg:text-4xl'>
                    My Experiences
                </p>
                {/* <div>
                    <ul className='text-slate-400 text-xl space-y-6 mt-8 font-semibold'>
                        <li className='scale-110 text-white'>Work</li>
                        <li>Projects</li>
                    </ul>
                </div> */}
            </div>
            <div className='basis-1 md:basis-2/3 min-h-max md:min-h-0 md:max-h-full overflow-auto p-2 flex flex-col gap-1 group/list' id='wrapper'>
                <p className='my-12 font-bold text-center context'>Works</p>
                {workExperiences.map(data => (
                    <WorkCard key={data.title} data={data} />
                ))}
                <p className='my-12 font-bold text-center context'>Projects</p>
                {myProjects.reverse().map(data => {
                    return (
                        <Project key={data.id} data={data} handleClick={handleClick} />
                    )
                })}
            </div>
        </div>
    )
}
