import React from 'react';
import img1 from '../../Images/mahir.jpg'

const About = () => {
    return (
        <div className='container w-50'>
            <div>
                <h1 className='text-center'>Story of <br /><span className='text-danger'>Soyeb Mohammad</span> </h1>
            </div>
            <div>
                <p> I've completed my graduation in this year from Daffodil International University on Computer Science Engineering.
                    For the past two years, I have been working on various computer related projects. As a student of CSE background I've excellence subjective knowledge on basic hardware, Network Operating Systems, LAN, WAN, VPN and slite idea on others programs which is convenient to my work.During my academic years I have also completed Networking course which is mandatory for a CSE student.</p>

            </div>
            <div>
                <img className='photo rounded mx-auto d-block' src={img1} alt="" />

            </div>
            <div className='d-flex align-items-center'>
                <div style={{ height: '1px' }} className='bg-primary w-50'></div>
                <p className='mt-2 px-2'>&</p>
                <div style={{ height: '1px' }} className='bg-primary w-50'></div>
            </div>
            <div>
                <p>I organise tours in my spare time. I have been working as a travel guide since 2016. Because of this I have gained the experience of touring different places of the country and have the opportunity to mix with countless people. There is a desire to do something about it on a large scale in the future, like a travel agency
                </p>
            </div>

        </div>
    );
};

export default About;