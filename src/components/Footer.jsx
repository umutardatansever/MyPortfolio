import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import SocialLinks from './SocialLinks';
import profileData from '../data/profile.json';

export default function Footer() {
  const { translations } = useLanguage();
  const currentYear = new Date().getFullYear();

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

      {/* Sosyal Medya Linkleri */}
      <SocialLinks social={profileData.social} size="1.5rem" />

      <div style={{ width: '50px', height: '2px', background: 'var(--primary)', opacity: 0.3 }}></div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
        <span style={{ fontWeight: 800, letterSpacing: '1px', color: 'var(--primary)' }}>
          {profileData.name.toUpperCase()}
        </span>
        <p style={{ opacity: 0.6, fontSize: '0.85rem', color: 'var(--text-main)' }}>
          © {currentYear} | {translations.footer?.rights || "Tüm Hakları Saklıdır."}
        </p>
      </div>
    </footer>
  );
}