import React from 'react';
import img1 from '../../Images/notfound.jpg'
import './NotFound.css'

const NotFound = () => {
    return (
        <div className='notFound'>
            <img src={img1} alt="" />
        </div>
    );
};

export default NotFound;