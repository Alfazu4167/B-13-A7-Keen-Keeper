import { createBrowserRouter } from "react-router";
import Root from "../Root";


import Stats from "../Pages/Stats/Stats";
import Timeline from "../Pages/Timeline/Timeline";
import Homepage from "../Pages/Homepage/Homepage";
import FriendDetails from "../Components/FriendDetails/FriendDetails";



export const router = createBrowserRouter([
    {
        path: "/",
        Component: Root,
        children: [
            {
                index: true,
                Component: Homepage
            },
            {
                path: "/timeline",
                Component: Timeline
            },
            {
                path: "/stats",
                Component: Stats
            },
            {
                path: "/friends/:id",
                Component: FriendDetails,
                loader: ()=> fetch("/friends.json")
            }
        ]
    },
]);