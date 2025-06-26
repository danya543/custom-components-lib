import ReactDOM from "react-dom/client";
import { App } from "./components/App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
    }
])

root.render(<RouterProvider router={router} />);