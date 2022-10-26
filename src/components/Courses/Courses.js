import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ContentSummary from '../pages/ContentSummary/ContentSummary';

const Courses = () => {
    const coursesData=useLoaderData();
    
    return (
        <div>
            <h3>This is Main Course</h3>
            {
                coursesData.map(categoryCours=><ContentSummary
                key={categoryCours._id}
                cours={categoryCours}
                ></ContentSummary>)
            }
        </div>
    );
};

export default Courses;