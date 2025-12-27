import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';
import { 
  FaHome, FaUser, FaTools, FaLaptopCode, FaEnvelope 
} from 'react-icons/fa';
import { HiMoon, HiSun } from 'react-icons/hi'; 

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const { translations, toggleLanguage, lang } = useLanguage();
  const location = useLocation();

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
    <nav style={{
      position: 'fixed', top: '25px', left: '50%', transform: 'translateX(-50%)',
      width: '95%', maxWidth: '1200px', height: '80px', zIndex: 1000,
      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      padding: '0 40px', borderRadius: '24px'
    }} className="glass-card">
      
      <div style={{ 
        fontWeight: 900, fontSize: '1.2rem', letterSpacing: '1px',
        background: 'linear-gradient(to right, var(--primary), var(--secondary))',
        WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', whiteSpace: 'nowrap'
      }}>
        UMUT ARDA TANSEVER
      </div>
      
      <div style={{ display: 'flex', gap: '25px' }}>
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

      <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
        
        <button onClick={toggleLanguage} style={btnStyle}>
          <span style={{ opacity: lang === 'tr' ? 1 : 0.3, transition: '0.3s' }}>TR</span>
          <span style={{ margin: '0 5px', opacity: 0.2 }}>|</span>
          <span style={{ opacity: lang === 'en' ? 1 : 0.3, transition: '0.3s' }}>EN</span>
        </button>
        
        <button 
          onClick={toggleTheme} 
          style={{
            ...btnStyle, 
            background: theme === 'light' ? '#ffffff' : '#1e293b', 
            color: theme === 'light' ? '#f59e0b' : '#a855f7', 
            width: '55px', 
            height: '55px', 
            fontSize: '1.8rem',
            border: theme === 'light' ? '2px solid rgba(245, 158, 11, 0.5)' : '2px solid rgba(139, 92, 246, 0.5)',
            boxShadow: theme === 'light' 
              ? '0 0 20px rgba(245, 158, 11, 0.4), 0 0 40px rgba(245, 158, 11, 0.1)' 
              : '0 0 25px rgba(139, 92, 246, 0.5), 0 0 50px rgba(139, 92, 246, 0.2)',
            transition: 'all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'scale(1.15) rotate(15deg)';
            e.currentTarget.style.boxShadow = theme === 'light' 
              ? '0 0 35px rgba(245, 158, 11, 0.6), 0 0 70px rgba(245, 158, 11, 0.3)' 
              : '0 0 40px rgba(139, 92, 246, 0.7), 0 0 80px rgba(139, 92, 246, 0.4)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'scale(1) rotate(0deg)';
            e.currentTarget.style.boxShadow = theme === 'light' 
              ? '0 0 20px rgba(245, 158, 11, 0.4), 0 0 40px rgba(245, 158, 11, 0.1)' 
              : '0 0 25px rgba(139, 92, 246, 0.5), 0 0 50px rgba(139, 92, 246, 0.2)';
          }}
        >
          {theme === 'light' ? <HiMoon /> : <HiSun />}
        </button>
      </div>
    </nav>
  );
}