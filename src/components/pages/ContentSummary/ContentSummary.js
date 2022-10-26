import React from 'react';
import { Image } from 'react-bootstrap';
import { FaEye } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ContentSummary = ({ cours }) => {

    const { total_view, image_url, title, details } = cours;
    return (

        <div className='mx-5 mx-auto shadow-lg p-3 mb-5 bg-body rounded'>
           <div className='bg-image hover-zoom'>
           <img className='img-fluid w-100' src={image_url}></img>
           </div>
            
            <h3>{title}</h3>
            <p>{
                details.length > 250 ?
                    <>{details.slice(0, 250) + '...'} <Link to=''>Read More for this Courses</Link> </>
                    :
                    details
                //  {`/news/${_id}`}
            }</p>

            <div>
                <div>
                <FaEye className='me-2'></FaEye>
                <span>{total_view}</span>
                </div>
                
            </div>



        </div>



    )
};

export default ContentSummary;