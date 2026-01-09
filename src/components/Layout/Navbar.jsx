import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import ThemeToggle from '../UI/ThemeToggle';
import LanguageSwitcher from '../UI/LanguageSwitcher';
import {
    FaHome, FaUser, FaTools, FaLaptopCode, FaEnvelope, FaBars, FaTimes
} from 'react-icons/fa';
import './Navbar.css';

export default function Navbar() {
    const { translations, lang, toggleLanguage } = useLanguage();
    const location = useLocation();
    const [isMobileOpen, setIsMobileOpen] = useState(false);

    const isActive = (path) => location.pathname === path;

    return (
        <>
            <nav className="navbar glass-card">
                {/* Logo */}
                <div className="navbar-logo">
                    UMUT ARDA TANSEVER
                </div>

                {/* Desktop Menu */}
                <div className="desktop-menu">
                    <Link className={`nav-link ${isActive('/') ? 'active' : ''}`} to="/">
                        <FaHome /> <span>{translations.nav.home}</span>
                    </Link>
                    <Link className={`nav-link ${isActive('/hakkimda') ? 'active' : ''}`} to="/hakkimda">
                        <FaUser /> <span>{translations.nav.about}</span>
                    </Link>
                    <Link className={`nav-link ${isActive('/yetenekler') ? 'active' : ''}`} to="/yetenekler">
                        <FaTools /> <span>{translations.nav.skills}</span>
                    </Link>
                    <Link className={`nav-link ${isActive('/projeler') ? 'active' : ''}`} to="/projeler">
                        <FaLaptopCode /> <span>{translations.nav.projects}</span>
                    </Link>
                    <Link className={`nav-link ${isActive('/iletisim') ? 'active' : ''}`} to="/iletisim">
                        <FaEnvelope /> <span>{translations.nav.contact}</span>
                    </Link>
                </div>

                {/* Controls */}
                <div className="navbar-controls">
                    <div className="desktop-controls">
                        <LanguageSwitcher />
                        <ThemeToggle />
                    </div>

                    {/* Hamburger Button */}
                    <button
                        className="hamburger-btn"
                        onClick={() => setIsMobileOpen(!isMobileOpen)}
                    >
                        {isMobileOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
                    </button>
                </div>
            </nav>

            {/* Mobile Menu */}
            <div className={`mobile-menu ${isMobileOpen ? 'open' : ''}`}>
                <Link className={`nav-link ${isActive('/') ? 'active' : ''}`} to="/" onClick={() => setIsMobileOpen(false)}>
                    <FaHome size={24} /> <span className="mobile-nav-link">{translations.nav.home}</span>
                </Link>
                <Link className={`nav-link ${isActive('/hakkimda') ? 'active' : ''}`} to="/hakkimda" onClick={() => setIsMobileOpen(false)}>
                    <FaUser size={24} /> <span className="mobile-nav-link">{translations.nav.about}</span>
                </Link>
                <Link className={`nav-link ${isActive('/yetenekler') ? 'active' : ''}`} to="/yetenekler" onClick={() => setIsMobileOpen(false)}>
                    <FaTools size={24} /> <span className="mobile-nav-link">{translations.nav.skills}</span>
                </Link>
                <Link className={`nav-link ${isActive('/projeler') ? 'active' : ''}`} to="/projeler" onClick={() => setIsMobileOpen(false)}>
                    <FaLaptopCode size={24} /> <span className="mobile-nav-link">{translations.nav.projects}</span>
                </Link>
                <Link className={`nav-link ${isActive('/iletisim') ? 'active' : ''}`} to="/iletisim" onClick={() => setIsMobileOpen(false)}>
                    <FaEnvelope size={24} /> <span className="mobile-nav-link">{translations.nav.contact}</span>
                </Link>

                <div className="mobile-controls">
                    <button onClick={toggleLanguage} className="mobile-lang-btn">
                        {lang === 'tr' ? 'English' : 'Türkçe'}
                    </button>
                    <ThemeToggle />
                </div>
            </div>
        </>
    );
}
