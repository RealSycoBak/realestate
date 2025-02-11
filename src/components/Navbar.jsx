import './Navbar.css';
import LogoImg from '../assets/ClubLogo.png';
import { useState } from 'react'; // Add this import

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <>
            <div className="Navbar">
                <div className="imgtop">
                    <img src={LogoImg} alt="realestate" width="100px" height="100px" />
                </div>
                <div className="menu-btn" onClick={toggleMenu}>
                    <div className="hamburger">☰</div>
                </div>
                <ul className={isMenuOpen ? 'active' : ''}>
                    <li><a href="/">HOME</a></li>
                    <li><a href="/about">ABOUT</a></li>
                    <li><a href="/portfolio">PORTFOLIO</a></li>
                    <li><a href="/students">STUDENTS</a></li>
                    <li><a href="/news">NEWS</a></li>
                </ul>
            </div>
            <div className="line"> </div>
        </>
    )
}