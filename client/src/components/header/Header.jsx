import React from 'react'

import Navbar from 'react-bootstrap/Navbar'
import UserButton from './userbutton/UserButton'
import Search from './search/search'
import {Link} from 'react-router-dom';
import logo from '../../logo_cropped.png'

import './header.css'

function Header() {
    return (
        <Navbar bg="light" expand="lg" className='p-2'>
            <a href="/">
                <Navbar.Brand className='logo ms-4 link-light'>
                    <img
                    src={logo}
                    width='200'
                    height='50'
                    className='d-inline-block align-top'
                    alt='JustOnTime'
                    />
                </Navbar.Brand>
            </a>
            <Search/>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Link className="position-absolute end-50 me-4 pe-4" to="/organizer/signup">Interested In Selling?</Link>
            <Navbar.Collapse id="basic-navbar-nav">
            <UserButton />
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Header;