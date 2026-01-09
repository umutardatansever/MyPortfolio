import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import SocialLinks from '../UI/SocialLinks';
import profileData from '../../data/profile.json';
import './Footer.css';

export default function Footer() {
    const { translations } = useLanguage();
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer glass-card">
            {/* Sosyal Medya Linkleri */}
            <SocialLinks social={profileData.social} size="1.5rem" />

            <div className="footer-divider"></div>

            <div className="footer-info">
                <span className="footer-name">
                    {profileData.name.toUpperCase()}
                </span>
                <p className="footer-copyright">
                    © {currentYear} | {translations.footer?.rights || "Tüm Hakları Saklıdır."}
                </p>
            </div>
        </footer>
    );
}
