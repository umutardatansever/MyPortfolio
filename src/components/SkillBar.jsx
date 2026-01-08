import React from 'react';

export default function SkillBar({ skill, icon }) {
    return (
        <div>
            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '8px'
            }}>
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    fontWeight: 700,
                    color: 'var(--text-main)'
                }}>
                    <span style={{
                        fontSize: '1.4rem',
                        color: 'var(--primary)',
                        display: 'flex',
                        alignItems: 'center'
                    }}>
                        {icon || skill.name[0]}
                    </span>
                    {skill.name}
                </div>
                <span style={{
                    fontWeight: 800,
                    opacity: 0.9,
                    color: 'var(--text-main)'
                }}>
                    %{skill.level}
                </span>
            </div>

            {/* Progress Bar */}
            <div style={{
                width: '100%',
                height: '10px',
                background: 'var(--glass-border)',
                borderRadius: '20px',
                overflow: 'hidden'
            }}>
                <div style={{
                    width: `${skill.level}%`,
                    height: '100%',
                    background: 'linear-gradient(90deg, var(--primary), var(--secondary))',
                    borderRadius: '20px',
                    transition: 'width 1s ease-out'
                }} />
            </div>
        </div>
    );
}
