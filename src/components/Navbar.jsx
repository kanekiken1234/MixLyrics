import { NavLink as Link } from "react-router-dom";
import '../styles/navbar.css';
import { ReactComponent as Menu } from "../svgs/menu.svg";

const Navbar = () => {
    return (
        <div className="header">
            <div className="container">
                <div className="logo">
                    MixLyrics.
                </div>
                <div className="navlinks">
                    <Link to='/'>Home</Link>
                    <Link to='/about'>About</Link>
                    <Link to='/contact'>Contact</Link>
                </div>
                <div className="menu-icon">
                    <Menu />
                </div>
            </div>
        </div>
    );
}

export default Navbar;