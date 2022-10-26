import React from 'react';
import { GoogleAuthProvider } from 'firebase/auth';

import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { FaGithub, FaGoogle } from "react-icons/fa";
import ContextProvider, { AuthContext } from '../../../context/ContextProvider/ContextProvider';
const provider =new GoogleAuthProvider();

const SingUp = () => {
    const {user,createUserEmailAndPassword,userUpdateProfile}=useContext(AuthContext);

    const handleSignUp=(event)=>{
        event.preventDefault();
         const form=event.target;
         const name=form.name.value;
         const photo=form.photo.value;
         const email=form.email.value;
         const password=form.password.value;
         const profile={displayName:name,photoURL:photo}
          createUserEmailAndPassword(email,password)
          .then(result=>{
            handleProfileUpdate(profile);
            const user=result.user;
            console.log(user);
           
            form.reset();
          })
          .then(error=>console.error("Error",error))
          
          
    }
    
    const handleProfileUpdate=(profile)=>{
        userUpdateProfile(profile)
        .then(()=>{})
        .then(error=>console.log("Error",error))
    }


    return (
    
        <Form onSubmit={handleSignUp} className='mt-5 bg-primary p-5 rounded shadow-lg p-3 mb-5 bg-body rounded'>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className='fw-bolder'>Your Full Name</Form.Label>
                <Form.Control type="text" name='name' placeholder="Enter Your Full Name" />

            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className='fw-bolder'>Your Photo URL</Form.Label>
                <Form.Control type="text" name='photo' placeholder="Enter Your Photo URL" />

            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className='fw-bolder'>Email address</Form.Label>
                <Form.Control type="email" name='email' placeholder="Enter email" />

            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label className='fw-bolder'>Password</Form.Label>
                <Form.Control type="password" name='password' placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit" className='mb-5'>
                Sign Up
            </Button>
        
        </Form>
    );
};

export default SingUp;