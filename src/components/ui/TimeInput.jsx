import React, { useRef } from 'react';
import { Clock } from 'lucide-react';

const TimeInput = ({
    label,
    value,
    onChange,
    required = false,
    name,
    className = ""
}) => {
    const inputRef = useRef(null);

    const handleContainerClick = () => {
        if (inputRef.current) {
            inputRef.current.showPicker();
        }
    };

    const formatTime = (timeString) => {
        if (!timeString) return 'Select time';
        // Convert 24h to 12h format
        const [hours, minutes] = timeString.split(':');
        const date = new Date();
        date.setHours(parseInt(hours));
        date.setMinutes(parseInt(minutes));
        return date.toLocaleTimeString('en-US', {
            hour: 'numeric',
            minute: '2-digit',
            hour12: true
        });
    };

    return (
        <div className={`relative ${className}`}>
            {label && (
                <label className="block text-sm font-medium text-gray-700 mb-1">
                    {label} {required && '*'}
                </label>
            )}

            <div
                onClick={handleContainerClick}
                className={`
                    w-full px-3 py-2 border rounded-lg cursor-pointer flex items-center justify-between
                    bg-white transition-all duration-200 border-gray-200 hover:border-gray-300
                    focus-within:border-primary-orange focus-within:ring-2 focus-within:ring-primary-orange focus-within:ring-opacity-20
                `}
            >
                <span className={`${!value ? 'text-gray-400' : 'text-deep-black'}`}>
                    {formatTime(value)}
                </span>
                <Clock size={20} className="text-gray-400" />

                <input
                    ref={inputRef}
                    type="time"
                    name={name}
                    value={value}
                    onChange={onChange}
                    required={required}
                    className="absolute inset-0 opacity-0 cursor-pointer w-full h-full -z-10"
                    tabIndex={-1}
                />
            </div>
        </div>
    );
};

export default TimeInput;
