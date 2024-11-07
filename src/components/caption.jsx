import React from 'react';

const Caption = ({ image }) => {
    return (
        <div className="mx-auto text-center w-72 md:w-72 lg:w-full py-8 ">
            <img src={image} className="mx-auto"/>
        </div>

    );
};

export default Caption;