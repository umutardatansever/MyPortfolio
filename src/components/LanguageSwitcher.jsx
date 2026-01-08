import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function LanguageSwitcher({ style = {} }) {
    const { lang, toggleLanguage } = useLanguage();

    return (
        <button
            onClick={toggleLanguage}
            aria-label="Dil değiştir / Change language"
            style={{
                background: 'var(--glass-border)',
                border: '1px solid rgba(255,255,255,0.1)',
                padding: '10px 18px',
                borderRadius: '15px',
                cursor: 'pointer',
                fontWeight: 800,
                color: 'var(--text-main)',
                transition: '0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '0.9rem',
                ...style
            }}
        >
            <span style={{
                opacity: lang === 'tr' ? 1 : 0.3,
                transition: '0.3s'
            }}>
                TR
            </span>
            <span style={{ margin: '0 5px', opacity: 0.2 }}>|</span>
            <span style={{
                opacity: lang === 'en' ? 1 : 0.3,
                transition: '0.3s'
            }}>
                EN
            </span>
        </button>
    );
}
