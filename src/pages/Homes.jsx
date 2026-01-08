import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { FaDownload } from 'react-icons/fa';
import SocialLinks from '../components/SocialLinks';
import profileData from '../data/profile.json';
import myCV from '../assets/CV.pdf';

export default function Homes() {
  const { translations } = useLanguage();

  if (!translations || !translations.home) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh' }}>
        <p style={{ color: 'var(--text-main)', fontSize: '1.2rem' }}>Loading...</p>
      </div>
    );
  }

  const allImages = import.meta.glob('../assets/*.{png,jpg,jpeg,svg,webp}', { eager: true });
  const profileImg = allImages['../assets/ben.jpeg']?.default || "https://via.placeholder.com/180";

  return (
    <main style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '80vh',
      padding: '20px',
      textAlign: 'center'
    }}>
      <div className="glass-card" style={{ padding: '60px', maxWidth: '850px', width: '100%', borderRadius: '30px' }}>

        {/* Profil Fotoğrafı */}
        <div style={{ marginBottom: '35px', display: 'flex', justifyContent: 'center' }}>
          <div style={{
            width: '180px',
            height: '180px',
            borderRadius: '50%',
            overflow: 'hidden',
            border: '4px solid var(--primary)',
            boxShadow: '0 10px 30px rgba(99, 102, 241, 0.2)',
            background: '#f3f4f6'
          }}>
            <img
              src={profileImg}
              alt={profileData.name}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover'
              }}
            />
          </div>
        </div>

        {/* İsim */}
        <h1 style={{ fontSize: '3.8rem', fontWeight: 800, color: 'var(--text-main)', marginBottom: '10px' }}>
          {translations.home.title}
        </h1>

        {/* Ünvan */}
        <h2 style={{ fontSize: '1.6rem', color: 'var(--primary)', marginBottom: '25px', fontWeight: 600 }}>
          {translations.home.subtitle}
        </h2>

        {/* Açıklama */}
        <p style={{
          fontSize: '1.25rem',
          color: 'var(--text-main)',
          opacity: 0.8,
          lineHeight: '1.7',
          maxWidth: '650px',
          margin: '0 auto 40px'
        }}>
          {translations.home.description}
        </p>

        {/* Sosyal Medya Linkleri */}
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '45px' }}>
          <SocialLinks social={profileData.social} size="2.2rem" />
        </div>

        {/* CV İndir Butonu */}
        <a
          href={myCV}
          download="Umut_Arda_Tansever_CV.pdf"
          className="btn-modern"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '12px',
            padding: '18px 45px',
            fontSize: '1.15rem',
            textDecoration: 'none',
            borderRadius: '15px',
            fontWeight: 700,
            cursor: 'pointer'
          }}
        >
          <FaDownload /> {translations.home.downloadCV}
        </a>
      </div>
    </main>
  );
}