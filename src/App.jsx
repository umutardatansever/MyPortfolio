import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { LanguageProvider } from './context/LanguageContext';

// Layout Component (Navbar + Footer wrapper)
import Layout from './components/Layout/Layout';

// Pages (Route wrappers)
import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import SkillsPage from './pages/SkillsPage';
import ProjectsPage from './pages/ProjectsPage';
import ContactPage from './pages/ContactPage';
import Projectid4Detail from './pages/Projectid4Detail';
import Projectid1Detail from './pages/Projectid1Detail';

function App() {
  return (
    <LanguageProvider>
      <ThemeProvider>
        <Router basename="/MyPortfolio">
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/hakkimda" element={<AboutPage />} />
              <Route path="/yetenekler" element={<SkillsPage />} />
              <Route path="/projeler" element={<ProjectsPage />} />
              <Route path="/iletisim" element={<ContactPage />} />

              <Route path="/project-detail/4" element={<Projectid4Detail />} />
              <Route path="/project-detail/1" element={<Projectid1Detail />} />
            </Routes>
          </Layout>
        </Router>
      </ThemeProvider>
    </LanguageProvider>
  );
}

export default App;