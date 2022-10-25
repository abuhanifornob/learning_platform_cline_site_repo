import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Footer from '../components/pages/Footer/Footer';
import Header from '../components/pages/Header/Header';
import LeftNavbar from '../components/pages/LeftNavbar/LeftNavbar';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Container>
                <Row>
                    <Col lg="4" className='d-none d-lg-block' >
                        <LeftNavbar></LeftNavbar>
                    </Col>
                    <Col lg="8">
                      <Outlet></Outlet>
                    </Col>
                </Row>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default Main;