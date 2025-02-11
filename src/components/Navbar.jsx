import './Navbar.css';
import LogoImg from '../assets/ClubLogo.png';

export default function Navbar(){

return (
    <>
    <div className="Navbar">
    <div className="imgtop">
        <img src={LogoImg} alt="realestate" width="100px" height="100px"/>
    </div>

    <nav>
        <ul>
        <li><a href="default.asp">HOME</a></li>
        <li><a href="news.asp">ABOUT</a></li>
        <li><a href="contact.asp">PORTFOLIO</a></li>
        <li><a href="about.asp">STUDENTS</a></li>
        <li><a href="about.asp">NEWS</a></li>
        </ul>
    </nav>
    </div>
    <div className="line"> </div>
    </>

)
}