import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { FaGraduationCap, FaBriefcase, FaHeart, FaUserAlt } from 'react-icons/fa';

export default function About() {
  const { translations } = useLanguage();

  if (!translations || !translations.about) {
    return <div style={{ padding: '40px', textAlign: 'center', color: 'var(--text-main)' }}>Loading...</div>;
  }

  return (
    <main style={{ padding: '40px 20px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '30px' }}>
      <h1 style={{ fontSize: '3rem', fontWeight: 800, marginBottom: '20px', color: 'var(--text-main)' }}>
        {translations.about?.title}
      </h1>

      <div style={{ width: '100%', maxWidth: '900px', display: 'flex', flexDirection: 'column', gap: '25px' }}>
        
        <div className="glass-card" style={{ padding: '30px' }}>
          <h3 style={{ display: 'flex', alignItems: 'center', gap: '12px', color: '#6366f1', marginBottom: '15px', fontWeight: 700 }}>
            <FaUserAlt /> {translations.about?.bioTitle}
          </h3>
          <p style={{ lineHeight: '1.8', opacity: 0.9, color: 'var(--text-main)', fontSize: '1.05rem' }}>
            {translations.about?.bioText}
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '25px' }}>
          
          <div className="glass-card" style={{ padding: '30px' }}>
            <h3 style={{ display: 'flex', alignItems: 'center', gap: '12px', color: '#6366f1', marginBottom: '20px', fontWeight: 700 }}>
              <FaGraduationCap /> {translations.about?.eduTitle}
            </h3>
            <div style={{ marginBottom: '20px' }}>
              <h4 style={{ fontWeight: 800, fontSize: '1.1rem', color: 'var(--text-main)' }}>{translations.about?.eduUni}</h4>
              <p style={{ opacity: 0.8, color: 'var(--text-main)' }}>{translations.about?.eduDept}</p>
              <p style={{ color: '#6366f1', fontWeight: 700, fontSize: '0.9rem' }}>2021 - {translations.about?.present}</p>
            </div>
            <div>
              <h4 style={{ fontWeight: 800, fontSize: '1.1rem', color: 'var(--text-main)' }}>Politechnika Częstochowska ({translations.about?.erasmusCountry})</h4>
              <p style={{ opacity: 0.8, color: 'var(--text-main)' }}>Computer Science - {translations.about?.erasmusTerm}</p>
              <p style={{ color: '#6366f1', fontWeight: 700, fontSize: '0.9rem' }}>2024</p>
            </div>
          </div>

          <div className="glass-card" style={{ padding: '30px' }}>
            <h3 style={{ display: 'flex', alignItems: 'center', gap: '12px', color: '#6366f1', marginBottom: '20px', fontWeight: 700 }}>
              <FaBriefcase /> {translations.about?.expTitle}
            </h3>
            <div style={{ marginBottom: '20px' }}>
              <h4 style={{ fontWeight: 800, fontSize: '1.1rem', color: 'var(--text-main)' }}>{translations.about?.erasmusCountry}</h4>
              <h5 style={{ fontWeight: 700, color: 'var(--text-main)' }}>{translations.about?.internTitle}</h5>
              <p style={{ color: '#6366f1', fontWeight: 700, fontSize: '0.9rem' }}>{translations.about?.internDate}</p>
              <p style={{ opacity: 0.8, marginTop: '8px', color: 'var(--text-main)', fontSize: '0.9rem' }}>{translations.about?.internDesc}</p>
            </div>
            <div>
              <h4 style={{ fontWeight: 800, fontSize: '1.1rem', color: 'var(--text-main)' }}>{translations.about?.volleyTitle}</h4>
              <h5 style={{ fontWeight: 700, color: 'var(--text-main)' }}>{translations.about?.volleySub}</h5>
              <p style={{ color: '#6366f1', fontWeight: 700, fontSize: '0.9rem' }}>{translations.about?.pastExp}</p>
              <p style={{ opacity: 0.8, marginTop: '8px', color: 'var(--text-main)', fontSize: '0.9rem' }}>{translations.about?.volleyDesc}</p>
            </div>
          </div>
        </div>

        <div className="glass-card" style={{ padding: '30px' }}>
          <h3 style={{ display: 'flex', alignItems: 'center', gap: '12px', color: '#6366f1', marginBottom: '20px', fontWeight: 700 }}>
            <FaHeart /> {translations.about?.hobbyTitle}
          </h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
            {translations.about?.hobbies?.map((hobby, index) => (
              <span key={index} style={{ 
                background: 'var(--btn-passive)', 
                color: 'var(--btn-text-passive)', 
                padding: '10px 22px', 
                borderRadius: '50px', 
                fontWeight: 600,
                fontSize: '0.9rem',
                border: '1px solid var(--glass-border)'
              }}>
                {hobby}
              </span>
            ))}
          </div>
        </div>

      </div>
    </main>
  );
}