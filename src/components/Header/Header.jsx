import React from 'react'
import './Header.scss'
import Phone from '../Phone/Phone'

function Header() {
  return (
    <header>
        <img className='logo' src='logo.svg' />
        <Phone />
    </header>
  )
}

export default Header