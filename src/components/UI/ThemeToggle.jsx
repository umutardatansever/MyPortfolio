import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import { HiMoon, HiSun } from 'react-icons/hi';
import './ThemeToggle.css';

export default function ThemeToggle() {
    const { theme, toggleTheme } = useTheme();

    return (
        <button
            onClick={toggleTheme}
            aria-label={theme === 'light' ? 'Dark mode' : 'Light mode'}
            className={`theme-toggle ${theme}`}
        >
            {theme === 'light' ? <HiMoon /> : <HiSun />}
        </button>
    );
}
