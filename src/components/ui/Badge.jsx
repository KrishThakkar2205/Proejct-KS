import React from 'react';

const Badge = ({ children, variant = 'default', className = '' }) => {
    const variants = {
        default: 'bg-gray-100 text-gray-800',
        success: 'bg-green-100 text-success-green',
        warning: 'bg-orange-100 text-warning-amber',
        info: 'bg-blue-100 text-alert-blue',
        orange: 'bg-orange-100 text-primary-orange',
    };

    return (
        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${variants[variant]} ${className}`}>
            {children}
        </span>
    );
};

export default Badge;
