import React from 'react';
import {Services} from "../schema";

const ServiceCard = () => {
    return (
        <div className=" flex sm:flex md:flex lg:flex xl:flex justify-center sm:justify-center md:justify-center lg:justify-between xl:justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-4  md:gap-8 lg:gap-16 xl:gap-16 px-4 sm:px-2 md:px-2 lg:px-16 py-10 lg:py-20">
                {Services.map((service, index) => (
                    <div
                        key={index}
                        className="serviceWrapper flex flex-col items-center justify-center bg-cover bg-center text-white p-6 rounded-lg"
                        style={{backgroundImage: `url(${service.background})`}}
                    >
                        <div
                            className="icon bg-cover bg-center h-12 w-12 mb-4"
                            style={{backgroundImage: `url(${service.icon})`}}
                        ></div>
                        <h2 className="text-xl font-semibold text-center mb-2">{service.name}</h2>
                        <p className="text-center">{service.description}</p>
                    </div>
                ))}
            </div>
        </div>

    );
};

export default ServiceCard;