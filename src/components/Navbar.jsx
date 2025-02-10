import './Navbar.css';

export default function Navbar(){

return (
    <>
    <div className="Navbar">
    <div className="imgtop">
        <img src="img" alt="realestate" />
    </div>

    <nav>
        <ul>
        <li><a href="default.asp">Home</a></li>
        <li><a href="news.asp">News</a></li>
        <li><a href="contact.asp">Contact</a></li>
        <li><a href="about.asp">About</a></li>
        </ul>
    </nav>
    </div>
    <hr className="line" />
    </>

)
}