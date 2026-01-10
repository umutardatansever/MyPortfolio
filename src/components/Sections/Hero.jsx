import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { FaDownload } from 'react-icons/fa';
import SocialLinks from '../UI/SocialLinks';
import profileData from '../../data/profile.json';
import cvTR from '../../assets/CVtr.pdf';
import cvEN from '../../assets/CVen.pdf';
import './Hero.css';

export default function Hero() {
    const { translations, lang } = useLanguage();

    // Dil seçimine göre CV dosyasını belirle
    const currentCV = lang === 'tr' ? cvTR : cvEN;
    const cvFileName = lang === 'tr' ? 'Umut_Arda_Tansever_CV_TR.pdf' : 'Umut_Arda_Tansever_CV_EN.pdf';

    if (!translations || !translations.hero) {
        return (
            <div className="hero-loading">
                <p>Loading...</p>
            </div>
        );
    }

    const allImages = import.meta.glob('../../assets/*.{png,jpg,jpeg,svg,webp}', { eager: true });
    const profileImg = allImages['../../assets/ben.jpeg']?.default || "https://via.placeholder.com/180";

    return (
        <section className="hero-section">
            <div className="hero-card glass-card">
                {/* Profil Fotoğrafı */}
                <div className="hero-avatar-wrapper">
                    <div className="hero-avatar">
                        <img src={profileImg} alt={profileData.name} />
                    </div>
                </div>

                {/* İsim */}
                <h1 className="hero-name">
                    {translations.hero.greeting}
                </h1>

                {/* Ünvan */}
                <h2 className="hero-title">
                    {translations.hero.subtitle}
                </h2>

                {/* Açıklama */}
                <p className="hero-description">
                    {translations.hero.description}
                </p>

                {/* Sosyal Medya Linkleri */}
                <div className="hero-social">
                    <SocialLinks social={profileData.social} size="2.2rem" />
                </div>

                {/* CV İndir Butonu */}
                <a
                    href={currentCV}
                    download={cvFileName}
                    className="hero-cv-btn btn-modern"
                >
                    <FaDownload /> {translations.hero.downloadCV}
                </a>
            </div>
        </section>
    );
}
