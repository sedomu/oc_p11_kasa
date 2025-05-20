import {NavLink, Outlet} from "react-router-dom";
import logo_orange from "../assets/images/logo_orange.svg";
import logo_white from "../assets/images/logo_white.svg";

export function Root() {
    return <>
        <header>
            <img className="logo" src={logo_orange} alt={"logo"}/>
            <nav>
                <NavLink to="/">Accueil</NavLink>
                <NavLink to="/about">A propos</NavLink>
            </nav>
        </header>

            <Outlet />

        <footer>
            <img className="logo" src={logo_white} alt={"logo"}/>
            <p>© 2020 Kasa. All rights reserved</p>
        </footer>
    </>
}