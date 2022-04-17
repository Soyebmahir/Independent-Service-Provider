import React from 'react';


const Footer = () => {
    const date = new Date()
    const year = date.getFullYear()
    return (
        <div className='bg-dark ' style={{ height: "60px", margin: "10px", borderRadius: "15px", textAlign: "center" }} >

            <p className='text-light' >copy right @{year}</p>

        </div>
    );
};

export default Footer;