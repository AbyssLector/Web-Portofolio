import React, { useEffect, useState } from 'react'
import Snippet from './Snippet'

const Codes = ({ handleClick }) => {
    // const [repos, setrepos] = useState([]);
    const myRepos = [
        {
            id: 1,
            name: 'Website ara 4.0',
            url: 'https://github.com/IhsanulAfkar/website-ara-4.0',
            style: '',
            description: 'Repository untuk menyimpan koding event ARA 2023 oleh mahasiswa Teknologi Informasi ITS.',
            tech: 'PHP TailwindCSS Javascript',
        },
        {
            id: 2,
            name: 'WebsiteARA2022',
            url: 'https://github.com/IhsanulAfkar/WebsiteARA2022',
            style: '',
            description: 'Repository untuk menyimpan hasil pembuatan website event ARA 2022 yang diadakan oleh mahasiswa Teknologi Informasi ITS.',
            tech: 'PHP SCSS Javascript',
        },
        {
            id: 3,
            name: 'ARA 4.0 Front End CTF Website',
            url: 'https://github.com/IhsanulAfkar/ara-ctf',
            style: '',
            description: 'Repository front end event CTF ARA 4.0 from CTFd',
            tech: 'Python Javascript CSS',
        },
        {
            id: 4,
            name: 'E-Money Implementation',
            url: 'https://github.com/IhsanulAfkar/emoney-implementation',
            style: '',
            description: 'E-Money implementation using REST API with Express JS',
            tech: 'Node-JS',
        },
        {
            id: 5,
            name: 'Notetopia, learning CRUD with Next JS',
            url: 'https://github.com/IhsanulAfkar/notetopia',
            style: '',
            description: 'learning CRUD and google login for auth with Next JS',
            tech: 'Next-JS TailwindCSS',
        }
    ]
    useEffect(() => {
        // const fetchGithub = async () => {
        //     const response = await fetch(`https://api.github.com/users/IhsanulAfkar/repos`)
        //     const rawData = await response.json()
        //     if (response.ok) {
        //         const newArr = []
        //         rawData.forEach(e => {
        //             if (!e.private)
        //                 newArr.push({
        //                     'name': e.name,
        //                     'url': e.html_url,
        //                     'description': e.description,
        //                     'language': e.language,
        //                     'full_name': e.full_name
        //                 })
        //         });
        //         setrepos(newArr)
        //         // console.log(newArr)
        //     } else {
        //         console.log('Error!')
        //     }
        // }
        // fetchGithub()
    }, []);

    return (
        <div className='mt-16 sm:mt-24' id='repo' data-aos="fade-right">
            <p className='text-bitWhite text-2xl font-bold text-center sm:text-left lg:text-4xl'>
                My Github Projects
            </p>
            <div className='mt-6 sm:mt-12 flex flex-row gap-8 justify-center flex-wrap lg:w-[75%] w-full lg:mx-auto'>
                {myRepos.map(data => {
                    return <Snippet data={data} handleClick={handleClick} />
                })}
            </div>
        </div>
    )
}

export default Codes