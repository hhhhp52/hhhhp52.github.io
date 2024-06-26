import React from 'react'
import ReactDOM from 'react-dom/client'

import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

import HomePage from './home/home'
import GamePage from "./game/game";



const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage/>,
    },
    {
        path: "/schnee",
        element: <HomePage/>,
    },
    {
        path: "/game",
        element: <GamePage/>,
    },
]);


ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
