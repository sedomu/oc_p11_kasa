import { Link, NavLink, Outlet } from 'react-router-dom'

export function Root() {
    return <>
        <header>
            <Link to={"/"}><img className="logo" src={"/images/logo_orange.svg"} alt={"logo"}/></Link>
            <nav>
                <NavLink to="/">Accueil</NavLink>
                <NavLink to="/about">A propos</NavLink>
            </nav>
        </header>

            <Outlet />

        <footer>
            <img className="logo" src={"/images/logo_white.svg"} alt={"logo"}/>
            <p>© 2020 Kasa. All rights reserved</p>
        </footer>
    </>
}