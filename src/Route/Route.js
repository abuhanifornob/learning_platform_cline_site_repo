import { createBrowserRouter } from "react-router-dom";
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
        }]   
        
    }

 ]);
