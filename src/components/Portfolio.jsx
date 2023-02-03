import React from 'react'
import { Link } from 'react-scroll'
import arrayDestruct from "../assets/portfolio/7.png"
import installNode from "../assets/portfolio/7.png"
import navbar from "../assets/portfolio/7.png"
import reactParallax from "../assets/portfolio/7.png"
import reactSmooth from "../assets/portfolio/7.png"
import reactWeather from "../assets/portfolio/7.png"


const Portfolio = () => {
    const portfolios = [
        {
            id: 1,
            src: arrayDestruct
        },
        {
            id: 2,
            src: installNode
        },
        {
            id: 3,
            src: navbar
        },
        {
            id: 4,
            src: reactParallax
        },
        {
            id: 5,
            src: reactSmooth
        },
        {
            id: 6,
            src: reactWeather
        },
    ]

    return (
         <div name="Portfolio" className='w-full bg-gradient-to-b from-black to-gray-800'>
       
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500 text-white'>Overview</p>
                    <p className='py-6 text-white'>what we do </p>
                </div>



                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
                    {
                        portfolios.map(({ id, src }) => {
                            return (
                                <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
                                    <img src={src} alt="reactWeather" className='rounded-md duration-200 hover:scale-105' />
                                   
                                </div>
                            )

                        })
                    }

                </div>
            </div>

        </div>











        
    )
}

export default Portfolio
