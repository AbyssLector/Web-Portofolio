import { useState } from 'react';

function Navbar() {
    const [fragment, setFragment] = useState('');
    const [dropdown, setdropdown] = useState(false);
    const text_white = 'text-bitWhite'
    const handleFragmentChange = (frag:string) => {
        setFragment(frag)
        window.location.hash = fragment
    }
    return (
        <nav className='w-full h-[80px] font-poppins top-0'>
            <div className='py-4 px-2 mx-auto border-b-[0.5px] border-gray-500 flex items-center'>
                <div className='w-full flex justify-between sm:px-0 px-2'>
                    <div className='text-bitWhite text-2xl font-semibold'>Ihsanul{`'`}s Portofolio</div>
                    {/* Desktop */}
                    <div className='justify-between text-xl gap-8 items-end hidden sm:flex text-slate-400' >
                        <a href='#home' onClick={() => handleFragmentChange('home')} className={(fragment === 'home' ? text_white : '')}>Home</a>
                        <a href='#about' onClick={() => handleFragmentChange('about')} className={(fragment === 'about' ? text_white : '')}>About</a>
                        <a href='#project' onClick={() => handleFragmentChange('project')} className={(fragment === 'project' ? text_white : '')}>Experience</a>
                    </div>

                    {/* Mobile */}
                    <div className='sm:hidden flex justify-between'>
                        <div className='rounded-md bg-white px-[4px]'>
                            <img src='/menu.svg'
                                onClick={() => { setdropdown(prev => !prev) }} />
                            {dropdown && (<div className='absolute right-0 min-w-[210px] bg-white mt-3 p-5 rounded-lg mr-3 flex flex-col gap-2 items-end text-slate-500 animate-fadeIn'>
                                <a href='#home' onClick={() => handleFragmentChange('home')}>Home</a>
                                <a href='#project' onClick={() => handleFragmentChange('project')}>Project</a>
                                <a href='#repo' onClick={() => handleFragmentChange('repo')}>Repos</a>
                            </div>)}
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar