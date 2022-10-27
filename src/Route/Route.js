import { createBrowserRouter } from "react-router-dom";
import About from "../components/About/About";
import Blog from "../components/Blog/Blog";
import Category from "../components/Category/Category";
import Cours from "../components/Courses/Cours";
import Courses from "../components/Courses/Courses";
import Home from "../components/Home/Home";
import MainHome from "../components/Home/MainHome";
import Instractor from "../components/Instractor/Instractor";
import ContentSummary from "../components/pages/ContentSummary/ContentSummary";
import FourOfFour from "../components/pages/Other/FourOfFour";
import TermsAndConditon from "../components/pages/Other/TermsAndConditon";

import SignIn from "../components/pages/SignIn/SignIn";
import SingUp from "../components/pages/SignUp/SingUp";
import Main from "../layout/Main";
import SubMain from "../layout/SubMain";
import PrivetRoute from "./PrivetRoute";


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
            element:<Courses></Courses>,
            loader:()=>fetch('https://lerning-platform-server-side-nine.vercel.app/courses')
        },
        {
         path:"/cours/:id",
         element:<PrivetRoute><Cours></Cours></PrivetRoute>,
         loader:({params})=>fetch(`https://lerning-platform-server-side-nine.vercel.app/cours/${params.id}`)
        },
        {
            path:"/category/:id",
            element:<Category></Category>,
            loader:({params})=>fetch(`https://lerning-platform-server-side-nine.vercel.app/category/${params.id}`)
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
        },
        {
            path:"/blog",
            element:<Blog></Blog>

        },
        {
            path:"/instractor",
            element:<Instractor></Instractor>

        },
        {
            path:"/terms",
            element:<TermsAndConditon></TermsAndConditon>
           }
       

    ]
    },
    {
   path:"/*",
   element:<FourOfFour></FourOfFour>
    }

 ]);
