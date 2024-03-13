import React from 'react'
import './Footer.scss'

function Footer() {
    const year = new Date().getFullYear()
  return (
    <footer>
        <p>
            &copy; {year} <span> CLEAR CREDIT </span> ALL RIGHTS RESERVED
        </p>
    </footer>
  )
}

export default Footer