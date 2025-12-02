import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';

const NotFound = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-light-gray text-center px-4">
            <h1 className="text-9xl font-bebas text-primary-orange mb-4">404</h1>
            <h2 className="text-3xl font-bebas text-deep-black mb-6">Page Not Found</h2>
            <p className="text-gray-600 mb-8 max-w-md">
                The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
            </p>
            <Link to="/">
                <Button>Go Home</Button>
            </Link>
        </div>
    );
};

export default NotFound;
