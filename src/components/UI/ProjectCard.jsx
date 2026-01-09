import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { FaLock } from 'react-icons/fa';
import './ProjectCard.css';

export default function ProjectCard({ project, itemTrans, onSelect, getImageUrl }) {
    const { translations } = useLanguage();
    const isSecret = project.isPrivate || itemTrans?.title?.toLowerCase().includes("oyunswipe");

    return (
        <div
            className="project-card glass-card"
            onClick={() => onSelect(project)}
        >
            {/* Proje Görseli */}
            <div className="project-card-image">
                <img
                    src={getImageUrl(project.image)}
                    alt={itemTrans?.title || project.title}
                    className={isSecret ? 'blurred' : ''}
                />

                {/* Gizli Proje Overlay */}
                {isSecret && (
                    <div className="project-card-secret-overlay">
                        <FaLock size={40} />
                        <span className="project-card-secret-text">
                            {translations.projects?.confidential || "GİZLİ"}
                        </span>
                    </div>
                )}

                {/* Featured Badge */}
                {project.isFeatured && !isSecret && (
                    <span className="project-card-featured-badge">
                        ⭐ {translations.projects?.featured || "Öne Çıkan"}
                    </span>
                )}
            </div>

            {/* İçerik */}
            <div className="project-card-content">
                <h3 className={`project-card-title ${isSecret ? 'centered' : ''}`}>
                    {isSecret ? (translations.projects?.secretApp || "Gizli Uygulama") : (itemTrans?.title || project.title)}
                </h3>

                <div className={`project-card-body ${isSecret ? 'blurred centered' : ''}`}>
                    <p className="project-card-description">
                        {isSecret
                            ? "Bu projenin içeriği ticari gizlilik nedeniyle kısıtlanmıştır."
                            : (itemTrans?.desc || project.description)}
                    </p>

                    <div className={`project-card-tags ${isSecret ? 'centered' : ''}`}>
                        {(isSecret ? ["Gizli", "Private"] : (itemTrans?.tags || project.technologies))?.slice(0, 3).map(tag => (
                            <span key={tag} className="project-card-tag">
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
