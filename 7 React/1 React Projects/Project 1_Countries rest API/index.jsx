import React from "react";
import { createRoot } from "react-dom/client"
import App from "./App"
import Home from "./components/Home";
import Error from "./components/Error";
import ContactPage from "./components/ContactPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <Error />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/contact",
                element: <ContactPage />
            }
        ]
    },

]);

const root = createRoot(document.getElementById("root"));

root.render(
    <>
        <RouterProvider router={router} />
    </>
);