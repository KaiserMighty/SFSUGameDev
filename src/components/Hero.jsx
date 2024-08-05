import React from 'react'
import {FaDiscord, FaGamepad} from 'react-icons/fa'

const Hero = () => {
    return (
        <div className='w-full h-[90vh]'>
            <img
                src="https://images.unsplash.com/photo-1720597000771-6c936f9ca0e2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="/"
                className='w-full h-full object-cover'
            />
            <div className='max-w-[1140px] m-auto'>
                <div className='absolute top-[40%] w-full md:-[50%] max-w-[600px] h-100% flex flex-col text-white p-4 bg-black/30 rounded-lg'>
                    <h1 className='font-bold text-4xl p-2'>Game Dev Club</h1>
                    <h2 className='text-4xl py-4 italic p-2 ml-2'>At SF State</h2>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo, atque voluptatibus mollitia quos quasi accusantium, blanditiis voluptates corrupti facere earum a, error vitae! Ratione obcaecati, blanditiis esse repellat inventore quo!
                    </p>
                    <div className='flex justify-center'>
                        <div className='py-4 px-2'>
                            <a
                                href="https://discord.gg/Zn7BFAvqrx"
                                target="_blank"
                                rel="noreferrer"
                                className='px-4 py-2 bg-[var(--primary-discord)] flex items-center font-bold rounded border-0 border-b-4 border-[var(--secondary-discord)] hover:border-[var(--discord-hover)]'
                            >
                                <FaDiscord size={30} className='mr-3' />
                                Discord
                            </a>
                        </div>
                        <div className='py-4 px-2'>
                            <a
                                href="https://game-dev-club-sf-state.itch.io/"
                                target="_blank"
                                rel="noreferrer"
                                className='px-4 py-2 bg-[var(--primary-itch)] flex items-center font-bold rounded border-0 border-b-4 border-[var(--secondary-itch)] hover:border-[var(--itch-hover)]'
                            >
                            <FaGamepad size={30} className='mr-3' />
                                Games
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero