import React from 'react'

const Card = ({image, title, lead, link}) => {
    return (
        <a className='shadow-2xl bg-white cursor-pointer rounded-lg scale-100 hover:scale-105 transition-transform duration-150 ease-in-out' href={link}>
            <img
                src={image}
                alt="image"
                className='w-full h-48 object-cover rounded-t-lg'
            />
            <div className='p-2'>
                <h4 className='font-bold text-lg'>{title}</h4>
                <p className='text-sm'>By {lead}</p>
            </div>
        </a>
    )
}

export default Card