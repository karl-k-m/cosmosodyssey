import { NavLink } from "react-router-dom";
import "./Navbar.css";
import logoIcon from "../../assets/images/logo.png";
import HomeIcon from '../../assets/images/home_icon.png'
import SearchIcon from '../../assets/images/searchicon.png'
import AboutIcon from '../../assets/images/about_icon.png'
import CompaniesIcon from '../../assets/images/spaceshipicon.png'

function Navbar() {
    return (
        <div className="navbar_wrapper">
            <ul className="nav_items_wrapper">
                <li className="navbar_item">
                    <NavLink className="nav_link" to="/" exact>
                        <img className="navbar_icon" src={HomeIcon}/>
                        <p className="navbar_text">home</p>
                    </NavLink>
                </li>
                <li>
                    <NavLink className="nav_link" to="/about">
                        <img className="navbar_icon" src={AboutIcon}/>
                        <p className="navbar_text">about us</p>
                    </NavLink>
                </li>
                <li>
                    <img className="nav_icon" src={logoIcon} alt="Home" />
                </li>
                <li>
                    <NavLink className="nav_link" to="/reserve">
                        <img className="navbar_icon" src={SearchIcon}/>
                        <p className="navbar_text">reserve a trip</p>
                    </NavLink>
                </li>
                <li>
                    <NavLink className="nav_link" to="/companies">
                        <img className="navbar_icon" src={CompaniesIcon}/>
                        <p className="navbar_text">companies</p>
                    </NavLink>
                </li>
            </ul>
        </div>
    );
}

export default Navbar;