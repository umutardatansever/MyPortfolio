import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import profileData from '../data/profile.json';
import { 
  FaEnvelope, FaMapMarkerAlt, FaPaperPlane, FaCheckCircle, 
  FaGithub, FaLinkedin, FaInstagram, FaWhatsapp 
} from 'react-icons/fa';

export default function Contact() {
  const { translations } = useLanguage();
  
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSent, setIsSent] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setError('Lütfen tüm alanları doldurunuz.');
      return;
    }

    setIsSent(true);
    
    setTimeout(() => {
      setIsSent(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  return (
    <div style={{ width: '100%', maxWidth: '1000px', margin: '0 auto', padding: '40px 20px' }}>
      <div style={{ textAlign: 'center', marginBottom: '50px' }}>
        <h2 style={{ fontSize: '3rem', fontWeight: 800 }}>{translations.nav.contact}</h2>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '30px' }}>
        
        <div className="glass-card" style={{ padding: '40px', display: 'flex', flexDirection: 'column', gap: '30px' }}>
          <div>
            <h3 style={{ marginBottom: '20px', color: 'var(--primary)' }}>İletişim Bilgileri</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                <FaEnvelope color="var(--primary)" size={22} />
                <span style={{ fontSize: '0.85rem', fontWeight: 600 }}>umutarda.tansever@stu.rumeli.edu.tr</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                <FaWhatsapp color="#25D366" size={22} />
                <span style={{ fontWeight: 600 }}>+90 505 815 82 51</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                <FaMapMarkerAlt color="var(--secondary)" size={22} />
                <span style={{ fontWeight: 600 }}>İstanbul, Türkiye</span>
              </div>
            </div>
          </div>

          <div style={{ borderTop: '1px solid var(--glass-border)', paddingTop: '20px' }}>
            <p style={{ marginBottom: '15px', fontWeight: 600 }}>Beni Takip Edin</p>
            <div style={{ display: 'flex', gap: '20px' }}>
              <a href={profileData.social.github} target="_blank" rel="noreferrer" style={{ fontSize: '1.8rem', color: 'inherit' }}><FaGithub /></a>
              <a href={profileData.social.linkedin} target="_blank" rel="noreferrer" style={{ fontSize: '1.8rem', color: '#0077b5' }}><FaLinkedin /></a>
              <a href="https://instagram.com/umuutti" target="_blank" rel="noreferrer" style={{ fontSize: '1.8rem', color: '#E1306C' }}><FaInstagram /></a>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="glass-card" style={{ padding: '40px' }}>
          {isSent ? (
            <div style={{ textAlign: 'center', padding: '40px 0' }}>
              <FaCheckCircle size={60} color="#10b981" style={{ marginBottom: '20px' }} />
              <h3>Başarıyla Gönderildi!</h3>
              <p>En kısa sürede dönüş yapacağım.</p>
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
              <input 
                type="text" placeholder="Adınız" style={inputStyle}
                value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})}
              />
              <input 
                type="email" placeholder="E-posta Adresiniz" style={inputStyle}
                value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})}
              />
              <input 
                type="text" placeholder="Konu" style={inputStyle}
                value={formData.subject} onChange={(e) => setFormData({...formData, subject: e.target.value})}
              />
              <textarea 
                placeholder="Mesajınız" rows="4" style={{ ...inputStyle, resize: 'none' }}
                value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})}
              ></textarea>
              
              {error && <p style={{ color: '#ef4444', fontSize: '0.85rem' }}>{error}</p>}
              
              <button type="submit" className="btn-modern" style={{ width: '100%', justifyContent: 'center' }}>
                <FaPaperPlane /> {translations.nav.contact} Gönder
              </button>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}

const inputStyle = {
  width: '100%', padding: '12px 18px', borderRadius: '10px',
  border: '1px solid var(--glass-border)', background: 'rgba(255, 255, 255, 0.05)',
  color: 'var(--text-main)', outline: 'none', transition: '0.3s'
};