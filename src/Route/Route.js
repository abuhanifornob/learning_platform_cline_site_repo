import { createBrowserRouter } from "react-router-dom";
import About from "../components/About/About";
import Category from "../components/Category/Category";
import Courses from "../components/Courses/Courses";
import Home from "../components/Home/Home";
import MainHome from "../components/Home/MainHome";
import ContentSummary from "../components/pages/ContentSummary/ContentSummary";
import SignIn from "../components/pages/SignIn/SignIn";
import SingUp from "../components/pages/SignUp/SingUp";
import Main from "../layout/Main";
import SubMain from "../layout/SubMain";


 export const routes=createBrowserRouter(
    [
    {
        path:"/",
        element:<Main></Main>,
        children:[
            {
            path:"/",
            element:<MainHome></MainHome>
        },
            {
            path:"/courses",
            element:<Courses></Courses>
        },
        {
            path:"/category/:id",
            element:<Category></Category>,
            loader:({params})=>fetch(`http://localhost:5000/category/${params.id}`)
        },
        {
            path:"/login",
            element:<SignIn></SignIn>

        },
        {
            path:"/signUp",
            element:<SingUp></SingUp>

        }
    
    ]   
        
    },
    {
        path:"/",
        element:<SubMain></SubMain>,
        children:[
            {
           path:"/home",
           element:<Home></Home>
        },
        {
            path:'/about',
            element:<About></About>
        }

    ]
    }

 ]);
