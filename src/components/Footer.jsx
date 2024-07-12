import React from 'react'
import {GiRetroController} from 'react-icons/gi'

const Footer = () => {
    return (
        <div>
            <div className='flex items-center m-auto justify-center p-4'>
                <GiRetroController size={30} className='text-white mr-3' />
                <h1 className='text-xl font-bold text-white'>GAME DEV @ SFSU</h1>
            </div>
        </div>
    )
}

export default Footer