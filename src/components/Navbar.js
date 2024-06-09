import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <>
            <nav className='navbar'>
                <ul className='nav-links'>
                    <li><Link to="/" className='nav-link'>BOOK<span>SHELF</span></Link></li>
                    <li><Link to="/mybookshelf" className='nav-link'>My Books</Link></li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar