import React from 'react'
import ReactDOM from 'react-dom/client'
import App from "./App"
import './index.css'
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import { AdminDetail } from './lib/admin-detail';
import { adminDetailLoader } from './lib/admin-detail-loader';


function init(appBase: string, viewBase: string, routeChunks: string[]){

    const router = createBrowserRouter([
        {
            path: "/",
            element: <App />
        },
        {
            path: `/:adminId`,
            element: <AdminDetail />,
            loader: adminDetailLoader
        },
    ],
    {
        basename: `${appBase}/${viewBase}`,
    }
    );


    ReactDOM.createRoot(document.getElementById('view-root')).render(
        <React.StrictMode>
            <RouterProvider router={router} />
        </React.StrictMode>,
    )
}
    
    export default init 