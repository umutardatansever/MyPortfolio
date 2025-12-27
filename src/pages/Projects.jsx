import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import projectsData from '../data/projects.json';
import { useLanguage } from '../context/LanguageContext'; 
import { FaGithub, FaTimes, FaFileAlt, FaLock } from 'react-icons/fa';

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

  return (
    <div style={{ width: '100%', maxWidth: '1400px', margin: '0 auto', padding: '60px 20px' }}>
      <h2 style={{ textAlign: 'center', fontSize: '3.2rem', fontWeight: 800, marginBottom: '50px', color: 'var(--text-main)' }}>
        {translations.projects?.title}
      </h2>

      {/* Kategori Filtreleri */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '15px', marginBottom: '60px', flexWrap: 'wrap' }}>
        {categories.map(cat => (
          <button key={cat} onClick={() => setFilter(cat)} className={`filter-btn ${filter === cat ? 'active' : ''}`}
            style={{ padding: '12px 28px', borderRadius: '50px', border: filter === cat ? '1px solid var(--primary)' : '1px solid var(--glass-border)', background: filter === cat ? 'var(--primary)' : 'var(--btn-passive)', color: filter === cat ? '#ffffff' : 'var(--btn-text-passive)', cursor: 'pointer', transition: '0.4s', fontWeight: 600 }}>
            {cat === 'All' ? translations.projects?.filterAll : cat}
          </button>
        ))}
      </div>

      {/* Proje Kartları */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '40px', justifyContent: 'center' }}>
        {filteredProjects.map(project => {
          const itemTrans = translations.projects?.items?.[project.id];
          const isSecret = project.isPrivate || itemTrans?.title?.toLowerCase().includes("oyunswipe");
          const displayTitle = isSecret ? "Gizli Uygulama" : itemTrans?.title;

          return (
            <div key={project.id} className="glass-card" onClick={() => setSelectedProject(project)} 
                 style={{ cursor: 'pointer', width: '100%', maxWidth: '420px', minHeight: '520px', display: 'flex', flexDirection: 'column', position: 'relative' }}>
              
              {/* Görsel Alanı */}
              <div style={{ height: '260px', overflow: 'hidden', borderRadius: '20px 20px 0 0', position: 'relative', background: '#000' }}>
                <img src={getImageUrl(project.image)} alt="project" 
                     style={{ width: '100%', height: '100%', objectFit: 'cover', filter: isSecret ? 'blur(25px) brightness(0.4)' : 'none' }} />
                
                {isSecret && (
                  <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color: 'white', background: 'rgba(0,0,0,0.3)' }}>
                    <FaLock size={40} />
                    <span style={{ fontWeight: 700, marginTop: '10px' }}>Erişim Kısıtlı</span>
                  </div>
                )}
              </div>

              {/* Metin Alanı - Hizalaması yandaki kartlarla aynı yapıldı */}
              <div style={{ padding: '30px', flex: 1, display: 'flex', flexDirection: 'column', gap: '15px' }}>
                
                {/* Başlık Seviyesi: Yandaki uygulamalarla aynı yükseklikte */}
                <h3 style={{ 
                  color: 'var(--primary)', 
                  fontSize: '1.5rem', 
                  fontWeight: 700, 
                  textAlign: isSecret ? 'center' : 'left',
                  width: '100%'
                }}>
                  {displayTitle}
                </h3>
                
                {/* İçerik Alanı: Gizli ise blurlu ama yerinde duruyor */}
                <div style={{ 
                  filter: isSecret ? 'blur(10px)' : 'none', 
                  opacity: isSecret ? 0.4 : 1, 
                  userSelect: 'none',
                  flex: 1,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '15px',
                  textAlign: isSecret ? 'center' : 'left'
                }}>
                  <p style={{ fontSize: '0.95rem', lineHeight: '1.7', color: 'var(--text-main)' }}>
                    {itemTrans?.desc}
                  </p>
                  
                  {/* Etiketler (Tags) */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', justifyContent: isSecret ? 'center' : 'flex-start' }}>
                    {itemTrans?.tags?.map(tag => (
                      <span key={tag} style={{ fontSize: '0.75rem', background: 'var(--btn-passive)', color: 'var(--btn-text-passive)', padding: '6px 14px', borderRadius: '50px', fontWeight: 600, border: '1px solid var(--glass-border)' }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Detay Modalı (Modal içindeki orta hizalama korundu) */}
      {selectedProject && (() => {
        const itemTrans = translations.projects?.items?.[selectedProject.id];
        const isSecret = selectedProject.isPrivate || itemTrans?.title?.toLowerCase().includes("oyunswipe");

        return (
          <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(0,0,0,0.95)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 2000, padding: '20px', backdropFilter: 'blur(15px)' }}>
            <div className="glass-card" style={{ maxWidth: '900px', width: '100%', position: 'relative', overflow: 'hidden', padding: 0 }}>
              <button onClick={() => setSelectedProject(null)} style={{ position: 'absolute', right: '20px', top: '20px', background: 'rgba(0,0,0,0.5)', border: 'none', color: 'white', cursor: 'pointer', padding: '10px', borderRadius: '50%', zIndex: 10 }}>
                <FaTimes size={25} />
              </button>

              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <div style={{ width: '100%', height: '400px', background: '#000', overflow: 'hidden', display: 'flex', justifyContent: 'center', position: 'relative' }}>
                  <img src={getImageUrl(selectedProject.image)} alt="detail" style={{ width: '100%', height: '100%', objectFit: 'contain', filter: isSecret ? 'blur(45px)' : 'none' }} />
                  {isSecret && <FaLock size={80} color="white" style={{ position: 'absolute', top: '40%' }} />}
                </div>

                <div style={{ padding: '40px', textAlign: isSecret ? 'center' : 'left' }}>
                  <h2 style={{ color: 'var(--primary)', fontSize: '2.2rem', fontWeight: 800, marginBottom: '20px' }}>
                    {isSecret ? "Gizli Uygulama" : itemTrans?.title}
                  </h2>

                  {isSecret ? (
                    <div style={{ padding: '30px', background: 'rgba(255, 71, 87, 0.1)', border: '1px solid #ff4757', borderRadius: '15px', color: 'var(--text-main)' }}>
                      <FaLock size={30} style={{ marginBottom: '15px', color: '#ff4757' }} />
                      <p style={{ fontWeight: 700, fontSize: '1.2rem' }}>
                         Fikri mülkiyet hakları ve ticari gizlilik nedeniyle bu projenin teknik detayları ve kaynak kodları paylaşıma kapalıdır.
                      </p>
                    </div>
                  ) : (
                    <>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '25px' }}>
                        {itemTrans?.tags?.map(tag => (
                          <span key={tag} style={{ fontSize: '0.85rem', background: 'var(--primary)', color: 'white', padding: '8px 18px', borderRadius: '50px', fontWeight: 700 }}>{tag}</span>
                        ))}
                      </div>
                      <p style={{ color: 'var(--text-main)', fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '35px', opacity: 0.9 }}>{itemTrans?.longDesc}</p>
                      <div style={{ display: 'flex', gap: '20px' }}>
                        <a href={selectedProject.github} target="_blank" rel="noreferrer" className="btn-modern" style={{ padding: '15px 35px', display: selectedProject.github === "#" ? "none" : "flex", alignItems: 'center', gap: '10px' }}>
                          <FaGithub /> GitHub'da İncele
                        </a>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        );
      })()}
    </div>
  );
}