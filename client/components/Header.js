import { NavLink } from 'react-router-dom'
import headerStyles from '../styles/header.css'
import ShowLogin from './UserAuthentication/ShowLogin'
import CheckLogin from './UserAuthentication/CheckLogin'


const Header = () =>
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
            <NavLink exact activeClassName="activeLink" to='/register'>
                Register
            </NavLink>
            </li>
            <li className="nav-item nav-item-right">
            <NavLink exact activeClassName="activeLink" to='/login'>
                Login
            </NavLink>
            </li>
            <li className="nav-item nav-item-right">
                <ShowLogin />
            </li>
            <li className="nav-item nav-item-right">
                <CheckLogin />
            </li>
        </ul>
    </div>

export default Header
