import React from 'react';

const Input = React.forwardRef(({ label, error, className = '', ...props }, ref) => {
    return (
        <div className="w-full">
            {label && (
                <label className="block text-sm font-medium text-deep-black mb-1.5">
                    {label}
                </label>
            )}
            <input
                ref={ref}
                className={`w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:border-primary-orange focus:ring-1 focus:ring-primary-orange outline-none transition-all ${error ? 'border-red-500' : ''} ${className}`}
                {...props}
            />
            {error && (
                <p className="mt-1 text-sm text-red-500">{error}</p>
            )}
        </div>
    );
});

Input.displayName = 'Input';

export default Input;
