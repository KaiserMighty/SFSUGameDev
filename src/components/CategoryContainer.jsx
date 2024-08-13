import React from 'react'

const CategoryContainer = ({children}) => {
    return (
        <div className='flex flex-col sm:min-h-[calc(100vh-10rem)] min-h-[calc(100vh-16rem)]'>
            <div className='flex-grow'>
                {children}
            </div>
        </div>
    )
}

export default CategoryContainer