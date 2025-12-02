import React from 'react';

const PlaceholderPage = ({ title }) => {
    return (
        <div className="flex flex-col items-center justify-center h-[60vh] text-center">
            <h2 className="text-3xl font-bebas tracking-wide font-bold text-deep-black mb-4">{title}</h2>
            <p className="text-gray-600">This page is under construction.</p>
        </div>
    );
};

export default PlaceholderPage;
