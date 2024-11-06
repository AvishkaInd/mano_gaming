import React from 'react';

const Caption = ({ image }) => {
    return (
        <div className="text-center w-full py-8 ">
            <img src={image} className="mx-auto"/>
        </div>

    );
};

export default Caption;