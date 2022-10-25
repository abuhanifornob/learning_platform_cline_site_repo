import { createBrowserRouter } from "react-router-dom";
import Category from "../components/Category/Category";
import ContentSummary from "../components/pages/ContentSummary/ContentSummary";
import Main from "../layout/Main";


 export const routes=createBrowserRouter(
    [
    {
        path:"/",
        element:<Main></Main>,
        children:[{
            path:"/",
            element:<ContentSummary></ContentSummary>
        },
        {
            path:"/category/:id",
            element:<Category></Category>,
            loader:({params})=>fetch(`http://localhost:5000/category/${[params.id]}`)
        }
    
    ]   
        
    }

 ]);
