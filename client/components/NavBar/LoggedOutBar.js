import { NavLink } from 'react-router-dom'
import { Component } from 'react'
import headerStyles from '../../styles/header.css'

const LoggedOutBar = () =>
        <div className="nav-bar">
            <ul>
                <li className="nav-item">
                    <NavLink exact className="nav-link" activeClassName="activeLink" to='/'>
                        Home
                    </NavLink>
                </li>
                <li className="nav-item nav-item-right">
                    <NavLink exact className="nav-link" activeClassName="activeLink" to='/login'>
                        Login
                    </NavLink>
                </li>
                <li className="nav-item nav-item-right">
                    <NavLink exact className="nav-link" activeClassName="activeLink" to='/register'>
                        Register
                    </NavLink>
                </li>
            </ul>
        </div>

export default LoggedOutBar
