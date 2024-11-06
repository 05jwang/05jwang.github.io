import React from 'react';
import { Routes, Route, HashRouter } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { themeState } from './recoil/atoms/themeState';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';
import ResumePage from './pages/ResumePage';
import StatusPage from './pages/StatusPage';
import NotFoundPage from './pages/NotFoundPage';
import { Classes } from '@blueprintjs/core';
import TevProjectPage from './pages/projects/TevProjectPage';
import TriageProjectPage from './pages/projects/TriageProjectPage';
import MemeIntentProjectPage from './pages/projects/MemeIntentProjectPage';
import VIPProjectPage from './pages/projects/VIPProjectPage';
import WordleProjectPage from './pages/projects/WordleProjectPage';

const App: React.FC = () => {
  const [darkTheme] = useRecoilState(themeState);

  const appStyles = {
    backgroundColor: darkTheme ? '#30404d' : '#f5f8fa',
    color: darkTheme ? '#f5f8fa' : '#30404d',
    minHeight: '100vh',
    transition: 'background-color 0.3s ease',
    display: 'flex',
    flexDirection: 'column' as 'column',
  };

  return (
    <div className={darkTheme ? Classes.DARK : ''} style={appStyles}>
      <NavBar />
      <div style={{ flex: 1 }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/resume" element={<ResumePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/projects/tev" element={<TevProjectPage />} />
          <Route path="/projects/triage" element={<TriageProjectPage />} />
          <Route
            path="/projects/memeintent"
            element={<MemeIntentProjectPage />}
          />
          <Route path="/projects/vip" element={<VIPProjectPage />} />
          <Route path="/projects/wordle" element={<WordleProjectPage />} />
          <Route path="/actuatorStatus" element={<StatusPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;
