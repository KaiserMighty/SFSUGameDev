import React, {useState, useEffect} from 'react'
import {AiOutlineCompass, AiOutlineClockCircle} from 'react-icons/ai'
import {GiRetroController} from 'react-icons/gi'
import {BsChatSquareDots} from 'react-icons/bs'
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
        <div className='w-full min-h-[50px] flex justify-between items-center z-20 text-white bg-gray-700/80 sticky top-[46px]'>
            <ul className='hidden sm:flex px-4'>
                <li>
                    <a href='/'>Home</a>
                </li>
                <li>
                    <a href='#join'>Join</a>
                </li>
                <li>
                    <a href='#directions'>Directions</a>
                </li>
                <li>
                    <a href='#games'>Games</a>
                </li>
            </ul>
            <div className='flex justify-between'>
                <FaFacebookF className='mx-4' />
                <FaTwitter className='mx-4' />
                <FaGooglePlusG className='mx-4' />
                <FaInstagram className='mx-4' />
            </div>
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
                        <a href='#gallery'>Gallery</a>
                    </li>
                    <li className='text-2xl py-8'>
                        <a href='#deals'>Deals</a>
                    </li>
                    <li className='text-2xl py-8'>
                        <a href='#contact'>Contact</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default NavBar;