import React from 'react'
import Card from './Card'

const CardDeck = () => {
    return (
        <div className='flex flex-col sm:min-h-[calc(100vh-10rem)] min-h-[calc(100vh-16rem)]'>
            <div className='flex-grow'>
                <div className='grid grid-flow-row auto-rows-max grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-6 m-6'>
                    <Card 
                        image='https://img.itch.zone/aW1nLzE2MTY0MjQ3LnBuZw==/315x250%23c/Yvf9hQ.png'
                        title='ReWired'
                        lead='Alvin-Tulud'
                        link='https://alvin-tulud.itch.io/rewired'
                    />
                    <Card 
                        image='https://www.russorizio.com/wp-content/uploads/2016/07/ef3-placeholder-image.jpg'
                        title='BUTCHERED'
                        lead='lindseytong'
                        link='https://lindseytong.itch.io/butchered'
                    />
                    <Card 
                        image='https://img.itch.zone/aW1nLzE0MTk0MjEwLnBuZw==/315x250%23c/dzUVAR.png'
                        title='PRJCTB'
                        lead='OrangesAndCrema'
                        link='https://orangesandcrema.itch.io/prjctb'
                    />
                </div>
            </div>
        </div>
    )
}

export default CardDeck