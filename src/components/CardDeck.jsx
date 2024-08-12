import React from 'react'
import Card from './Card'

const CardDeck = () => {
    return (
        <div className='flex flex-col sm:min-h-[calc(100vh-10rem)] min-h-[calc(100vh-16rem)]'>
            <div className='flex-grow'>
                <div className='grid grid-flow-row auto-rows-max grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-4 m-4'>
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
            </div>
        </div>
    )
}

export default CardDeck