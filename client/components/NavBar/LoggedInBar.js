import { NavLink } from 'react-router-dom'
import LogoutButton from './../UserAuthentication/LogoutButton'
import { Component } from 'react'
import headerStyles from '../../styles/header.css'

class LoggedInBar extends Component {
    render() {
        return(
        <div className="nav-bar">
            <ul>
                <li className="nav-item">
                    <NavLink exact activeClassName="activeLink" to='/'>
                        Home
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink exact activeClassName="activeLink" to='/addpost'>
                        Add Post
                    </NavLink>
                </li>
                <li className="nav-item nav-item-right">
                    <LogoutButton />
                </li>
            </ul>
        </div>
        )
    }
}

export default LoggedInBar
