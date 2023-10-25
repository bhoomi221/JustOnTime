import React from 'react';
import './SettingSidebar.css'
import {Link} from 'react-router-dom'
//update the bar as we add more services then it will be uniform for all settings pages

function SettingSidebar() {
    return (
        <div id="sidebar-cont">
            <Link to='/personal-info' > <span id='sidebar-nav'> Personal Information</span></Link>
            <Link to='/reset-link/password' > <span id='sidebar-nav'> Change Password</span></Link>
            <Link to='/reset-link/email' > <span id='sidebar-nav'> Change Email</span></Link>
         </div>
    );
}


export default SettingSidebar; 