import React from 'react'
import Project from './Project'

export const Feed = ({ handleClick }) => {
    const myProjects = [
        {
            id: 1,
            img: '/project/1.jpg',
            tag: 'Web Development, Internet of Things, Agriculture',
            title: 'KKN Abdi Masyarakat ITS',
            desc: 'Ciptakan Smart Agriculture Fishing untuk Masyarakat Dusun Kajar Berbasiskan sistem IoT (Internet of Things)',
            url: 'https://www.its.ac.id/news/2022/11/29/kkn-abmas-its-ciptakan-smart-agriculture-fishing-untuk-masyarakat-dusun-kajar/'
        },
        {
            id: 2,
            img: '/project/2.png',
            tag: 'Web Development, Project Manager, Comitee',
            title: 'Chief of Website Development ARA 4.0',
            desc: "Determine web framework, Develop both front-end and back-end, Handling staff divisions and jobs, and Manage the hosted server for ARA 4.0.",
            url: 'https://www.instagram.com/p/CkiC0bvpgF4/'
        },
        {
            id: 3,
            img: '/project/3.png',
            tag: 'Web Development, Staff, Comitee',
            title: 'Staff of Website Development ARA 2023',
            desc: "Assigned to handle back-end using codeigniter framework in ARA 2023.",
            url: 'https://www.instagram.com/p/CfD90TzJ8CI/'
        },
    ]

    return (
        <div className='mt-16 sm:mt-24' id='project' data-aos="fade-right">
            <p className='text-bitWhite text-2xl font-bold text-center sm:text-left lg:text-4xl'>
                My Projects and <br className='md:hidden' /> Accomplishments
            </p>
            <div className='mt-6 sm:mt-12 lg:w-[75%]'>
                {myProjects.map(data => {
                    return (
                        <Project data={data} handleClick={handleClick} />
                    )
                })}

            </div>
        </div>
    )
}
