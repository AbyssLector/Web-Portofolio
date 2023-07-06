import React, { useEffect, useState } from 'react'
import Snippet from './Snippet'

const Codes = () => {
    const [repos, setrepos] = useState([]);
    const myRepos = [
        {
            'name': 'lorem',
            'url': '',
            'description': 'e.description',
            'language': ' e.language',
            'full_name': 'e.full_name'
        }
    ]
    useEffect(() => {
        const fetchGithub = async () => {
            const response = await fetch(`https://api.github.com/users/IhsanulAfkar/repos`)
            const rawData = await response.json()
            if (response.ok) {
                const newArr = []

                rawData.forEach(e => {
                    if (!e.private)
                        newArr.push({
                            'name': e.name,
                            'url': e.html_url,
                            'description': e.description,
                            'language': e.language,
                            'full_name': e.full_name
                        })
                });
                setrepos(newArr)
                // console.log(newArr)
            } else {
                console.log('Error!')
            }
        }
        fetchGithub()
    }, []);
    const handleClick = (url) => {
        window.open(url, '_blank');
    }
    return (
        <div className='mt-16 sm:mt-24' id='github' data-aos="fade-right">
            <p className='text-bitWhite text-2xl font-bold text-center sm:text-left lg:text-4xl'>
                My Github Projects
            </p>
            <div className='mt-6 sm:mt-12 flex flex-row gap-8 justify-center flex-wrap lg:w-[75%] w-full lg:mx-auto'>
                {repos.map(data => {
                    return <Snippet data={data} handleClick={handleClick} />
                })}
            </div>
        </div>
    )
}

export default Codes