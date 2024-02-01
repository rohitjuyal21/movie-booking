import React from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import './Header.css'

const Header = () => {
  const location = useLocation();
  return (
    <header className={`header ${location.pathname == '/' || location.pathname == '/bookings' ? 'bg' : ''}`} >
        <Link to={'/'} className=''>
            <h1 className='header__title'>myMovies</h1>
        </Link>
        <div className='header__nav'>
          <NavLink to='/'>Home</NavLink>
          <NavLink to='/bookings'>My Bookings</NavLink>
        </div>
    </header>
  )
}

export default Header