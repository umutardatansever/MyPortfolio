import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  const { translations } = useLanguage();
  const currentYear = new Date().getFullYear();


  const iconStyle = {
    color: 'var(--text-main)',
    fontSize: '1.5rem',
    transition: 'all 0.3s ease',
    opacity: 0.7
  };

  return (
    <footer className="glass-card" style={{
      margin: '40px auto 20px',
      width: '95%',
      maxWidth: '1200px',
      padding: '40px 20px',
      textAlign: 'center',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '20px',
      border: '1px solid var(--glass-border)' 
    }}>
      
      <div style={{ display: 'flex', gap: '25px' }}>
        
       
        <a 
          href="https://github.com/umutardatansever" 
          target="_blank" 
          rel="noopener noreferrer"
          style={{ textDecoration: 'none' }}
          onMouseEnter={(e) => e.currentTarget.firstChild.style.opacity = 1}
          onMouseLeave={(e) => e.currentTarget.firstChild.style.opacity = 0.7}
        >
          <FaGithub style={iconStyle} />
        </a>
        
        <a 
          href="https://www.linkedin.com/in/umut-arda-tansever-15606a369/" 
          target="_blank" 
          rel="noopener noreferrer"
          style={{ textDecoration: 'none' }}
          onMouseEnter={(e) => e.currentTarget.firstChild.style.opacity = 1}
          onMouseLeave={(e) => e.currentTarget.firstChild.style.opacity = 0.7}
        >
          <FaLinkedin style={{ ...iconStyle, color: '#0077b5' }} />
        </a>

        <a 
          href="https://instagram.com/umuutti" 
          target="_blank" 
          rel="noopener noreferrer"
          style={{ textDecoration: 'none' }}
          onMouseEnter={(e) => e.currentTarget.firstChild.style.opacity = 1}
          onMouseLeave={(e) => e.currentTarget.firstChild.style.opacity = 0.7}
        >
          <FaInstagram style={{ ...iconStyle, color: '#e4405f' }} />
        </a>
      </div>

      <div style={{ width: '50px', height: '2px', background: 'var(--primary)', opacity: 0.3 }}></div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
        <span style={{ fontWeight: 800, letterSpacing: '1px', color: 'var(--primary)' }}>
          UMUT ARDA TANSEVER
        </span>
        <p style={{ opacity: 0.6, fontSize: '0.85rem', color: 'var(--text-main)' }}>
          © {currentYear} | {translations.footer?.rights || "Tüm Hakları Saklıdır."}
        </p>
      </div>
    </footer>
  );
}