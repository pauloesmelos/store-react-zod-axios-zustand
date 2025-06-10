import Layout from "@/layout";
import Auth from "@/pages/auth";
import CreateUser from "@/pages/createUser";
import Home from "@/pages/home";
import NotFound from "@/pages/NotFound";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
    {
        element: <Layout />,
        children: [
            {
                element: <CreateUser />,
                path: "/"
            },
            {
                element: <Home />,
                path: "/home"
            },
            {
                element: <Auth />,
                path: "/login"
            },
            {
                element: <NotFound />,
                path: "*"
            }
        ]
    }
]);