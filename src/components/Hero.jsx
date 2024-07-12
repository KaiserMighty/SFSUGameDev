import React from 'react'

const Hero = () => {
    return (
        <div className='w-full h-[90vh]'>
            <img
                src="https://images.unsplash.com/photo-1720597000771-6c936f9ca0e2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="/"
                className='w-full h-full object-cover'
            />
            <div className='max-w-[1140px] m-auto'>
                <div className='absolute top-[40%] w-full md:-[50%] max-w-[600px] h-full flex flex-col text-white p-4'>
                    <h1 className='font-bold text-4xl'>Game Dev Club</h1>
                    <h2 className='text-4xl py-4 italic'>At SF State</h2>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo, atque voluptatibus mollitia quos quasi accusantium, blanditiis voluptates corrupti facere earum a, error vitae! Ratione obcaecati, blanditiis esse repellat inventore quo!
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Hero