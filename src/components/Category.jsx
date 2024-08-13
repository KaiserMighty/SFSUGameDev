import React, {useState} from 'react'
import Card from './Card'

const Category = ({title, content}) => {
    const [accordionOpen, setAccordionOpen] = useState(false);
    return (
        <div className='rounded-lg m-4 p-4 bg-[var(--primary-dark)]'>
            <button onClick={() => setAccordionOpen(!accordionOpen)} className='flex justify-between w-full'>
                <span className='text-left'>{title}</span>
                <svg
                className="fill-white shrink-0 ml-8"
                width="16"
                height="16"
                xmlns="http://www.w3.org/2000/svg"
                >
                <rect
                    y="7"
                    width="16"
                    height="2"
                    rx="1"
                    className={`transform origin-center transition duration-200 ease-out ${
                    accordionOpen && "!rotate-180"
                    }`}
                />
                <rect
                    y="7"
                    width="16"
                    height="2"
                    rx="1"
                    className={`transform origin-center rotate-90 transition duration-200 ease-out ${
                    accordionOpen && "!rotate-180"
                    }`}
                />
                </svg>
            </button>
            <div className={`grid overflow-hidden transition-all duration-300 ease-in-out text-slate-600 text-sm ${
                accordionOpen ? 'grid-rows-[1fr] opacity-100 mb-4' : 'grid-rows-[0fr] opacity-0'
            }`}>
                <div className='flex flex-col overflow-hidden'>
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

            </div>
        </div>
    )
}

export default Category