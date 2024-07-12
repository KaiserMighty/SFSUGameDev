import React from 'react'
import Accordion from './Accordion'

const FAQ = () => {
    return (
        <div id='faq' className='m-4 mb-0 p-4 bg-[var(--primary-dark)] rounded-lg'>
            <h1 className='text-white font-bold p-2 flex justify-center'>Frequently Asked Questions</h1>
            <Accordion question='Question 1' answer='Answer 1' />
            <Accordion question='Question 2' answer='Answer 2' />
            <Accordion question='Question 3' answer='Answer 3' />
        </div>
    )
}

export default FAQ