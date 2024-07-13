import React from 'react'

const Activities = () => {
    return (
        <div className='max-w-[1140px] m-auto w-full md:flex mt-[-50px]'>
            <div className='relative p-4'>
                <h3 className='absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white text-2xl font-bold'>Workshops</h3>
                <img
                    src="https://images.unsplash.com/photo-1720659201108-4efe526b289c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="/"
                    className='w-full h-full object-cover relative border-4 border-white shadow-2xl'
                />
            </div>
            <div className='relative p-4'>
                <h3 className='absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white text-2xl font-bold'>Projects</h3>
                <img
                    src="https://images.unsplash.com/photo-1719931626206-d3874333fd00?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="/"
                    className='w-full h-full object-cover relative border-4 border-white shadow-2xl'
                />
            </div>
            <div className='relative p-4'>
                <h3 className='absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white text-2xl font-bold'>Game Jams</h3>
                <img
                    src="https://images.unsplash.com/photo-1719742882558-c7c8c076b4fb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="/"
                    className='w-full h-full object-cover relative border-4 border-white shadow-2xl'
                />
            </div>
        </div>
    )
}

export default Activities