import React from 'react';
import { useNavigate } from 'react-router-dom';

const Service = ({ service }) => {

    const { name, id, price, img, description } = service;

    const navigate = useNavigate()

    const handleServiceDetails = (id) => {
        navigate(`/home/${id}`)

    }
    return (
        <div className='col gy-4 gx-2 shadow rounded p-3 mb-2 bg-body'>
            <div className="card shadow rounded mb-2 bg-body">
                <img src={img} style={{ "height": "300px" }} className=" w-100 card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">Price : {price} BDT</p>
                    <p className="card-text"><small>{description}</small></p>
                </div>
                <div className="card-footer d-block text-center">
                    <button onClick={() => handleServiceDetails(id)} className='btn btn-info '> Checkout</button>
                </div>
            </div>
        </div>
    );
};

export default Service;