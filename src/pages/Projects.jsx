import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import projectsData from '../data/projects.json';
import { useLanguage } from '../context/LanguageContext';
import ProjectCard from '../components/ProjectCard';
import Modal from '../components/Modal';
import { FaGithub, FaFileAlt, FaLock } from 'react-icons/fa';

export default function Projects() {
  const { translations } = useLanguage();
  const [filter, setFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);
  const navigate = useNavigate();

  const allImages = import.meta.glob('../assets/*.{png,jpg,jpeg,svg,webp}', { eager: true });

  const getImageUrl = (imageName) => {
    const path = `../assets/${imageName}`;
    return allImages[path]?.default || "https://via.placeholder.com/420x260?text=Resim+Yolu+Hatali";
  };

  const categories = ['All', ...new Set(projectsData.map(p => p.category))];
  const filteredProjects = filter === 'All' ? projectsData : projectsData.filter(p => p.category === filter);

  const renderModalContent = () => {
    if (!selectedProject) return null;

    const itemTrans = translations.projects?.items?.[selectedProject.id];
    const isSecret = selectedProject.isPrivate || itemTrans?.title?.toLowerCase().includes("oyunswipe");

    return (
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {/* Proje Görseli */}
        <div style={{
          width: '100%',
          height: '400px',
          background: '#000',
          overflow: 'hidden',
          display: 'flex',
          justifyContent: 'center',
          position: 'relative'
        }}>
          <img
            src={getImageUrl(selectedProject.image)}
            alt="detail"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'contain',
              filter: isSecret ? 'blur(45px)' : 'none'
            }}
          />
          {isSecret && <FaLock size={80} color="white" style={{ position: 'absolute', top: '40%' }} />}
        </div>

        {/* Proje Detayları */}
        <div style={{ padding: '40px', textAlign: isSecret ? 'center' : 'left' }}>
          <h2 style={{
            color: 'var(--primary)',
            fontSize: '2.2rem',
            fontWeight: 800,
            marginBottom: '20px'
          }}>
            {isSecret ? (translations.projects?.accessRestricted || "Gizli Uygulama") : (itemTrans?.title || selectedProject.title)}
          </h2>

          {isSecret ? (
            <div style={{
              padding: '30px',
              background: 'rgba(255, 71, 87, 0.1)',
              border: '1px solid #ff4757',
              borderRadius: '15px',
              color: 'var(--text-main)'
            }}>
              <FaLock size={30} style={{ marginBottom: '15px', color: '#ff4757' }} />
              <p style={{ fontWeight: 700, fontSize: '1.2rem' }}>
                Fikri mülkiyet hakları ve ticari gizlilik nedeniyle bu projenin teknik detayları ve kaynak kodları paylaşıma kapalıdır.
              </p>
            </div>
          ) : (
            <>
              {/* Teknoloji Etiketleri */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '25px' }}>
                {(itemTrans?.tags || selectedProject.technologies)?.map(tag => (
                  <span
                    key={tag}
                    style={{
                      fontSize: '0.85rem',
                      background: 'var(--primary)',
                      color: 'white',
                      padding: '8px 18px',
                      borderRadius: '50px',
                      fontWeight: 700
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Açıklama */}
              <p style={{
                color: 'var(--text-main)',
                fontSize: '1.1rem',
                lineHeight: '1.8',
                marginBottom: '35px',
                opacity: 0.9
              }}>
                {itemTrans?.longDesc || selectedProject.description}
              </p>

              {/* Butonlar */}
              <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
                {selectedProject.githubUrl && selectedProject.githubUrl !== "#" && (
                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-modern"
                    style={{
                      padding: '15px 35px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                      textDecoration: 'none'
                    }}
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
                    className="btn-modern"
                    style={{
                      padding: '15px 35px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px'
                    }}
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
    <div style={{ width: '100%', maxWidth: '1400px', margin: '0 auto', padding: '60px 20px' }}>
      <h2 style={{
        textAlign: 'center',
        fontSize: '3.2rem',
        fontWeight: 800,
        marginBottom: '50px',
        color: 'var(--text-main)'
      }}>
        {translations.projects?.title || 'Projelerim'}
      </h2>

      {/* Filtre Butonları */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '15px', marginBottom: '60px', flexWrap: 'wrap' }}>
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`filter-btn ${filter === cat ? 'active' : ''}`}
            style={{
              padding: '12px 28px',
              borderRadius: '50px',
              border: filter === cat ? '1px solid var(--primary)' : '1px solid var(--glass-border)',
              background: filter === cat ? 'var(--primary)' : 'var(--btn-passive)',
              color: filter === cat ? '#ffffff' : 'var(--btn-text-passive)',
              cursor: 'pointer',
              transition: '0.4s',
              fontWeight: 600
            }}
          >
            {cat === 'All' ? (translations.projects?.filterAll || 'Hepsi') : cat}
          </button>
        ))}
      </div>

      {/* Proje Kartları Grid */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '40px', justifyContent: 'center' }}>
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
    </div>
  );
}