import React from 'react';
import { FaEye } from 'react-icons/fa';
import { useLoaderData } from 'react-router-dom';

const Cours = () => {
    const cours=useLoaderData();
    console.log(cours);
    return (
        <div className='mx-5 mx-auto shadow-lg p-3 mb-5 bg-body rounded'>
        <div className='bg-image hover-zoom'>
        <img className='img-fluid w-100' src={cours.image_url}></img>
        </div>
         
         <h3>{cours.title}</h3>
         <p>
         {cours.details}
         </p>

         <div>
             <div>
             <FaEye className='me-2'></FaEye>
             <span>{cours.total_view}</span>
             </div>
             
         </div>



     </div>
    );
};

export default Cours;