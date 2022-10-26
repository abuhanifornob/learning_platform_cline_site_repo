import React from 'react';

import {
  MDBFooter,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBCol,
  MDBRow,
  MDBBtn
} from 'mdb-react-ui-kit';

const Footer = () => {
    return (
    
            <MDBFooter className='text-center' color='white' bgColor='dark' >
              <MDBContainer className='p-4'>
                <section className='mb-4'>
                  <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
                    <MDBIcon fab icon='facebook-f' />
                  </MDBBtn>
        
                  <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
                    <MDBIcon fab icon='twitter' />
                  </MDBBtn>
        
                  <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
                    <MDBIcon fab icon='google' />
                  </MDBBtn>
        
                  <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
                    <MDBIcon fab icon='instagram' />
                  </MDBBtn>
        
                  <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
                    <MDBIcon fab icon='linkedin-in' />
                  </MDBBtn>
        
                  <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
                    <MDBIcon fab icon='github' />
                  </MDBBtn>
                </section>
        
                <section className=''>
                  <form action=''>
                    <MDBRow className='d-flex justify-content-center'>
                      <MDBCol size="auto">
                        <p className='pt-2'>
                          <strong>Sign up for our newsletter</strong>
                        </p>
                      </MDBCol>
        
                      <MDBCol md='5' start='12'>
                        <MDBInput contrast type='email' label='Email address' className='mb-4' />
                      </MDBCol>
        
                      <MDBCol size="auto">
                        <MDBBtn outline color='light' type='submit' className='mb-4'>
                          Subscribe
                        </MDBBtn>
                      </MDBCol>
                    </MDBRow>
                  </form>
                </section>
        
                <section className='mb-4'>
                  <p>
                  Consectetur adipiscing elit, sued do eiusmod tempor ididunt udfgt labore et dolore magna aliqua. Quis ipsum suspendisces gravida. Risus commodo viverra sebfd dho eiusmod tempor maecenas accumsan lacus. Risus commodo viverra sebfd dho eiusmod tempor maecenas accumsan lacus.
                  </p>
                </section>
        
                <section className=''>
                  <MDBRow>
                    <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
                      <h5 className='text-uppercase'> About Us</h5>
        
                      <ul className='list-unstyled mb-0'>
                        <li>
                          <a href='#!' className='text-white'>
                          Online Learning
                          </a>
                        </li>
                        <li>
                          <a href='#!' className='text-white'>
                          About Us
                          </a>
                        </li>
                        <li>
                          <a href='#!' className='text-white'>
                          Careers
                          </a>
                        </li>
                        <li>
                          <a href='#!' className='text-white'>
                          Press Center
                          </a>
                        </li>
                      </ul>
                    </MDBCol>
        
                    <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
                      <h5 className='text-uppercase'>Campus</h5>
        
                      <ul className='list-unstyled mb-0'>
                        <li>
                          <a href='#!' className='text-white'>
                          Academic Solutions
                          </a>
                        </li>
                        <li>
                          <a href='#!' className='text-white'>
                          Free Trial
                          </a>
                        </li>
                        <li>
                          <a href='#!' className='text-white'>
                          Business Solutions
                          </a>
                        </li>
                        <li>
                          <a href='#!' className='text-white'>
                          Government Solutions
                          </a>
                        </li>
                      </ul>
                    </MDBCol>
        
                    <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
                      <h5 className='text-uppercase'>Study</h5>
        
                      <ul className='list-unstyled mb-0'>
                        <li>
                          <a href='#!' className='text-white'>
                          Admissions Policy
                          </a>
                        </li>
                        <li>
                          <a href='#!' className='text-white'>
                          Getting Started
                          </a>
                        </li>
                        <li>
                          <a href='#!' className='text-white'>
                          Online Application
                          </a>
                        </li>
                        <li>
                          <a href='#!' className='text-white'>
                          Visa Information
                          </a>
                        </li>
                      </ul>
                    </MDBCol>
        
                    <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
                      <h5 className='text-uppercase'>Spport</h5>
        
                      <ul className='list-unstyled mb-0'>
                        <li>
                          <a href='#!' className='text-white'>
                          Support
                          </a>
                        </li>
                        <li>
                          <a href='#!' className='text-white'>
                          Contact Us
                          </a>
                        </li>
                        <li>
                          <a href='#!' className='text-white'>
                          System Requirements
                          </a>
                        </li>
                        <li>
                          <a href='#!' className='text-white'>
                          Site Feedback
                          </a>
                        </li>
                      </ul>
                    </MDBCol>
                  </MDBRow>
                </section>
              </MDBContainer>
        
              <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                © Copyright ©2022 All rights reserved | This template is made with  by Abu Hanif
              
              </div>
            </MDBFooter>
        
    );
};

export default Footer;