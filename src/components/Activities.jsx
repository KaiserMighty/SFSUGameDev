import React from 'react'

const Activities = () => {
    return (
        <div className='max-w-[1140px] m-auto w-full md:flex mt-[-50px]'>
            <div className='relative p-4'>
                <h3 className='absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white text-2xl font-bold'>Workshops</h3>
                <img
                    src="https://i.imgur.com/gDX7i2G.jpeg"
                    alt="/"
                    className='w-full h-full object-cover relative border-4 border-white shadow-2xl'
                />
            </div>
            <div className='relative p-4'>
                <h3 className='absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white text-2xl font-bold'>Projects</h3>
                <img
                    src="https://i.imgur.com/HutBk3z.jpeg"
                    alt="/"
                    className='w-full h-full object-cover relative border-4 border-white shadow-2xl'
                />
            </div>
            <div className='relative p-4'>
                <h3 className='absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white text-2xl font-bold'>Game Jams</h3>
                <img
                    src="https://i.imgur.com/jdHbYcx.jpeg"
                    alt="/"
                    className='w-full h-full object-cover relative border-4 border-white shadow-2xl'
                />
            </div>
        </div>
    )
}

export default Activities