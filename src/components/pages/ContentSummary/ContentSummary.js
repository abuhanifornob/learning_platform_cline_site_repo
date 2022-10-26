import React from 'react';
import { Image } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const ContentSummary = ({cours}) => {

    const {total_view,image_url,title,details}=cours;
    return (
    
        <div>
            <img src={image_url}></img>
        </div>

   

    )
};

export default ContentSummary;