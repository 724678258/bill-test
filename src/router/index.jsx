import { createHashRouter } from "react-router-dom";
import Layout from "@/pages/Layout";
import Month from "@/pages/Month";
import New from "@/pages/New";
import Year from "@/pages/Year";


const router = createHashRouter([
    {
        path: '/',
        element: <Layout></Layout>,
        children: [
            {
                path: '/month',
                element: <Month></Month>,
            },
            {
                path: '/year',
                element: <Year></Year>,
            },
        ]
    },
    {
        path: '/new',
        element: <New></New>
    },

])

export default router