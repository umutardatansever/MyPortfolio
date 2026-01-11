import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import profileData from '../../data/profile.json';
import ContactForm from '../UI/ContactForm';
import SocialLinks from '../UI/SocialLinks';
import { FaEnvelope, FaMapMarkerAlt, FaWhatsapp } from 'react-icons/fa';
import './Contact.css';

export default function Contact() {
    const { translations } = useLanguage();

    return (
        <section className="contact-section">
            <div className="contact-header">
                <h2 className="contact-title">
                    {translations.contact?.title || translations.nav.contact}
                </h2>
            </div>

            <div className="contact-grid">
                {/* İletişim Bilgileri */}
                <div className="contact-info-card glass-card">
                    <div>
                        <h3 className="contact-info-title">
                            {translations.contact?.infoTitle || 'İletişim Bilgileri'}
                        </h3>
                        <div className="contact-info-list">
                            <div className="contact-info-item">
                                <FaEnvelope color="var(--primary)" size={22} />
                                <span className="contact-info-text">
                                    {profileData.email}
                                </span>
                            </div>
                            <div className="contact-info-item">
                                <FaWhatsapp color="#25D366" size={22} />
                                <span className="contact-info-text">
                                    {profileData.phone}
                                </span>
                            </div>
                            <div className="contact-info-item">
                                <FaMapMarkerAlt color="var(--secondary)" size={22} />
                                <span className="contact-info-text">
                                    {translations.contact?.location || profileData.location}
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="contact-divider">
                        <p className="contact-follow-title">
                            {translations.contact?.followTitle || 'Beni Takip Edin'}
                        </p>
                        <SocialLinks social={profileData.social} size="1.8rem" />
                    </div>
                </div>

                {/* İletişim Formu */}
                <div className="contact-form-card glass-card">
                    <ContactForm />
                </div>
            </div>
        </section>
    );
}
