import ReactDOM from "react-dom/client";
import { App } from "./components/App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Shop } from "@/pages/shop";
import { LazyAbout } from "@/pages/about/About.lazy";
import { Suspense } from "react";

const root = ReactDOM.createRoot(document.getElementById("root"));

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/about',
                element: <Suspense fallback={'Loading...'}>
                    <LazyAbout />
                </Suspense>
            },
            {
                path: '/shop',
                element: <Suspense fallback={'Loading...'}>
                    <Shop />
                </Suspense>
            }
        ]
    }
])

root.render(<RouterProvider router={router} />);