import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const Checkout = () => {
    const { serviceId } = useParams()
    const nameRef = useRef('')
    const addressRef = useRef('')
    const phoneRef = useRef('')
    const handleFormSubmit = (event) => {
        event.preventDefault()
        const name = nameRef.current.value
        const address = addressRef.current.value
        const phone = phoneRef.current.value
        console.log(name, address, phone);
    }
    return (
        <div>
            <h1 className='text-center text-success'>Servie id {serviceId}</h1>
            <div>
                <div className='container w-50 mx-auto d-flex flex-column min-vh-100'>
                    <h1 className='text-success'>Checkout Information Please</h1>
                    <Form onSubmit={handleFormSubmit}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Name</Form.Label>
                            <Form.Control ref={nameRef} type="text" placeholder="Enter name" />

                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Address</Form.Label>
                            <Form.Control ref={addressRef} type="text" placeholder="Address" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPhone">
                            <Form.Label>Phone</Form.Label>
                            <Form.Control ref={phoneRef} type="text" placeholder="Phone" />
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>




                </div >

            </div>
        </div>
    );
};

export default Checkout;