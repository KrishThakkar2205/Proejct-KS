import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, Check } from 'lucide-react';

const Select = ({
    label,
    value,
    onChange,
    options = [],
    placeholder = "Select an option",
    className = "",
    required = false,
    name
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleSelect = (optionValue) => {
        // Create a synthetic event to match standard input onChange signature
        const event = {
            target: {
                name: name,
                value: optionValue
            }
        };
        onChange(event);
        setIsOpen(false);
    };

    // Find label for selected value
    const selectedOption = options.find(opt =>
        (typeof opt === 'object' ? opt.value : opt) === value
    );

    const displayValue = selectedOption
        ? (typeof selectedOption === 'object' ? selectedOption.label : selectedOption)
        : placeholder;

    return (
        <div className={`relative ${className}`} ref={dropdownRef}>
            {label && (
                <label className="block text-sm font-medium text-gray-700 mb-1">
                    {label} {required && '*'}
                </label>
            )}

            <div
                onClick={() => setIsOpen(!isOpen)}
                className={`
                    w-full px-3 py-2 border rounded-lg cursor-pointer flex items-center justify-between
                    bg-white transition-all duration-200
                    ${isOpen
                        ? 'border-primary-orange ring-2 ring-primary-orange ring-opacity-20'
                        : 'border-gray-200 hover:border-gray-300'
                    }
                `}
            >
                <span className={`${!value ? 'text-gray-400' : 'text-deep-black'}`}>
                    {displayValue}
                </span>
                <ChevronDown
                    size={20}
                    className={`text-gray-400 transition-transform duration-200 ${isOpen ? 'transform rotate-180' : ''}`}
                />
            </div>

            {isOpen && (
                <div className="absolute z-50 w-full mt-1 bg-white border border-gray-100 rounded-lg shadow-lg max-h-60 overflow-y-auto animate-fadeIn">
                    {options.map((option, index) => {
                        const optValue = typeof option === 'object' ? option.value : option;
                        const optLabel = typeof option === 'object' ? option.label : option;
                        const isSelected = optValue === value;

                        return (
                            <div
                                key={index}
                                onClick={() => handleSelect(optValue)}
                                className={`
                                    px-3 py-2.5 text-sm cursor-pointer flex items-center justify-between
                                    transition-colors duration-150
                                    ${isSelected
                                        ? 'bg-orange-50 text-primary-orange font-medium'
                                        : 'text-gray-700 hover:bg-gray-50'
                                    }
                                `}
                            >
                                <span>{optLabel}</span>
                                {isSelected && <Check size={16} className="text-primary-orange" />}
                            </div>
                        );
                    })}
                    {options.length === 0 && (
                        <div className="px-3 py-2.5 text-sm text-gray-400 text-center">
                            No options available
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default Select;
