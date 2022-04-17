import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
    const emailRef = useRef('')
    const passwordRef = useRef('')
    const nevigate = useNavigate();
    const handleFormSubmit = (event) => {
        event.preventDefault()
        const email = emailRef.current.value
        const password = passwordRef.current.value
        console.log(email, password);
    }

    const navigateRegister = (event) => {
        nevigate('/register')
    }
    return (
        <div className='container w-50 mx-auto'>
            <h1 className='text-success'>Login please</h1>
            <Form onSubmit={handleFormSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Login
                </Button>
            </Form>
            <p>New to Genius Car Service ? <Link to={"/register"} className='text-danger pe-auto text-decoration-none' onClick={navigateRegister}>Register First</Link ></p>
        </div>
    );
};

export default Login;