import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './Header.css'

const Header = () => {
  return (
    <header className='header'>
        <Link to={'/'} className=''>
            <h1 className='header__title'>myMovies</h1>
        </Link>
        <div className='header__nav'>
          <NavLink to='/'>Home</NavLink>
          <NavLink to='/tickets'>My Bookings</NavLink>

        </div>
    </header>
  )
}

export default Header