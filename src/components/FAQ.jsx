import React from 'react'
import Accordion from './Accordion'

const FAQ = () => {
    return (
        <div id='faq' className='mt-4 max-w-[800px] mx-auto'>
            <div className='bg-[var(--primary-dark)] rounded-lg mx-4 p-4'>
                <h1 className='text-white font-bold p-2 flex justify-center'>Frequently Asked Questions</h1>
                <Accordion 
                    question='Do I need to have game development experience?' 
                    answer='No you do not! We offer a learning environment for all regardless of skill level and familiarity.' 
                />
                <Accordion 
                    question='Can I get involved with a project mid-semester?' 
                    answer='Yes you can! We hold onboarding meetings regularly, find out when the next one is being held on discord.' 
                />
                <Accordion 
                    question='I have another question that is not answered here!' 
                    answer='Feel free to join our discord and ask your question there, someone will be happy to answer your question soon!' 
                />
            </div>
        </div>
    )
}

export default FAQ