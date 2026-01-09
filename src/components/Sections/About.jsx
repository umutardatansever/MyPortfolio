import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { FaGraduationCap, FaBriefcase, FaHeart, FaUserAlt } from 'react-icons/fa';
import './About.css';

export default function About() {
    const { translations } = useLanguage();

    if (!translations || !translations.about) {
        return <div className="about-loading">Loading...</div>;
    }

    return (
        <section className="about-section">
            <h1 className="about-title">
                {translations.about?.title}
            </h1>

            <div className="about-content">
                {/* Biyografi */}
                <div className="about-card glass-card">
                    <h3 className="about-section-title">
                        <FaUserAlt /> {translations.about?.bioTitle}
                    </h3>
                    <p className="about-bio-text">
                        {translations.about?.bioText}
                    </p>
                </div>

                <div className="about-grid">
                    {/* Eğitim */}
                    <div className="about-card glass-card">
                        <h3 className="about-section-title-lg">
                            <FaGraduationCap /> {translations.about?.eduTitle}
                        </h3>
                        <div className="about-edu-item">
                            <h4 className="about-edu-school">{translations.about?.eduUni}</h4>
                            <p className="about-edu-dept">{translations.about?.eduDept}</p>
                            <p className="about-edu-year">2021 - {translations.about?.present}</p>
                        </div>
                        <div>
                            <h4 className="about-edu-school">Politechnika Częstochowska ({translations.about?.erasmusCountry})</h4>
                            <p className="about-edu-dept">Computer Science - {translations.about?.erasmusTerm}</p>
                            <p className="about-edu-year">2024</p>
                        </div>
                    </div>

                    {/* Deneyim */}
                    <div className="about-card glass-card">
                        <h3 className="about-section-title-lg">
                            <FaBriefcase /> {translations.about?.expTitle}
                        </h3>
                        <div className="about-edu-item">
                            <h4 className="about-exp-company">{translations.about?.erasmusCountry}</h4>
                            <h5 className="about-exp-position">{translations.about?.internTitle}</h5>
                            <p className="about-exp-date">{translations.about?.internDate}</p>
                            <p className="about-exp-desc">{translations.about?.internDesc}</p>
                        </div>
                        <div>
                            <h4 className="about-exp-company">{translations.about?.volleyTitle}</h4>
                            <h5 className="about-exp-position">{translations.about?.volleySub}</h5>
                            <p className="about-exp-date">{translations.about?.pastExp}</p>
                            <p className="about-exp-desc">{translations.about?.volleyDesc}</p>
                        </div>
                    </div>
                </div>

                {/* Hobiler */}
                <div className="about-card glass-card">
                    <h3 className="about-section-title-lg">
                        <FaHeart /> {translations.about?.hobbyTitle}
                    </h3>
                    <div className="about-hobbies">
                        {translations.about?.hobbies?.map((hobby, index) => (
                            <span key={index} className="about-hobby-tag">
                                {hobby}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
