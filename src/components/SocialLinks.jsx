import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';

export default function SocialLinks({ social, size = '2rem', style = {} }) {
    const iconStyle = {
        color: 'var(--text-main)',
        fontSize: size,
        transition: 'all 0.3s ease',
        opacity: 0.8
    };

    const linkStyle = {
        textDecoration: 'none',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center'
    };

    const handleHover = (e, hover) => {
        e.currentTarget.querySelector('svg').style.opacity = hover ? 1 : 0.8;
        e.currentTarget.querySelector('svg').style.transform = hover ? 'scale(1.15)' : 'scale(1)';
    };

    return (
        <div style={{
            display: 'flex',
            gap: '20px',
            alignItems: 'center',
            ...style
        }}>
            {social?.github && (
                <a
                    href={social.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={linkStyle}
                    onMouseEnter={(e) => handleHover(e, true)}
                    onMouseLeave={(e) => handleHover(e, false)}
                >
                    <FaGithub style={iconStyle} />
                </a>
            )}

            {social?.linkedin && (
                <a
                    href={social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={linkStyle}
                    onMouseEnter={(e) => handleHover(e, true)}
                    onMouseLeave={(e) => handleHover(e, false)}
                >
                    <FaLinkedin style={{ ...iconStyle, color: '#0077b5' }} />
                </a>
            )}

            {social?.twitter && social.twitter !== "https://twitter.com" && (
                <a
                    href={social.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={linkStyle}
                    onMouseEnter={(e) => handleHover(e, true)}
                    onMouseLeave={(e) => handleHover(e, false)}
                >
                    <FaTwitter style={{ ...iconStyle, color: '#1da1f2' }} />
                </a>
            )}

            {social?.instagram && (
                <a
                    href={social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={linkStyle}
                    onMouseEnter={(e) => handleHover(e, true)}
                    onMouseLeave={(e) => handleHover(e, false)}
                >
                    <FaInstagram style={{ ...iconStyle, color: '#e4405f' }} />
                </a>
            )}
        </div>
    );
}
