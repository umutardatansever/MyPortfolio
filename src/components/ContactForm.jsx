import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { FaPaperPlane, FaCheckCircle } from 'react-icons/fa';

export default function ContactForm() {
    const { translations } = useLanguage();

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [isSent, setIsSent] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setError('');

        // Form validasyonu
        if (!formData.name || !formData.email || !formData.subject || !formData.message) {
            setError(translations.contact?.errorRequired || 'Lütfen tüm alanları doldurunuz.');
            return;
        }

        // Email validasyonu
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            setError(translations.contact?.errorEmail || 'Geçerli bir e-posta adresi giriniz.');
            return;
        }

        // Form gönderim simülasyonu
        setIsSent(true);

        setTimeout(() => {
            setIsSent(false);
            setFormData({ name: '', email: '', subject: '', message: '' });
        }, 3000);
    };

    const handleChange = (field, value) => {
        setFormData(prev => ({ ...prev, [field]: value }));
        if (error) setError('');
    };

    const inputStyle = {
        width: '100%',
        padding: '14px 20px',
        borderRadius: '12px',
        border: '1px solid var(--glass-border)',
        background: 'rgba(255, 255, 255, 0.05)',
        color: 'var(--text-main)',
        outline: 'none',
        transition: '0.3s all ease',
        fontSize: '1rem'
    };

    if (isSent) {
        return (
            <div style={{ textAlign: 'center', padding: '50px 20px' }}>
                <FaCheckCircle size={70} color="#10b981" style={{ marginBottom: '25px' }} />
                <h3 style={{
                    fontSize: '1.5rem',
                    marginBottom: '10px',
                    color: 'var(--text-main)'
                }}>
                    {translations.contact?.successTitle || 'Başarıyla Gönderildi!'}
                </h3>
                <p style={{
                    opacity: 0.8,
                    color: 'var(--text-main)'
                }}>
                    {translations.contact?.successMsg || 'En kısa sürede dönüş yapacağım.'}
                </p>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                <input
                    type="text"
                    placeholder={translations.contact?.formName || "Adınız"}
                    style={inputStyle}
                    value={formData.name}
                    onChange={(e) => handleChange('name', e.target.value)}
                    onFocus={(e) => e.target.style.borderColor = 'var(--primary)'}
                    onBlur={(e) => e.target.style.borderColor = 'var(--glass-border)'}
                />

                <input
                    type="email"
                    placeholder={translations.contact?.formEmail || "E-posta Adresiniz"}
                    style={inputStyle}
                    value={formData.email}
                    onChange={(e) => handleChange('email', e.target.value)}
                    onFocus={(e) => e.target.style.borderColor = 'var(--primary)'}
                    onBlur={(e) => e.target.style.borderColor = 'var(--glass-border)'}
                />

                <input
                    type="text"
                    placeholder={translations.contact?.formSubject || "Konu"}
                    style={inputStyle}
                    value={formData.subject}
                    onChange={(e) => handleChange('subject', e.target.value)}
                    onFocus={(e) => e.target.style.borderColor = 'var(--primary)'}
                    onBlur={(e) => e.target.style.borderColor = 'var(--glass-border)'}
                />

                <textarea
                    placeholder={translations.contact?.formMsg || "Mesajınız"}
                    rows="5"
                    style={{ ...inputStyle, resize: 'none' }}
                    value={formData.message}
                    onChange={(e) => handleChange('message', e.target.value)}
                    onFocus={(e) => e.target.style.borderColor = 'var(--primary)'}
                    onBlur={(e) => e.target.style.borderColor = 'var(--glass-border)'}
                />

                {error && (
                    <p style={{
                        color: '#ef4444',
                        fontSize: '0.9rem',
                        padding: '10px',
                        background: 'rgba(239, 68, 68, 0.1)',
                        borderRadius: '8px'
                    }}>
                        {error}
                    </p>
                )}

                <button
                    type="submit"
                    className="btn-modern"
                    style={{
                        width: '100%',
                        justifyContent: 'center',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px',
                        padding: '16px'
                    }}
                >
                    <FaPaperPlane /> {translations.contact?.formBtn || 'Mesaj Gönder'}
                </button>
            </div>
        </form>
    );
}
