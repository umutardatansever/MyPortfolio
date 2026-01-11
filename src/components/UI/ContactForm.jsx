import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { FaPaperPlane, FaCheckCircle } from 'react-icons/fa';
import './ContactForm.css';

export default function ContactForm() {
    const { translations } = useLanguage();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [error, setError] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        setError('');
    };

    const validateEmail = (email) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validasyon
        if (!formData.name.trim()) {
            setError(translations.contact?.errorName || 'Name field is required.');
            return;
        }
        if (!formData.email.trim() || !validateEmail(formData.email)) {
            setError(translations.contact?.errorEmail || 'Please enter a valid email address.');
            return;
        }
        if (!formData.message.trim()) {
            setError(translations.contact?.errorMessage || 'Message field is required.');
            return;
        }

        // Simülasyon
        setSubmitted(true);
    };

    if (submitted) {
        return (
            <div className="contact-form-success">
                <FaCheckCircle size={70} className="contact-form-success-icon" />
                <h3 className="contact-form-success-title">
                    {translations.contact?.successTitle || 'Message Received!'}
                </h3>
                <p className="contact-form-success-message">
                    {translations.contact?.successMessage || 'I will get back to you soon.'}
                </p>
            </div>
        );
    }

    return (
        <form className="contact-form" onSubmit={handleSubmit}>
            <div className="contact-form-fields">
                <input
                    type="text"
                    name="name"
                    placeholder={translations.contact?.namePlaceholder || 'Your Name'}
                    value={formData.name}
                    onChange={handleChange}
                    className="contact-form-input"
                />
                <input
                    type="email"
                    name="email"
                    placeholder={translations.contact?.emailPlaceholder || 'Your Email'}
                    value={formData.email}
                    onChange={handleChange}
                    className="contact-form-input"
                />
                <input
                    type="text"
                    name="subject"
                    placeholder={translations.contact?.subjectPlaceholder || 'Subject'}
                    value={formData.subject}
                    onChange={handleChange}
                    className="contact-form-input"
                />
                <textarea
                    name="message"
                    placeholder={translations.contact?.messagePlaceholder || 'Your Message...'}
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="contact-form-input contact-form-textarea"
                />

                {error && (
                    <p className="contact-form-error">{error}</p>
                )}

                <button type="submit" className="contact-form-submit btn-modern">
                    <FaPaperPlane /> {translations.contact?.sendBtn || 'Send'}
                </button>
            </div>
        </form>
    );
}
