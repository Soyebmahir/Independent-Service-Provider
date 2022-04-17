import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Register = () => {
    const emailRef = useRef('')
    const passwordRef = useRef('')
    const nameRef = useRef('')
    // const nevigate = useNavigate();
    const handleFormSubmit = (event) => {
        event.preventDefault(event)
        event.preventDefault()
        // // console.log(event.target.email.value);
        // another way of getting these value
        // const email =event.target.email.value
        // const password =event.target.password.value
        // const name =event.target.name.value
        const email = emailRef.current.value
        const password = passwordRef.current.value
        const name = nameRef.current.value
        console.log(email, password, name);
    }

    return (
        <div className=" container w-50 mx-auto">
            <h1 className='text-success'>This is register</h1>
            <Form onSubmit={handleFormSubmit}>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control ref={nameRef} type="text" placeholder="Enter name" required />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Register
                </Button>
            </Form>
            <p>ALready have an Account ? <Link to={"/login"} className='text-danger pe-auto text-decoration-none' >Login please</Link ></p>
        </div>
    );
};

export default Register;