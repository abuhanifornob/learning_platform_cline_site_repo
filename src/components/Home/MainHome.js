import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import dataScience from "../../asets/images/Data-Science.png";
import web from "../../asets/images/web.jpg";
import language from "../../asets/images/language.png";
import machine from "../../asets/images/Machine-Learning.png";
import videoEditing from "../../asets/images/Video-Editing.jpg";
import graphicDesigne from "../../asets/images/Graphic-Design-Institute.png";


const MainHome = () => {
    return (
        <div>
            <h3 className='mb-4 text-center fs-1 fw-bolder shadow-lg p-3 mb-5 bg-body rounded '>Lets Brows All Catagori</h3>
            <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={web}
          alt="web"
          style={{height:600}}
        />
        <Carousel.Caption>
          <h3>Web Development </h3>
          <p>Each aspect of creating websites and applications entails a unique set of skills. Online Edu offers a host of courses to bring you up to speed on modern front-end, back-end, and fullstack web development practices and skills.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={dataScience}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={dataScience}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

            
        </div>
    );
};

export default MainHome;