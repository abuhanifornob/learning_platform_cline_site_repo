import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import React, { useState } from 'react';
import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { FaGithub, FaGoogle } from "react-icons/fa";
import { useLocation, useNavigate } from 'react-router-dom';
import ContextProvider, { AuthContext } from '../../../context/ContextProvider/ContextProvider';
const provider =new GoogleAuthProvider();
const gitHubProvider=new GithubAuthProvider();

const SignIn = () => {
    const {sigInWithGoogle,signInEmailAndPassword,signInWithGithub,setLoading}=useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const [error, setError] = useState('');

    const from = location.state?.from?.pathname || '/';

    const handleSignIn=(event)=>{
        event.preventDefault();
         const form=event.target;
         const email=form.email.value;
         const password=form.password.value;
         console.log(email,password);
         signInEmailAndPassword(email,password)
         .then(result=>{
            const user=result.user;
            console.log(user);
            form.reset();
            setError('');
            navigate(from, {replace: true});
         })
         .catch(error=>{
            console.error(error)
            setError(error.message);
        })
        .finally(() => {
            setLoading(false);
        })
    
    }
    const handleGoogleSignIn=()=>{
        sigInWithGoogle(provider)
        .then(result=>{
            const user=result.user;
            console.log(user);
            navigate(from, {replace: true});
        })
        .catch(error=>{
            console.error("Error",error)
            setError(error.message);
        }
        )
        .finally(() => {
            setLoading(false);
        })    
    }
   
    const handleGithubLogIn=()=>{
        signInWithGithub(gitHubProvider)
        .then(result=>{
            const user=result.user;
            console.log(user);
            navigate(from, {replace: true});
        })
        .then(error=>{
            console.error('error',error)
            setError(error.message);
        }
            )
        .finally(() => {
            setLoading(false);
        })

    }


    return (
        <>
        <Form onSubmit={handleSignIn} className='mt-5 bg-primary p-5 rounded shadow-lg p-3 mb-5 bg-body rounded'>
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
            
                <Button onClick={handleGoogleSignIn} variant="outline-dark" className='px-5 mb-3 w-20 me-5'>
                   Google<FaGoogle className='ms-1'></FaGoogle>
                </Button>
            
             
               <Button onClick={handleGithubLogIn} variant="outline-dark" className='mb-3 px-5 btn btn-lg'>
                   Github<FaGithub className='ms-1'></FaGithub>
                </Button>
               
               
            </div>
            <Form.Text className="text-danger">
                {error}
            </Form.Text>
        </Form>
         
            </>

    );
};

export default SignIn;