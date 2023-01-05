import React from 'react'
import css from "../assets/css.png"
import github from "../assets/github.png"
import html from "../assets/html.png"
import javascript from "../assets/javascript.png"
import nextjs from "../assets/node.png"
import node from "../assets/nextjs.png"
import reactImage from "../assets/react.png"
import tailwind from "../assets/tailwind.png"


const Experience = () => {
    {
        const experiences = [
            {
                id: 1,
                img: css
            },
            {
                id: 2,
                img: github
            },
            {
                id: 3,
                img: html
            },
            {
                id: 4,
                img: javascript
            },
            {
                id: 5,
                img: nextjs
            },
            {
                id: 6,
                img: node
            },
            {
                id: 7,
                img: reactImage
            },
            {
                id: 8,
                img: tailwind
            },
        ]
    }
    return (
        <div name="experience" className='bg-gradient-to-b from-gray-800 to-black w-full h-screen'>

            <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>
                <div>
                    <p className='text-4xl font-bold border-b-4 border-gray-500 p-2 inline'>Experience</p>
                    <p className='py-6'>These are the technologies i have worked with</p>
                </div>

                <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>
                    <div className='shadow-md hover:scale-105 duration-500 py-2 rounded-lg'>
                        <img src={html} alt='#' className='w-20 mx-auto' />
                        <p className='mt-4'>HTML</p>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Experience
