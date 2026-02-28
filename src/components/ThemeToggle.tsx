import React from 'react';
import { useTheme } from '../features/ThemeContext';
import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";

const ThemeToggle: React.FC = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <button onClick={toggleTheme}>
            {
                theme === 'light' ?
                    (<MdOutlineLightMode className='text-xl text-black dark:text-white'/>)
                :
                    (<MdOutlineDarkMode className='text-xl text-black dark:text-white'/>)
            }
        </button>
    );
}

export default ThemeToggle
