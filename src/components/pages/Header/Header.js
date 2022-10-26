import React from 'react';
import { useContext } from 'react';
import { Button, Image, Tooltip } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import { FaRegUser, FaSign, FaSignInAlt, FaSignOutAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import logo from "../../../asets/images/logo.png";
import { AuthContext } from '../../../context/ContextProvider/ContextProvider';

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  console.log(user)

  const handleLogOut = () => {
    logOut()
      .then(() => { })
      .then(error => console.error("error", error))
  }

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home"><Image src={logo} roundedCircle style={{ width: 40, height: 60, color: 'red' }}></Image> OnlineEdu</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Home</Nav.Link>
            <Nav.Link href="#pricing">About</Nav.Link>
            <Nav.Link href="#pricing">Courses</Nav.Link>
            <Nav.Link href="#pricing">Instrctor</Nav.Link>
            <Nav.Link href="#pricing">Block</Nav.Link>
            <Nav.Link href="#pricing">Contact</Nav.Link>

          </Nav>
          <Nav>
            <Nav.Link href="#deets">
              {
                user?.uid ? <>
                  {/* <small className='fw-bolder fs-4'>{user.displayName}</small> */}
                  <Button onClick={handleLogOut}><FaSignOutAlt /> Log Out</Button>
                  <OverlayTrigger
                    placement="bottom"
                    overlay={<Tooltip id="button-tooltip-2">{user.displayName}</Tooltip>}
                  >
                    {({ ref, ...triggerHandler }) => (
                        <Image
                         {...triggerHandler}
                          ref={ref}
                          src={user.photoURL} 
                          roundedCircle 
                          style={{ width:60, height:60 }}
                           className="mx-3"
                        />

                    )}
                  </OverlayTrigger>

                 

                </> : <>   <Button className='btn btn-light me-2'>  <Link to="/login"><FaSignInAlt className='me-1' /> Sign In</Link></Button>

                  <Button variant="light"><Link to="/signUp"> <FaRegUser /> Sign Up</Link></Button></>

              }

            </Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;