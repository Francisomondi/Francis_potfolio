import React from 'react'
import myImage from "../assets/aziz.jpg"
import { RxDoubleArrowRight } from "react-icons/rx";

const Home = () => {
    return (
        <div name="home" className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 '>
            <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
                <div className='flex flex-col justify-center h-full '>
                    <h2 className='text-4xl sm:text-7xl font-bold text-white '>I'm a Full Stack Developer</h2>
                    <p className='text-gray-500 py-4 max-w-md'>I am a solution-driven
                        professional excelling in highly collaborative work
                        environment, finding solutions to challenges and focused on customer
                        satisfaction. Proven experience developing consumer-focused back and
                        front-end solutions in JavaScript node Js mongoDB, express and react
                        (MERN Stack)</p>
                    <div>
                        <button className='group text-white w-fit px-6 py-3 my-2 flex 
                        items-center rounded-md bg-gradient-to-r from-cyan-500
                         to-blue-900 cursor-pointer'>Potfolio
                            <span className='group-hover:rotate-90 duration-300 '>
                                <RxDoubleArrowRight size={30} className="ml-2" />
                            </span>
                        </button>
                    </div>
                </div>

                <div>
                    <img src={myImage} alt="myself" className='rounded-2xl w-2/3 md:w-full mx-auto' />
                </div>

            </div>
        </div>
    )
}

export default Home
