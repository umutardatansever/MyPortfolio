import React from 'react';
import { FaLock } from 'react-icons/fa';

export default function ProjectCard({ project, itemTrans, onSelect, getImageUrl }) {
    const isSecret = project.isPrivate || itemTrans?.title?.toLowerCase().includes("oyunswipe");
    const displayTitle = isSecret ? "Gizli Uygulama" : itemTrans?.title || project.title;

    return (
        <div
            className="glass-card project-card"
            onClick={() => onSelect(project)}
            style={{
                cursor: 'pointer',
                width: '100%',
                maxWidth: '420px',
                minHeight: '520px',
                display: 'flex',
                flexDirection: 'column',
                position: 'relative'
            }}
        >
            {/* Proje Resmi */}
            <div style={{
                height: '260px',
                overflow: 'hidden',
                borderRadius: '20px 20px 0 0',
                position: 'relative',
                background: '#000'
            }}>
                <img
                    src={getImageUrl(project.image)}
                    alt={displayTitle}
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        filter: isSecret ? 'blur(25px) brightness(0.4)' : 'none'
                    }}
                />

                {isSecret && (
                    <div style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'white',
                        background: 'rgba(0,0,0,0.3)'
                    }}>
                        <FaLock size={40} />
                        <span style={{ fontWeight: 700, marginTop: '10px' }}>Erişim Kısıtlı</span>
                    </div>
                )}

                {/* Featured Badge */}
                {project.isFeatured && !isSecret && (
                    <div style={{
                        position: 'absolute',
                        top: '15px',
                        right: '15px',
                        background: 'linear-gradient(135deg, var(--primary), var(--secondary))',
                        color: 'white',
                        padding: '6px 14px',
                        borderRadius: '20px',
                        fontSize: '0.75rem',
                        fontWeight: 700
                    }}>
                        ⭐ Featured
                    </div>
                )}
            </div>

            {/* Proje Bilgileri */}
            <div style={{
                padding: '30px',
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                gap: '15px'
            }}>
                <h3 style={{
                    color: 'var(--primary)',
                    fontSize: '1.5rem',
                    fontWeight: 700,
                    textAlign: isSecret ? 'center' : 'left',
                    width: '100%'
                }}>
                    {displayTitle}
                </h3>

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
                    <p style={{
                        fontSize: '0.95rem',
                        lineHeight: '1.7',
                        color: 'var(--text-main)'
                    }}>
                        {itemTrans?.desc || project.description}
                    </p>

                    {/* Teknoloji Etiketleri */}
                    <div style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: '10px',
                        justifyContent: isSecret ? 'center' : 'flex-start'
                    }}>
                        {(itemTrans?.tags || project.technologies)?.map(tag => (
                            <span
                                key={tag}
                                style={{
                                    fontSize: '0.75rem',
                                    background: 'var(--btn-passive)',
                                    color: 'var(--btn-text-passive)',
                                    padding: '6px 14px',
                                    borderRadius: '50px',
                                    fontWeight: 600,
                                    border: '1px solid var(--glass-border)'
                                }}
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
