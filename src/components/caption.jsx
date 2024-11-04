import React from 'react';

const Caption = ({ name }) => {
    return (
        <h2 className="text-white font-bold font text-4xl text-center py-8">
            {name}
        </h2>
    );
};

export default Caption;