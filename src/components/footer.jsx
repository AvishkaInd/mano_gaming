import React from 'react';

const Footer = () => {
    return (
        <footer className="footer_custom text-white py-8">
            <div className="container mx-auto px-4">


                {/* Copyright Section */}
                <div className="text-center mt-4 text-gray-500">
                    © {new Date().getFullYear()}  |  All rights reserved
                </div>
            </div>
        </footer>
    );
};

export default Footer;