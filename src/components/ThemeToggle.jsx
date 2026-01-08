import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { HiMoon, HiSun } from 'react-icons/hi';

export default function ThemeToggle({ style = {} }) {
    const { theme, toggleTheme } = useTheme();

    return (
        <button
            onClick={toggleTheme}
            aria-label={theme === 'light' ? 'Dark mode' : 'Light mode'}
            style={{
                background: theme === 'light' ? '#ffffff' : '#1e293b',
                border: theme === 'light'
                    ? '2px solid rgba(245, 158, 11, 0.5)'
                    : '2px solid rgba(139, 92, 246, 0.5)',
                padding: '10px',
                borderRadius: '15px',
                cursor: 'pointer',
                color: theme === 'light' ? '#f59e0b' : '#a855f7',
                width: '45px',
                height: '45px',
                fontSize: '1.3rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: theme === 'light'
                    ? '0 0 15px rgba(245, 158, 11, 0.4)'
                    : '0 0 15px rgba(139, 92, 246, 0.5)',
                transition: 'all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                ...style
            }}
        >
            {theme === 'light' ? <HiMoon /> : <HiSun />}
        </button>
    );
}
