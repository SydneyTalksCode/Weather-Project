import {NavLink, Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav id='navbar'>
        <div id='navbar'/>
        <ul id='navlist'>
            <li>
                <NavLink to='/'>Home</NavLink>
            </li>
            <li>
                <Link to='/about'>About</Link>
            </li>
            <li>
                <Link to='/contacts/'>Contacts</Link>
            </li>
        </ul>
    </nav>
  )
}

export default NavBar