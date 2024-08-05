import React from 'react'

const Location = () => {
    return (
        <div id='faq' className='mt-4 max-w-[800px] mx-4 md:mx-auto'>
            <img src="https://imgur.com/WHcndHR.png" className='rounded-t-lg' />
            <div className='bg-[var(--primary-dark)] rounded-b-lg p-4'>
                <h2 className='text-white text-center pb-4 pt-2'>Join Us at the CS Lab on Thursdays at 6 PM</h2>
                <p className='text-white pb-2'>
                    Enter the <b>Creative Arts</b> Building. The entrances marked green are the most convenient.
                </p>
                <p className='text-white pb-2'>
                    Engage your pathfinding algorithm to find you way to the <b>CS Lab</b>, following the hallways marked with a white line.
                </p>
                <p className='text-white'>
                    The green line is a <b>stage corridor</b>, marked with a rainbow painted on the floor.
                </p>
            </div>
        </div>
    )
}

export default Location