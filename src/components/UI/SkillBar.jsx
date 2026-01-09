import React from 'react';
import './SkillBar.css';

export default function SkillBar({ skill, icon }) {
    return (
        <div className="skill-bar">
            <div className="skill-bar-header">
                <div className="skill-bar-info">
                    <span className="skill-bar-icon">{icon}</span>
                    <span>{skill.name}</span>
                </div>
                <span className="skill-bar-level">{skill.level}%</span>
            </div>
            <div className="skill-bar-track">
                <div
                    className="skill-bar-fill"
                    style={{ width: `${skill.level}%` }}
                />
            </div>
        </div>
    );
}
