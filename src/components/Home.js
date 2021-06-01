import React from 'react'
import Ocean from '../assets/ocean.jpg'

const Home = () => {
    return (
        <main>
            <img src={Ocean} 
            alt='ocean'
            className='absolute object-cover w-full h-full'
            />
            <section className='relative flex justify-center min-h-screen pt-12 lg:pt-64 pt-8'>
                <h1 className='text-5xl text-white font-bold cursive leading-none lg:leadind-snug text-align-center'>
                Hello there! I'm Sabine 👋
                <br></br>
                <br></br>
                Pisces / Coder / Musician
                </h1> 
            </section>
        </main>
    )
}

export default Home
