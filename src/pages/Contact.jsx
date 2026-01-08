import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import profileData from '../data/profile.json';
import ContactForm from '../components/ContactForm';
import SocialLinks from '../components/SocialLinks';
import { FaEnvelope, FaMapMarkerAlt, FaWhatsapp } from 'react-icons/fa';

export default function Contact() {
  const { translations } = useLanguage();

  return (
    <div style={{ width: '100%', maxWidth: '1000px', margin: '0 auto', padding: '40px 20px' }}>
      <div style={{ textAlign: 'center', marginBottom: '50px' }}>
        <h2 style={{ fontSize: '3rem', fontWeight: 800, color: 'var(--text-main)' }}>
          {translations.contact?.title || translations.nav.contact}
        </h2>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '30px' }}>

        {/* İletişim Bilgileri */}
        <div className="glass-card" style={{ padding: '40px', display: 'flex', flexDirection: 'column', gap: '30px' }}>
          <div>
            <h3 style={{ marginBottom: '20px', color: 'var(--primary)', fontWeight: 700 }}>
              {translations.contact?.infoTitle || 'İletişim Bilgileri'}
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                <FaEnvelope color="var(--primary)" size={22} />
                <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-main)' }}>
                  {profileData.email}
                </span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                <FaWhatsapp color="#25D366" size={22} />
                <span style={{ fontWeight: 600, color: 'var(--text-main)' }}>
                  {profileData.phone}
                </span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                <FaMapMarkerAlt color="var(--secondary)" size={22} />
                <span style={{ fontWeight: 600, color: 'var(--text-main)' }}>
                  {profileData.location}
                </span>
              </div>
            </div>
          </div>

          <div style={{ borderTop: '1px solid var(--glass-border)', paddingTop: '20px' }}>
            <p style={{ marginBottom: '15px', fontWeight: 600, color: 'var(--text-main)' }}>
              {translations.contact?.followTitle || 'Beni Takip Edin'}
            </p>
            <SocialLinks social={profileData.social} size="1.8rem" />
          </div>
        </div>

        {/* İletişim Formu */}
        <div className="glass-card" style={{ padding: '40px' }}>
          <ContactForm />
        </div>
      </div>
    </div>
  );
}