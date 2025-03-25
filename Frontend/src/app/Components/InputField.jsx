import React from 'react';

export const InputField = ({ 
    id, 
    name, 
    type, 
    placeholder, 
    value, 
    onChange, 
    icon, 
    rows 
}) => {
    return (
        <div className="form-group">
            <div className="relative">
                {type === "textarea" ? (
                    <textarea
                        id={id}
                        name={name}
                        placeholder={placeholder}
                        value={value}
                        onChange={onChange}
                        rows={rows || 4}
                        className=" w-full border border-gray-300 rounded-none p-3 pl-10 focus:outline-none"
                    />
                ) : (
                    <input
                    id={id}
                    type={type}
                    name={name}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    className="w-full border border-gray-300 rounded-none p-3 pl-10 focus:outline-none"
                />
                
                )}
                {icon && <span className="absolute left-3 top-[25px] transform -translate-y-1/2 text-[#c2c2c2]">{icon}</span>}
            </div>
        </div>
    );
};
