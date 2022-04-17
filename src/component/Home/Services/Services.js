import React from 'react';
import useServices from '../../../Hooks/useServices/useServices';

const Services = () => {
    const { services } = useServices()
    console.log(services);
    return (
        <div>

        </div>
    );
};

export default Services;