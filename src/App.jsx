import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import SideNav from './components/SideNav';
import HeroSection from './components/HeroSection';
import CapabilitiesSection from './components/CapabilitiesSection';
import CaseStudies from './components/CaseStudies';
import ExperienceSection from './components/ExperienceSection';
import HowIWork from './components/HowIWork';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import { Moon, Sun } from 'lucide-react';
import './styles/App.css';

const getInitialDarkMode = () => {
  try {
    const stored = localStorage.getItem('theme');
    if (stored) return stored === 'dark';
  } catch {
    // localStorage may be unavailable in private browsing, so use the system preference.
  }
  return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
};

function App() {
  const [darkMode, setDarkMode] = useState(getInitialDarkMode);
  const [pullingTheme, setPullingTheme] = useState(false);

  useEffect(() => {
    const canTrackPointer = window.matchMedia(
      '(pointer: fine) and (prefers-reduced-motion: no-preference)'
    );
    if (!canTrackPointer.matches) return undefined;

    let animationFrame;
    const updateSpotlight = ({ clientX, clientY }) => {
      cancelAnimationFrame(animationFrame);
      animationFrame = requestAnimationFrame(() => {
        document.documentElement.style.setProperty('--pointer-x', `${clientX}px`);
        document.documentElement.style.setProperty('--pointer-y', `${clientY}px`);
      });
    };

    window.addEventListener('pointermove', updateSpotlight, { passive: true });
    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener('pointermove', updateSpotlight);
      document.documentElement.style.removeProperty('--pointer-x');
      document.documentElement.style.removeProperty('--pointer-y');
    };
  }, []);

  useEffect(() => {
    document.body.classList.toggle('dark-mode', darkMode);
    document.body.classList.toggle('light-mode', !darkMode);
    try {
      localStorage.setItem('theme', darkMode ? 'dark' : 'light');
    } catch {
      // The theme still works even when the browser cannot save it.
    }
  }, [darkMode]);

  return (
    <>
      <div className="ambient-layer" aria-hidden="true">
        <span className="ambient-orb ambient-orb-one" />
        <span className="ambient-orb ambient-orb-two" />
      </div>
      <div className="hero-portrait">
        <img
          src={`${import.meta.env.BASE_URL}noel-portrait.jpg`}
          alt="Portrait of Noel Ugwoke"
          width="1318"
          height="2000"
          fetchPriority="high"
        />
      </div>
      <a href="#main" className="skip-to-content">Skip to content</a>
      <Header />
      <SideNav />
      <div className="container">
        <main id="main" className="main-content">
          <HeroSection />
          <div className="page-sheet">
            <CapabilitiesSection />
            <CaseStudies />
            <ExperienceSection />
            <HowIWork />
            <AboutSection />
            <ContactSection />
          </div>
        </main>
      </div>
      <div className={`theme-pull${pullingTheme ? ' is-pulled' : ''}`}>
        <span className="theme-pull-cord" aria-hidden="true" />
        <button
          className="darkmode-toggle"
          aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
          aria-pressed={darkMode}
          onAnimationEnd={() => setPullingTheme(false)}
          onClick={() => {
            setPullingTheme(true);
            setDarkMode((value) => !value);
            window.setTimeout(() => setPullingTheme(false), 650);
          }}
        >
          {darkMode ? <Moon size={17} aria-hidden="true" /> : <Sun size={17} aria-hidden="true" />}
        </button>
      </div>
    </>
  );
}

export default App;
