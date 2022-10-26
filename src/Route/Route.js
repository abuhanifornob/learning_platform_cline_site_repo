import { createBrowserRouter } from "react-router-dom";
import Category from "../components/Category/Category";
import Home from "../components/Home/Home";
import ContentSummary from "../components/pages/ContentSummary/ContentSummary";
import SignIn from "../components/pages/SignIn/SignIn";
import SingUp from "../components/pages/SignUp/SingUp";
import Main from "../layout/Main";


 export const routes=createBrowserRouter(
    [
    {
        path:"/",
        element:<Main></Main>,
        children:[{
            path:"/",
            element:<Home></Home>
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
        
    }

 ]);
