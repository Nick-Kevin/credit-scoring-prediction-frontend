import React from "react";

interface InputProps {
    id: string,
    label: string,
    type: string,
    defaultValue: number | string,
    min?: number,
    max?: number,
    step?: number
};

const Input: React.FC<InputProps> = ({ id, label, type, defaultValue, min, max, step }): React.JSX.Element => {
    return (
        <div className="flex flex-col">
            <label htmlFor={id} className="text-sm mb-2">
                {label}
            </label>
            <input
                type         = {type}
                id           = {id}
                name         = {id}
                min          = {`${min}`}
                max          = {`${max}`}
                step         = {`${step}`}
                defaultValue = {defaultValue}
                className    = "border border-gray-300 p-3.5 py-1.5 rounded-lg focus:outline focus:outline-blue-600"
            />
        </div>
    );
};

export default Input;
