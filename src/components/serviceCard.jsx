import React from 'react';
import { Services } from "../Data";

const ServiceCard = () => {
    return (
        <div className="flex justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 lg:gap-12 px-4 sm:px-8 md:px-12 lg:px-16 py-10 lg:py-20">
                {Services.map((service, index) => (
                    <div
                        key={index}
                        className="serviceWrapper flex flex-col items-center justify-center bg-cover bg-center text-white p-6 sm:p-8 md:p-10 rounded-lg"
                        style={{ backgroundImage: `url(${service.background})` }}
                    >
                        <div
                            className="icon bg-cover bg-center h-12 w-12 mb-4"
                            style={{ backgroundImage: `url(${service.icon})` }}
                        ></div>
                        <h2 className="text-lg md:text-xl font-semibold text-center mb-2">{service.name}</h2>
                        <p className="text-center text-sm md:text-base">{service.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ServiceCard;
