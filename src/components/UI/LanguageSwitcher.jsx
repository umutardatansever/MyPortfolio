import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import './LanguageSwitcher.css';

export default function LanguageSwitcher() {
    const { lang, toggleLanguage } = useLanguage();

    return (
        <button onClick={toggleLanguage} className="language-switcher">
            <span className={`language-switcher-lang ${lang === 'tr' ? 'active' : 'inactive'}`}>
                TR
            </span>
            <span className="language-switcher-divider">|</span>
            <span className={`language-switcher-lang ${lang === 'en' ? 'active' : 'inactive'}`}>
                EN
            </span>
        </button>
    );
}
