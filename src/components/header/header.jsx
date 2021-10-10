import React from 'react'
import NavBar from '../navBar/navBar'
import './header.css'

const Header = () => {
    return (
        <header className='main-header'>
            <div className='container'>
                <NavBar />
            </div>
        </header>
    )
}

export default Header
