import skillsData from '../data/skills.json';
import { 
  FaReact, FaJs, FaPython, FaNodeJs, FaGithub, 
  FaMicrochip, FaMemory, FaHtml5, FaCss3Alt, FaCalculator, FaChartBar 
} from 'react-icons/fa';

const C_Logo = () => (
  <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
    <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10c3.123 0 5.912-1.428 7.74-3.666l-1.93-1.448C16.394 18.52 14.312 19.5 12 19.5c-4.142 0-7.5-3.358-7.5-7.5S7.858 4.5 12 4.5c2.312 0 4.394.98 5.81 2.614l1.93-1.448C17.912 3.428 15.123 2 12 2z"/>
  </svg>
);

const CPP_Logo = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
    <path d="M11.34 2.01c-5.5 0-9.96 4.46-9.96 9.96s4.46 9.96 9.96 9.96c3.1 0 5.86-1.41 7.69-3.62l-1.92-1.43c-1.4 1.62-3.46 2.59-5.77 2.59-4.11 0-7.44-3.33-7.44-7.44S7.23 4.57 11.34 4.57c2.31 0 4.37.97 5.77 2.59l1.92-1.43c-1.83-2.21-4.59-3.62-7.69-3.62zm9.14 7.63v2.24h-2.24v1.27h2.24v2.24h1.27v-2.24h2.24v-1.27h-2.24V9.64h-1.27zm3.52 0v2.24h-2.24v1.27h2.24v2.24h1.27v-2.24h2.24v-1.27h-2.24V9.64h-1.27z"/>
  </svg>
);

const iconMap = {
  FaHtml5: <FaHtml5 />, FaCss3Alt: <FaCss3Alt />, FaReact: <FaReact />,
  FaJs: <FaJs />, FaPython: <FaPython />, FaNodeJs: <FaNodeJs />,
  FaGithub: <FaGithub />, FaMicrochip: <FaMicrochip />, FaMemory: <FaMemory />,
  FaCalculator: <FaCalculator />, FaChartBar: <FaChartBar />,
  SiC: <C_Logo />,
  SiCplusplus: <CPP_Logo /> 
};

export default function Skills() {
  return (
    <div style={{ width: '100%', maxWidth: '1000px', margin: '0 auto', paddingBottom: '50px' }}>
      <h2 style={{ fontSize: '2.8rem', textAlign: 'center', marginBottom: '40px', fontWeight: 800 }}>
        Teknik Yetenekler
      </h2>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '25px' }}>
        {skillsData.categories.map((cat, idx) => (
          <div key={idx} className="glass-card" style={{ padding: '2rem' }}>
            <h3 style={{ color: 'var(--primary)', marginBottom: '20px', borderBottom: '2px solid var(--glass-border)', paddingBottom: '10px' }}>
              {cat.title}
            </h3>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '22px' }}>
              {cat.items.map((skill, i) => (
                <div key={i}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', fontWeight: 700 }}>
                      <span style={{ fontSize: '1.4rem', color: 'var(--primary)', display: 'flex', alignItems: 'center' }}>
                        {iconMap[skill.icon] || skill.name[0]}
                      </span>
                      {skill.name}
                    </div>
                    <span style={{ fontWeight: 800, opacity: 0.9 }}>%{skill.level}</span>
                  </div>
                  
                  <div style={{ width: '100%', height: '10px', background: 'var(--glass-border)', borderRadius: '20px', overflow: 'hidden' }}>
                    <div style={{ 
                      width: `${skill.level}%`, 
                      height: '100%', 
                      background: 'linear-gradient(90deg, var(--primary), var(--secondary))',
                      borderRadius: '20px'
                    }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}