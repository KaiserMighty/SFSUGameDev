import React from 'react'
import Accordion from './Accordion'

const FAQ = () => {
    return (
        <div id='faq' className='mt-4 max-w-[800px] mx-auto'>
            <div className='bg-[var(--primary-dark)] rounded-lg mx-4 p-4'>
                <h1 className='text-white font-bold p-2 flex justify-center'>Frequently Asked Questions</h1>
                <Accordion question='Question 1' answer='Answer 1' />
                <Accordion question='Question 2' answer='Answer 2' />
                <Accordion question='Question 3' answer='Answer 3' />
            </div>
        </div>
    )
}

export default FAQ