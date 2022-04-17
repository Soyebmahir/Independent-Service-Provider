import React from 'react';
import { Carousel } from 'react-bootstrap';



const Banner = () => {

    return (
        <div className='container shadow rounded p-3 mb-2 bg-body'>

            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        height="700px"
                        src="https://images.ctfassets.net/u0haasspfa6q/5UyqvlWv1EOyq8IaSGk2el/f0645cd8f2a6d76457682f857d2fb186/alekzan-powell-5t5krHi1LQ8-unsplash"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3 className='text-info'>Portrait Photography</h3>

                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        height="700px"
                        src="https://dvyvvujm9h0uq.cloudfront.net/com/articles/1593544514-899073-viktor-juric-yhgwqxukabs-unsplashjpg.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3 className=' text-info' >Fashion Photography</h3>

                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        height="700px"
                        src="https://picturecorrect-wpengine.netdna-ssl.com/wp-content/uploads/2013/02/sports-photography-tips.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3 className='text-info'>Sports Photography</h3>

                    </Carousel.Caption>
                </Carousel.Item>

            </Carousel>

        </div>


    );
};

export default Banner;