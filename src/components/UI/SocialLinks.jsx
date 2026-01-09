import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';
import './SocialLinks.css';

export default function SocialLinks({ social, size = "1.5rem" }) {
    if (!social) return null;

    return (
        <div className="social-links">
            {social.github && (
                <a
                    href={social.github}
                    target="_blank"
                    rel="noreferrer"
                    className="social-link github"
                    aria-label="GitHub"
                >
                    <FaGithub size={size} />
                </a>
            )}

            {social.linkedin && (
                <a
                    href={social.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="social-link linkedin"
                    aria-label="LinkedIn"
                >
                    <FaLinkedin size={size} />
                </a>
            )}

            {social.twitter && (
                <a
                    href={social.twitter}
                    target="_blank"
                    rel="noreferrer"
                    className="social-link twitter"
                    aria-label="Twitter"
                >
                    <FaTwitter size={size} />
                </a>
            )}

            {social.instagram && (
                <a
                    href={social.instagram}
                    target="_blank"
                    rel="noreferrer"
                    className="social-link instagram"
                    aria-label="Instagram"
                >
                    <FaInstagram size={size} />
                </a>
            )}
        </div>
    );
}
