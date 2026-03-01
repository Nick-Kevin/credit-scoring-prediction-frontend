import React from 'react';
import { useTheme } from '../features/ThemeContext';
import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";

interface ToggleProp {
    className?: string;
};

const ThemeToggle: React.FC<ToggleProp> = ({className}) => {
    const { theme, toggleTheme } = useTheme();

    return (
        <button onClick={toggleTheme} className={className}>
            {
                theme === 'light' ?
                    (<MdOutlineLightMode className='text-xl text-gray-600 dark:text-white'/>)
                :
                    (<MdOutlineDarkMode className='text-xl text-gray-600 dark:text-white'/>)
            }
        </button>
    );
}

export default ThemeToggle
