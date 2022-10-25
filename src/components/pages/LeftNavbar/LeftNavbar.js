import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { json, Link } from 'react-router-dom';

const LeftNavbar = () => {
    const [category,setCategory]=useState([])

    useEffect(()=>{
       fetch('http://localhost:5000/course-category')
       .then(res=>res.json())
       .then(data=>setCategory(data))

    },[])
    console.log(category);
    return (
        <div>
            <h3>All Courses</h3>
            {
             category.map(cours=> <Link key={cours.id} to={`category/${cours.id}`}>
                 <p>{cours.name}</p>
             </Link>
                
                )
            }
        </div>
    );
};

export default LeftNavbar;