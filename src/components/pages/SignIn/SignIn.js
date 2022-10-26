import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { FaGithub, FaGoogle } from "react-icons/fa";



const SignIn = () => {
    const handleSignIn=(event)=>{
        event.preventDefault();
         const form=event.target;
         const email=form.email.value;
         const password=form.password.value;
         console.log(email,password);
    
    }


    return (
        <>
        <Form onSubmit={handleSignIn} className='mt-5 '>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" name='email' placeholder="Enter email" />

            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" name='password' placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit" className='mb-5'>
                Sign In
            </Button>
            <br />
            <p className='fs-2 fw-bolder'>Sign In With </p>
            <div className='text-center d-flex'>
            
                <Button variant="outline-dark" className='px-5 mb-3 w-20 me-5'>
                   Google<FaGoogle className='ms-1'></FaGoogle>
                </Button>
            
             
               <Button variant="outline-dark" className='mb-3 px-5 btn btn-lg'>
                   Github<FaGithub className='ms-1'></FaGithub>
                </Button>
               
               
            </div>

        </Form>
          {/* <p className='fs-2 fw-bolder'>Sign In With </p>
            <div className='text-center d-flex'>
            
                <Button variant="outline-dark" className='px-5 mb-3 w-20 me-5'>
                   Google<FaGoogle className='ms-1'></FaGoogle>
                </Button>
            
             
               <Button variant="outline-dark" className='mb-3 px-5 btn btn-lg'>
                   Github<FaGithub className='ms-1'></FaGithub>
                </Button>
               
               
            </div> */}
            </>

    );
};

export default SignIn;