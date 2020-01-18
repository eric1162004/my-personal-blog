import React from 'react'
import { NavLink } from 'react-router-dom'

const SignOutLinks = () => {
    return (
        <ul className="right">
            <li><NavLink to='/signup'>SignUp</NavLink></li>
            <li><NavLink to='/signin'  className='btn white-text pink waves-effect waves-light'>Login</NavLink></li>
        </ul>
    )
}

export default SignOutLinks