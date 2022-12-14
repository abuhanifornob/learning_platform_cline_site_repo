import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ContentSummary from '../pages/ContentSummary/ContentSummary';

const Category = () => {
    const categoryCourses=useLoaderData();
    return (
        <div className=''>
            {
                categoryCourses.map(categoryCours=><ContentSummary
                key={categoryCours._id}
                co={categoryCours}
                ></ContentSummary>)
            }
        </div>
    );
};

export default Category;