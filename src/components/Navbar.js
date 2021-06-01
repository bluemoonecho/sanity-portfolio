import React from 'react';
import {NavLink} from 'react-router-dom';
import {SocialIcon} from 'react-social-icons'

const Navbar = () => {
    return (
        <header className='bg-indigo-200'>
            <div className='container mx-auto flex justify-between'>
                <nav className='flex'> 
                <NavLink 
                to='/' exact 
                className='inflex-flex items-center py-3 px-3 mr-4 hover:text-indigo-50 text-2xl font-bold cursive tracking-wide'
                activeClassName='text-white'
                > 
                S.H./fullstack dev
                </NavLink>
                <NavLink 
                to='/post'
                activeClassName='text-white'
                className='inflex-flex items-center py-3 px-3 my-1 hover:text-indigo-50 text-1.5xl font-bold cursive tracking-wide'
                > 
                    Blog Posts
                </NavLink>
                <NavLink 
                to='/project'
                activeClassName='text-white'
                className='inflex-flex items-center py-3 px-3 my-1 hover:text-indigo-50 text-1.5xl font-bold cursive tracking-wide'
                > 
                    Projects
                </NavLink>
                <NavLink 
                to='/about'
                activeClassName='text-white'
                className='inflex-flex items-center py-3 px-3 my-1  hover:text-indigo-50 text-1.5xl font-bold cursive tracking-wide'
                > 
                    About Me!
                </NavLink>
                </nav>
                <div className='inline-flex py-1 px-1 my-1'>
                <SocialIcon 
                    url="https://github.com/bluemoonecho" 
                    className='mr-4' 
                    target='_blank' 
                    fgColor='#fff' 
                    style={{height: 35 , width: 35}}/>
                    <SocialIcon 
                    url="https://www.linkedin.com/in/sabine-holler-092a7011a/" 
                    className='mr-4' 
                    target='_blank' 
                    fgColor='#fff' 
                    style={{height: 35 , width: 35}}/>
                </div>
            </div>
            
        </header>
    )
}

export default Navbar
