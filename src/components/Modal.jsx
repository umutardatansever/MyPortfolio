import React, { useEffect } from 'react';
import { FaTimes } from 'react-icons/fa';

export default function Modal({ isOpen, onClose, children }) {
    // ESC tuşu ile kapatma
    useEffect(() => {
        const handleEsc = (e) => {
            if (e.key === 'Escape') {
                onClose();
            }
        };

        if (isOpen) {
            document.addEventListener('keydown', handleEsc);
            document.body.style.overflow = 'hidden';
        }

        return () => {
            document.removeEventListener('keydown', handleEsc);
            document.body.style.overflow = 'unset';
        };
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    // Overlay'e tıklayınca kapatma
    const handleOverlayClick = (e) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    return (
        <div
            onClick={handleOverlayClick}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                background: 'rgba(0,0,0,0.95)',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                zIndex: 2000,
                padding: '20px',
                backdropFilter: 'blur(15px)',
                animation: 'fadeIn 0.3s ease'
            }}
        >
            <div
                className="glass-card"
                style={{
                    maxWidth: '900px',
                    width: '100%',
                    position: 'relative',
                    overflow: 'hidden',
                    padding: 0,
                    animation: 'slideUp 0.3s ease',
                    maxHeight: '90vh',
                    overflowY: 'auto'
                }}
            >
                {/* Kapatma Butonu */}
                <button
                    onClick={onClose}
                    aria-label="Kapat"
                    style={{
                        position: 'absolute',
                        right: '20px',
                        top: '20px',
                        background: 'rgba(0,0,0,0.5)',
                        border: 'none',
                        color: 'white',
                        cursor: 'pointer',
                        padding: '10px',
                        borderRadius: '50%',
                        zIndex: 10,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        transition: 'all 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.background = 'rgba(239, 68, 68, 0.8)';
                        e.currentTarget.style.transform = 'scale(1.1)';
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.background = 'rgba(0,0,0,0.5)';
                        e.currentTarget.style.transform = 'scale(1)';
                    }}
                >
                    <FaTimes size={25} />
                </button>

                {children}
            </div>

            <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideUp {
          from { 
            opacity: 0;
            transform: translateY(30px);
          }
          to { 
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
        </div>
    );
}
