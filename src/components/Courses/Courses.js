import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ContentSummary from '../pages/ContentSummary/ContentSummary';

const Courses = () => {
    const coursesData=useLoaderData();
    
    return (
        <div>
            <h3 className='mb-4 text-center fs-1 fw-bolder shadow-lg p-3 mb-5 bg-body rounded '>Online Educaton Platform</h3>
            {
                coursesData.map(categoryCours=><ContentSummary
                key={categoryCours._id}
                co={categoryCours}
                ></ContentSummary>)
            }
        </div>
    );
};

export default Courses;