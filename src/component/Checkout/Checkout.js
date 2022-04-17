import React from 'react';
import { useParams } from 'react-router-dom';

const Checkout = () => {
    const { serviceId } = useParams()
    return (
        <div>
            <h1>Servie id {serviceId}</h1>
            <div>
                <div>

                </div>
                <div>

                </div>
            </div>
        </div>
    );
};

export default Checkout;