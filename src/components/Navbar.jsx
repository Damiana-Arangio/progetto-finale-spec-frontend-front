import { NavLink, Link } from "react-router-dom"
import wineGlass from "../assets/icons/wine-glass.svg"

function Navbar() {

    const links = [
        { path: "/", label: "Home" },
        { path: "/vini", label: "Vini" },
        { path: "/preferiti", label: "Preferiti" }
    ]

    return (

        <nav className="navbar">

            {/* Home - Vini */}
            <ul className="container-links-lr">
                {links.slice(0, 2).map(link => (
                    <li key={link.path}>
                        <NavLink to={link.path}>{link.label}</NavLink>
                    </li>
                ))}
            </ul>

            {/* Logo */}
            <div className="logo">
                <Link to="/">
                    <img src="/logo.png" alt="Logo" />
                </Link>
            </div>

            {/* Confronto - Preferiti */}
            <ul className="container-links-lr">

                <li>
                    <button type="button"> confronto </button>
                        
                </li>

                <li>
                    <NavLink to="/preferiti"> 
                        <img src={wineGlass} alt="Preferiti" className="icon" />
                     </NavLink>
                </li>

            </ul>

        </nav>
    )
}

export default Navbar