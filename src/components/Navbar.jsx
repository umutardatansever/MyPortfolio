import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import ThemeToggle from './ThemeToggle';
import LanguageSwitcher from './LanguageSwitcher';
import {
  FaHome, FaUser, FaTools, FaLaptopCode, FaEnvelope, FaBars, FaTimes
} from 'react-icons/fa';

export default function Navbar() {
  const { translations, lang, toggleLanguage } = useLanguage();
  const location = useLocation();

  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const isActive = (path) => location.pathname === path;

  const btnStyle = {
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
    fontSize: '0.9rem'
  };

  const navLinkStyle = (path) => ({
    textDecoration: 'none',
    color: 'var(--text-main)',
    fontWeight: 700,
    fontSize: '0.95rem',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    opacity: isActive(path) ? 1 : 0.6,
    borderBottom: isActive(path) ? '3px solid var(--primary)' : '3px solid transparent',
    paddingBottom: '5px',
    transition: '0.3s all ease'
  });

  return (
    <>
      <nav style={{
        position: 'fixed', top: '25px', left: '50%', transform: 'translateX(-50%)',
        width: '95%', maxWidth: '1200px', height: '80px', zIndex: 1000,
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        padding: '0 40px', borderRadius: '24px'
      }} className="glass-card">

        {/* Logo */}
        <div style={{
          fontWeight: 900, fontSize: '1.2rem', letterSpacing: '1px',
          background: 'linear-gradient(to right, var(--primary), var(--secondary))',
          WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', whiteSpace: 'nowrap'
        }}>
          UMUT ARDA TANSEVER
        </div>

        {/* Desktop Menu */}
        <div className="desktop-menu" style={{ display: 'flex', gap: '25px' }}>
          <Link style={navLinkStyle('/')} to="/">
            <FaHome /> <span>{translations.nav.home}</span>
          </Link>
          <Link style={navLinkStyle('/hakkimda')} to="/hakkimda">
            <FaUser /> <span>{translations.nav.about}</span>
          </Link>
          <Link style={navLinkStyle('/yetenekler')} to="/yetenekler">
            <FaTools /> <span>{translations.nav.skills}</span>
          </Link>
          <Link style={navLinkStyle('/projeler')} to="/projeler">
            <FaLaptopCode /> <span>{translations.nav.projects}</span>
          </Link>
          <Link style={navLinkStyle('/iletisim')} to="/iletisim">
            <FaEnvelope /> <span>{translations.nav.contact}</span>
          </Link>
        </div>

        {/* Controls */}
        <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>

          <div className="desktop-controls" style={{ display: 'flex', gap: '15px' }}>
            <LanguageSwitcher />
            <ThemeToggle />
          </div>

          {/* Hamburger Button */}
          <button
            className="hamburger-btn"
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            style={{ ...btnStyle, display: 'none', width: '45px', height: '45px', padding: 0 }}
          >
            {isMobileOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isMobileOpen ? 'open' : ''}`} style={{
        position: 'fixed', top: 0, right: '-100%', width: '100%', height: '100vh',
        background: 'var(--glass-bg)', backdropFilter: 'blur(20px)', zIndex: 999,
        transition: '0.5s cubic-bezier(0.4, 0, 0.2, 1)', display: 'flex',
        flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '30px'
      }}>
        <Link style={navLinkStyle('/')} to="/" onClick={() => setIsMobileOpen(false)}>
          <FaHome size={24} /> <span style={{ fontSize: '1.5rem' }}>{translations.nav.home}</span>
        </Link>
        <Link style={navLinkStyle('/hakkimda')} to="/hakkimda" onClick={() => setIsMobileOpen(false)}>
          <FaUser size={24} /> <span style={{ fontSize: '1.5rem' }}>{translations.nav.about}</span>
        </Link>
        <Link style={navLinkStyle('/yetenekler')} to="/yetenekler" onClick={() => setIsMobileOpen(false)}>
          <FaTools size={24} /> <span style={{ fontSize: '1.5rem' }}>{translations.nav.skills}</span>
        </Link>
        <Link style={navLinkStyle('/projeler')} to="/projeler" onClick={() => setIsMobileOpen(false)}>
          <FaLaptopCode size={24} /> <span style={{ fontSize: '1.5rem' }}>{translations.nav.projects}</span>
        </Link>
        <Link style={navLinkStyle('/iletisim')} to="/iletisim" onClick={() => setIsMobileOpen(false)}>
          <FaEnvelope size={24} /> <span style={{ fontSize: '1.5rem' }}>{translations.nav.contact}</span>
        </Link>

        <div style={{ display: 'flex', gap: '20px', marginTop: '20px' }}>
          <button onClick={toggleLanguage} style={btnStyle}>
            {lang === 'tr' ? 'English' : 'Türkçe'}
          </button>
          <ThemeToggle />
        </div>
      </div>

      <style>{`
        @media (max-width: 992px) {
          .desktop-menu, .desktop-controls {
            display: none !important;
          }
          .hamburger-btn {
            display: flex !important;
          }
          .mobile-menu.open {
            right: 0 !important;
          }
        }
      `}</style>
    </>
  );
}