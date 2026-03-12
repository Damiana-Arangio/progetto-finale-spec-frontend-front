import { NavLink, Link } from "react-router-dom"
import wineGlass from "../assets/icons/wine-glass.svg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faScaleBalanced } from "@fortawesome/free-solid-svg-icons";
import usePreferitiContext from "../hooks/usePreferitiContext";
import { useState } from "react";

function Navbar() {

    const links = [
        { path: "/", label: "Home" },
        { path: "/vini", label: "Vini" },
        { path: "/preferiti", label: "Preferiti" }
    ]

    /************
        HOOK
    ************/
    const [isOpenConfronto, setIsOpenConfronto] = useState(false);

    /* Desctructuring funzioni gestione preferiti */
    const { preferiti } = usePreferitiContext();
    console.log("preferiti>0? " , preferiti.length>0);

    /************
        RENDER
    *************/
    return (

        <nav className="navbar container-page">
            {/* Home - Vini */}
            <ul className="container-links-lr">
                {links.slice(0, 2).map(link => (
                    <li key={link.path}>
                        <NavLink to={link.path} className="nav-link">
                            {link.label}
                        </NavLink>
                    </li>
                ))}
            </ul>

            {/* Logo */}
            <div className="container-logo">
                <Link to="/">
                    <img src="/images/logo-nav.png" alt="Logo"  className="img-logo"/>
                </Link>
            </div>

            {/* Confronto - Preferiti */}
            <ul className="container-links-lr">

                {/* Icona preferiti + confronto */}

                <li>
                    <NavLink to="/preferiti" className="nav-link"> 
                        <FontAwesomeIcon 
                            icon={faHeart} 
                        />
                        { preferiti.length > 0 &&
                            <sup className="index-sup">{preferiti.length}</sup>
                        }
                    </NavLink>
                </li>
                <li>
                    <button onClick={ () => setIsOpenConfronto( currValue => !currValue ) } 
                        className={`nav-link ${isOpenConfronto ? "color-gold" : "color-light-brown"}`}>
                        <FontAwesomeIcon icon={faScaleBalanced} />
                    </button>
                </li>
            </ul>

        </nav>
    )
}

export default Navbar