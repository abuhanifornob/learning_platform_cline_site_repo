import React, { useState } from 'react';
import { GoogleAuthProvider } from 'firebase/auth';

import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { FaGithub, FaGoogle } from "react-icons/fa";
import ContextProvider, { AuthContext } from '../../../context/ContextProvider/ContextProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
const provider = new GoogleAuthProvider();

const SingUp = () => {
    const { user, createUserEmailAndPassword, userUpdateProfile } = useContext(AuthContext);
    const [error, setError] = useState('');
    const [accepted, setAccepted] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || '/';

    const handleSignUp = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        createUserEmailAndPassword(email, password)
            .then(result => {

                console.log(user);
                setError("");
                form.reset();
                handleProfileUpdate(name, photo);
                toast.success("!! User Create Profole Successs!!")
                navigate(from, { replace: true });
            })
            .then(error => {
                console.error("Error", error)
                setError(error.message);
            }
            )


    }

    const handleProfileUpdate = (name, photo) => {
        const profile = {
            displayName: name,
            photoURL: photo
        }
        userUpdateProfile(profile)
            .then(() => { })
            .then(error => {
                console.log("Error", error)
                setError(error.message)

            })
    }

    const handleAccepted = event => {
        setAccepted(event.target.checked)
    }


    return (

        <Form onSubmit={handleSignUp} className='mt-5 bg-primary p-5 rounded shadow-lg p-3 mb-5 bg-body rounded'>
            <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label className='fw-bolder'>Your Full Name</Form.Label>
                <Form.Control type="text" name='name' placeholder="Enter Your Full Name" required />

            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicURL">
                <Form.Label className='fw-bolder'>Your Photo URL</Form.Label>
                <Form.Control type="text" name='photo' placeholder="Enter Your Photo URL" required />

            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className='fw-bolder'>Email address</Form.Label>
                <Form.Control type="email" name='email' placeholder="Enter email" required />

            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label className='fw-bolder'>Password</Form.Label>
                <Form.Control type="password" name='password' placeholder="Password" required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check
                    type="checkbox"
                    onClick={handleAccepted}
                    label={<>Accept <Link to="/terms">Terms and conditions</Link></>} />

            </Form.Group>
            <Button variant="primary" type="submit" disabled={!accepted} className='mb-5'>
                Sign Up
            </Button>
            <Form.Text className="text-danger">
                {error}
            </Form.Text>

        </Form>
    );
};

export default SingUp;