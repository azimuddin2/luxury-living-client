import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login/Login";
import SignUp from "../pages/Login/SignUp/SignUp";
import DashboardLayout from "../layout/DashboardLayout";
import PrivateRoute from "./PrivateRoute";
import Book from "../pages/Dashboard/Book/Book";
import BookingList from "../pages/Dashboard/BookingList/BookingList";
import Review from "../pages/Dashboard/Review/Review";
import Services from "../pages/Services/Services";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/services',
                element: <Services></Services>
            }
        ]
    },
    {
        path: 'login',
        element: <Login></Login>
    },
    {
        path: 'signup',
        element: <SignUp></SignUp>
    },

    {
        path: '/dashboard',
        element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        children: [
            {
                path: '/dashboard/:id',
                element: <Book></Book>,
                loader: ({params}) => {
                    return fetch(`http://localhost:5000/dashboard/${params.id}`)
                }
            },
            {
                path: '/dashboard',
                element: <BookingList></BookingList>
            },
            {
                path: '/dashboard/review',
                element: <Review></Review>
            },
        ]
    }

]);

export default router;