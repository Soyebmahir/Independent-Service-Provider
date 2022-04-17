import React from 'react';

const Service = ({ service }) => {

    const { name, price, img, description } = service;
    return (
        <div className='col gy-4'>
            <div className="card ">
                <img src={img} style={{ "height": "300px" }} className=" w-100 card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">Price : {price} BDT</p>
                    <p className="card-text"><small>{description}</small></p>
                </div>
                <div className="card-footer">
                    <small className="text-muted">Last updated 3 mins ago</small>
                </div>
            </div>
        </div>
    );
};

export default Service;