import React, {useRef} from 'react'
import {FaBars, FaTimes} from "react-icons/fa"
import "../Styles/main.css"

const Navbar = () => {
    const navRef = useRef()

    const showNav = () => {
        navRef.current.classList.toggle("responsive_nav")
    }

  return (
    <header>
        <h3>Logo</h3>
        <nav ref={navRef}>
            <a href='="/#'>Home</a>
            <a href='="/#'>About</a>
            <a href='="/#'>Service</a>
            <a href='="/#'>Contact Us</a>
            <button className='nav-btn nav-close-btn' onClick={showNav}>
                <FaTimes />
            </button>
        </nav>
        <button className='nav-btn' onClick={showNav}>
            <FaBars />
        </button>
    </header>
  )
}

export default Navbar