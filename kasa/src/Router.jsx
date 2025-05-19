import {createBrowserRouter} from "react-router-dom";
import {About} from "./pages/about.jsx";
import {Details} from "./pages/details.jsx";
import {Home} from "./pages/index.jsx";
import {Root} from "./pages/root.jsx";
import {NotFound} from "./pages/404.jsx";

export const router = createBrowserRouter([
        {
            path: "/",
            element: <Root />,
            errorElement: <NotFound />,
            children: [
                {
                  path: "/",
                  element: <Home />
                },
                {
                    path: "about",
                    element: <About />
                },
                {
                    path: "details/:id",
                    element: <Details />
                }
            ]
        }
    ])