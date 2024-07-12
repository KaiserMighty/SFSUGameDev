import React from 'react'
import {AiOutlineCompass, AiOutlineClockCircle} from 'react-icons/ai'
import {GiRetroController} from 'react-icons/gi'

const TopBar = () => {
    return (
        <div className='flex justify-between items-center px-4 py-2 sticky top-0 bg-white z-30'>
            <div className='flex items-center'>
                <GiRetroController size={30} className='text-[var(--primary-dark)] mr-2' />
                <h1 className='text-xl font-bold text-gray-700'>GAME DEV @ SFSU</h1>
            </div>
            <div className='flex'>
                <div className='hidden md:flex items-center px-6'>
                    <AiOutlineClockCircle size={20} className='mr-2 text-[var(--primary-dark)]' />
                    <p className='text-sm text-gray-700'>6PM - Thursdays</p>
                </div>
                <div className='hidden md:flex items-center px-6'>
                    <AiOutlineCompass size={20} className='mr-2 text-[var(--primary-dark)]' />
                    <p className='text-sm text-gray-700'>CS Lab</p>
                </div>
            </div>
        </div>
    )
}

export default TopBar