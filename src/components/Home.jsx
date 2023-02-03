import React from 'react'
import myImage from "../assets/grants.png"
import { RxDoubleArrowRight } from "react-icons/rx"
import { Link } from 'react-scroll'

const Home = () => {
    return (
        <div name="Home" className='flex h-screen w-full bg-gradient-to-b from-black via-black to-gray-800'>
            <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row '>
                <div className='flex flex-col justify-center h-full '>
                    <h2 className='text-4xl sm:text-4xl font-bold text-white '> UNIVERSAL GRANTS LIMITED </h2>
                    <p className='text-gray-500 py-4 max-w-md'>Our main goal is to support the young businesses to scale 
                    innovative business models that create positive impact and 
                    contribute to achieving the Sustainable Development Goals.  </p>
                    <div>
                        <Link to='Portfolio' smooth={true} duration={500} className='group text-white w-fit px-6 py-3 my-2 flex 
                        items-center rounded-md bg-gradient-to-r from-green-500
                         to-blue-900 cursor-pointer'>Learn More
                            <span className='group-hover:rotate-90 duration-300 '>
                                <RxDoubleArrowRight size={30} className="ml-1" />
                            </span>
                        </Link>
                    </div>
                </div>

                <div>
                    <img src={myImage} alt="myself" className='rounded-2xl mx-auto w-2/3 md:w-full' />
                </div>

            </div>
        </div>
    )
}

export default Home
