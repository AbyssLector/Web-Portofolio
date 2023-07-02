import React from 'react'
import Project from './Project'

export const Feed = () => {
    const myProjects = [
        {
            id: 1,
            img: '/project/1.jpg',
            tag: 'Web Development, Internet of Things, Agriculture',
            title: 'KKN Abdi Masyarakat ITS',
            desc: 'Ciptakan Smart Agriculture Fishing untuk Masyarakat Dusun Kajar Berbasiskan sistem IoT (Internet of Things)',
            url: 'https://www.its.ac.id/news/2022/11/29/kkn-abmas-its-ciptakan-smart-agriculture-fishing-untuk-masyarakat-dusun-kajar/'

        },
    ]
    const handleClick = (url) => {
        window.open(url, '_blank');
    }
    return (
        <div className='mt-16 sm:mt-24' id='project' data-aos="fade-right">
            <p className='text-bitWhite text-2xl font-bold text-center sm:text-left lg:text-4xl'>
                My Projects
            </p>
            <div className='mt-6 lg:w-[75%]'>
                {/* project */}
                {myProjects.map(data => {
                    return (
                        <Project data={data} handleClick={handleClick} />
                    )
                })}

            </div>
        </div>
    )
}
