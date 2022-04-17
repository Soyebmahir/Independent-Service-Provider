
import useServices from '../../../Hooks/useServices/useServices';

import Service from '../Service/Service';

const Services = () => {
    const [services] = useServices()
    console.log(services);
    return (
        <div className='container'>
            <h2 className='text-info text-center'>{services.length} Services Available</h2>

            <div className=' row row-cols-1 row-cols-md-2 row-cols-lg-3'>
                {
                    services.map((service) => <Service
                        key={service.id}
                        service={service}></Service>)
                }
            </div>

        </div>
    );
};

export default Services;