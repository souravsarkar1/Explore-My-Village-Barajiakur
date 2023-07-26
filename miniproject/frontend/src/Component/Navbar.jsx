import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { FaFacebookSquare, FaInstagramSquare, FaYoutubeSquare } from 'react-icons/fa';
//import mainLogo from '../icons/main logo.png'
import { Heading } from '@chakra-ui/react';
const Navbar = () => {
    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(!open);
    };

    const closeMenu = () => {
        setOpen(false);
    };

    return (
        <nav className="navbar">
            <Link to="/" className="nav-logo">
                <Heading style={{
                    fontSize: '24px',
                    fontWeight: 'bold',
                    color: '#ebe5e1',
                    textTransform: 'uppercase',
                    fontFamily: 'Arial, sans-serif',
                    letterSpacing: '2px',
                    textShadow: '2px 2px 4px rgba(57, 43, 66, 0.3)',
                    margin: '0',
                    padding: '10px',
                    //backgroundColor: '#f8f8f8',
                    borderRadius: '8px',
                    //boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
                    //border: '1px solid #ccc',
                }}
                >ʙᴀʀᴀᴊɪᴀᴋᴜʀ</Heading>
            </Link>
            <div onClick={handleClick} className="nav-icon">
                {open ? <FiX /> : <FiMenu />}
            </div>
            <ul className={open ? 'nav-links active' : 'nav-links'}>
                <Link to={'/'}>
                    <li className="nav-item">
                        <Link to={'/'} className="nav-link" onClick={closeMenu}>
                            Home
                        </Link>
                    </li>
                </Link>
                <Link to={'/about'}>
                    <li className="nav-item">
                        <Link to="/about" className="nav-link" onClick={closeMenu}>
                            About
                        </Link>
                    </li>
                </Link>
                <Link to={'/cultrul'}>
                    <li className="nav-item">
                        <Link to="/cultrul" className="nav-link" onClick={closeMenu}>
                            Cultrul
                        </Link>
                    </li>
                </Link>
                <Link to={'/gallery'}>
                    <li className="nav-item">
                        <Link to="/gallery" className="nav-link" onClick={closeMenu}>
                            Gallery
                        </Link>
                    </li>
                </Link>
                <Link to={'/contribute'}>
                    <li className="nav-item">
                        <Link to="/contribute" className="nav-link" onClick={closeMenu}>
                            Contribute
                        </Link>
                    </li>
                </Link>
                <Link to={'/myprofile'}>
                    <li className="nav-item">
                        <Link to="/myprofile" className="nav-link" onClick={closeMenu}>
                            Your Profile
                        </Link>
                    </li>
                </Link>
            </ul>
            <ul className='socilamedia'>
                <Link to={'/facebook'}> <FaFacebookSquare /></Link>
                <Link to={'/instagrma'}><FaInstagramSquare /></Link>
                <Link to={'/youtube'}><FaYoutubeSquare /></Link>
            </ul>
        </nav>
    );
};

export default Navbar;
