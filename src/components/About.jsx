import React from 'react'

const About = () => {
    return (
        <div name="About" className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
                </div>
                <p className='text-xl mt-20 '>
                    Why i love programming
                </p>
                <br />
                <p className='text-xl'>
                    I have experience building products for web app users, meeting highest
                    standards for design, user experience, best practices, usability and
                    speed. Responding to challenges by designing and developing solutions
                    and building applications aligned to customer's services. Translating
                    solutions into code and working across many different APIs, third-party
                    integrations and databases.
                    I bring hands-on experience participating in and leading product design
                    projects, including gathering user requirements, producing code,
                    creating mockups and designing deployment, scale-up and load
                    balancing architectures. I focus on creating clean, robust code with
                    exceptional security and I am able to achieve compatibility targets while
                    meeting and exceeding customer demands
                </p>
            </div>
        </div>
    )
}

export default About
