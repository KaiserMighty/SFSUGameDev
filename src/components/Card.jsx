import React from 'react'

const Card = () => {
    return (
        <a className='shadow-xl bg-white cursor-pointer'>
            <img 
                src="https://images.unsplash.com/photo-1720597000771-6c936f9ca0e2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                alt="" 
                className='aspect-square' 
            />
            <div className='p-2'>
                <h4 className='text-center'>Title</h4>
                <p className='text-center'>Test</p>
            </div>
        </a>
    )
}

export default Card