import React, {useState, useEffect} from 'react'
import {GiRetroController} from 'react-icons/gi'
import {
    FaFacebookF,
    FaTwitter,
    FaGooglePlusG,
    FaInstagram,
    FaBars,
} from 'react-icons/fa'

const NavBar = () => {
const [nav, setNav] = useState(false)

const handleNav = () => {
    setNav(!nav)
}

    return (
        <div className='w-full min-h-[50px] flex justify-between items-center px-4 py-2 z-20 text-white bg-[var(--primary-dark)] sticky top-0'>
            <div className='flex items-center'>
                <GiRetroController size={30} className='text-white mr-3' />
                <h1 className='text-xl font-bold text-white'>GAME DEV @ SFSU</h1>
            </div>
            <ul className='hidden sm:flex px-4'>
                <li className='py-0'>
                    <a href='/'>Home</a>
                </li>
                <li className='py-0'>
                    <a href='#join'>Join</a>
                </li>
                <li className='py-0'>
                    <a href='#faq'>FAQ</a>
                </li>
                <li className='py-0'>
                    <a href='#directions'>Directions</a>
                </li>
            </ul>
            {/* Hamburger Icon */}
            <div onClick={handleNav} className='sm:hidden z-20'>
                <FaBars size={20} className='mr-4 cursor-pointer' />
            </div>
            {/* Mobile Menu */}
            <div 
                onClick={handleNav}
                className={
                nav
                    ? 'overflow-y-hidden md:hidden ease-in duration-300 absolute text-gray-300 left-0 top-0 w-full h-screen bg-black/90 px-4 py-7 flex flex-col'
                    : 'absolute top-0 h-screen left-[-100%] ease-in duration-500'
                }
            >
                <ul className='h-full w-full text-center pt-12'>
                    <li className='text-2xl py-8'>
                        <a href='/'>Home</a>
                    </li>
                    <li className='text-2xl py-8'>
                        <a href='#join'>Join</a>
                    </li>
                    <li className='text-2xl py-8'>
                        <a href='#faq'>FAQ</a>
                    </li>
                    <li className='text-2xl py-8'>
                        <a href='#directions'>Directions</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default NavBar;