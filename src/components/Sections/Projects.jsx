import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import projectsData from '../../data/projects.json';
import { useLanguage } from '../../context/LanguageContext';
import ProjectCard from '../UI/ProjectCard';
import Modal from '../UI/Modal';
import { FaGithub, FaFileAlt, FaLock } from 'react-icons/fa';
import './Projects.css';

export default function Projects() {
    const { translations } = useLanguage();
    const [filter, setFilter] = useState('All');
    const [selectedProject, setSelectedProject] = useState(null);
    const navigate = useNavigate();

    const allImages = import.meta.glob('../../assets/*.{png,jpg,jpeg,svg,webp}', { eager: true });

    const getImageUrl = (imageName) => {
        const path = `../../assets/${imageName}`;
        return allImages[path]?.default || "https://via.placeholder.com/420x260?text=Resim+Yolu+Hatali";
    };

    const categories = ['All', ...new Set(projectsData.map(p => p.category))];
    const filteredProjects = filter === 'All' ? projectsData : projectsData.filter(p => p.category === filter);

    const renderModalContent = () => {
        if (!selectedProject) return null;

        const itemTrans = translations.projects?.items?.[selectedProject.id];
        const isSecret = selectedProject.isPrivate || itemTrans?.title?.toLowerCase().includes("oyunswipe");

        return (
            <div className="project-modal-content">
                {/* Proje Görseli */}
                <div className="project-modal-image">
                    <img
                        src={getImageUrl(selectedProject.image)}
                        alt="detail"
                        className={isSecret ? 'blurred' : ''}
                    />
                    {isSecret && <FaLock size={80} color="white" className="project-modal-lock" />}
                </div>

                {/* Proje Detayları */}
                <div className={`project-modal-details ${isSecret ? 'centered' : ''}`}>
                    <h2 className="project-modal-title">
                        {isSecret ? (translations.projects?.accessRestricted || "Gizli Uygulama") : (itemTrans?.title || selectedProject.title)}
                    </h2>

                    {isSecret ? (
                        <div className="project-private-warning">
                            <FaLock size={30} style={{ marginBottom: '15px', color: '#ff4757' }} />
                            <p>
                                Fikri mülkiyet hakları ve ticari gizlilik nedeniyle bu projenin teknik detayları ve kaynak kodları paylaşıma kapalıdır.
                            </p>
                        </div>
                    ) : (
                        <>
                            {/* Teknoloji Etiketleri */}
                            <div className="project-modal-tags">
                                {(itemTrans?.tags || selectedProject.technologies)?.map(tag => (
                                    <span key={tag} className="project-modal-tag">
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            {/* Açıklama */}
                            <p className="project-modal-description">
                                {itemTrans?.longDesc || selectedProject.description}
                            </p>

                            {/* Butonlar */}
                            <div className="project-modal-buttons">
                                {selectedProject.githubUrl && selectedProject.githubUrl !== "#" && (
                                    <a
                                        href={selectedProject.githubUrl}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="project-modal-btn btn-modern"
                                    >
                                        <FaGithub /> {translations.projects?.githubBtn || "GitHub'da İncele"}
                                    </a>
                                )}

                                {selectedProject.id === 4 && (
                                    <button
                                        onClick={() => {
                                            setSelectedProject(null);
                                            navigate('/project-detail/4');
                                        }}
                                        className="project-modal-btn btn-modern"
                                    >
                                        <FaFileAlt /> {translations.projects?.viewReport || "Raporu Görüntüle"}
                                    </button>
                                )}
                            </div>
                        </>
                    )}
                </div>
            </div>
        );
    };

    return (
        <section className="projects-section">
            <h2 className="projects-title">
                {translations.projects?.title || 'Projelerim'}
            </h2>

            {/* Filtre Butonları */}
            <div className="projects-filters">
                {categories.map(cat => (
                    <button
                        key={cat}
                        onClick={() => setFilter(cat)}
                        className={`projects-filter-btn ${filter === cat ? 'active' : ''}`}
                    >
                        {cat === 'All' ? (translations.projects?.filterAll || 'Hepsi') : cat}
                    </button>
                ))}
            </div>

            {/* Proje Kartları Grid */}
            <div className="projects-grid">
                {filteredProjects.map(project => {
                    const itemTrans = translations.projects?.items?.[project.id];
                    return (
                        <ProjectCard
                            key={project.id}
                            project={project}
                            itemTrans={itemTrans}
                            onSelect={setSelectedProject}
                            getImageUrl={getImageUrl}
                        />
                    );
                })}
            </div>

            {/* Proje Detay Modalı */}
            <Modal
                isOpen={!!selectedProject}
                onClose={() => setSelectedProject(null)}
            >
                {renderModalContent()}
            </Modal>
        </section>
    );
}
