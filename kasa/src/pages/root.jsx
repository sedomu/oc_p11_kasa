import {NavLink, Outlet} from "react-router-dom";

export function Root() {
    return <>
        <header>
            <h1>Kasa</h1>
            <nav>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
            </nav>
        </header>
        <main>
            <Outlet />
        </main>
        <footer>
            <h1>Kasa (footer)</h1>
            <p>© 2020 Kasa. All rights reserved</p>
        </footer>
    </>
}