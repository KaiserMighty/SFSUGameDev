import React from 'react'
import Card from './Card'

const CardDeck = ({content}) => {
    return (
        <div className='flex flex-col sm:min-h-[calc(100vh-10rem)] min-h-[calc(100vh-16rem)]'>
            <div className='flex-grow'>
                <div className='grid grid-flow-row auto-rows-max grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-6 m-6'>
                    {content.map((innerArray, index) => (
                        <Card 
                            key={index}
                            image={innerArray[0]}
                            title={innerArray[1]}
                            lead={innerArray[2]}
                            link={innerArray[3]}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default CardDeck