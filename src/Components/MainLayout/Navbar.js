import React from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css';
function Navbardesign() {
    return (
        <>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/todo">Todo App</Link></li>
                    <li><Link to="/countries">Countries</Link></li>
                </ul>
            </nav>
        </>
    )
}
export default Navbardesign