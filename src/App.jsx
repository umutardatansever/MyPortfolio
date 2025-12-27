import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext'; 
import { LanguageProvider } from './context/LanguageContext'; 
import Homes from './pages/Homes';
import About from './pages/About';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Projectid4Detail from './pages/Projectid4Detail'; 
import Navbar from './components/Navbar';
import Footer from './components/Footer'; 

function App() {
  return (
    <LanguageProvider>
      <ThemeProvider>
        <Router>
          <Navbar />
          
          <main>
            <Routes>
              <Route path="/" element={<Homes />} />
              <Route path="/hakkimda" element={<About />} />
              <Route path="/yetenekler" element={<Skills />} />
              <Route path="/projeler" element={<Projects />} />
              <Route path="/iletisim" element={<Contact />} />
              
              <Route path="/project-detail/4" element={<Projectid4Detail />} />
            </Routes>
          </main>

          <Footer /> 
          
        </Router>
      </ThemeProvider>
    </LanguageProvider>
  );
}

export default App;