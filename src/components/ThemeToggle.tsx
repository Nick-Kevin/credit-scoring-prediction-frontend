import React from 'react';
import { useTheme } from '../features/ThemeContext';

const ThemeToggle: React.FC = () => {
    const { toggleTheme } = useTheme();

    return (
        <button onClick={toggleTheme} className='bg-primary dark:bg-primary text-blue-600'>
            Switch theme
        </button>
    );
}

export default ThemeToggle
