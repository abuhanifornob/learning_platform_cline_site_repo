import React from 'react';

import Carousel from 'react-bootstrap/Carousel';
import dataScience from "../../asets/images/Data-Science.png";
import web from "../../asets/images/web.jpg";
import language from "../../asets/images/language.png";
import machine from "../../asets/images/Machine-Learning.png";
import videoEditing from "../../asets/images/Video-Editing.jpg";
import graphicDesigne from "../../asets/images/Graphic-Design-Institute.png";
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className='mt-5'>
            <h3 className='mb-4 text-center fs-1 fw-bolder shadow-lg p-3 mb-5 bg-body rounded '>Online Education Platform</h3>
            <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={web}
          alt="web"
          style={{height:400}}
        />
        <Carousel.Caption>
          <h3 className='text-center fs-1 fw-bolder '>Web Development </h3>
          <p>Each aspect of creating websites and applications entails a unique set of skills. Online Edu offers a host of courses to bring you up to speed on modern front-end, back-end, and fullstack web development practices and skills.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={graphicDesigne}
          alt="graphicDesigne"
          style={{height:400}}
        />
        <Carousel.Caption>
          <h3 className='text-center fs-1 fw-bolder '>Graphic Designe </h3>
         
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={videoEditing}
          alt="videoEditing}"
          style={{height:400}}
        />
        <Carousel.Caption>
          <h3 className='text-center fs-1 fw-bolder '>Video Editing</h3>
         
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={language}
          alt="language"
          style={{height:400}}
        />
        <Carousel.Caption>
          <h3 className='text-center fs-1 fw-bolder '>Programing Language</h3>
         
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={dataScience}
          alt="dataScience}"
          style={{height:400}}
        />
        <Carousel.Caption>
          <h3 className='text-center fs-1 fw-bolder '>Data Science</h3>
         
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={machine}
          alt="machine"
          style={{height:400}}
        />
        <Carousel.Caption>
          <h3 className='text-center fs-1 fw-bolder '>Machine Learning</h3>
         
        </Carousel.Caption>
      </Carousel.Item>
   
     
    </Carousel>
         <div className='text-center py-3'>
         <Button className="fw-bolder my-5 px-5 py-3" type="button"><Link to='/courses' className='text-dark text-decoration-none' >See The All Courses Details</Link></Button>
         </div>
           
        
            
        </div>
    );
};

export default Home;