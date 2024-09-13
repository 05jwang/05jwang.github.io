// src/pages/HomePage.tsx
import React, { useEffect, useRef } from 'react';
import { Text, Icon, Card } from '@blueprintjs/core';
import { useRecoilState } from 'recoil';
import { themeState } from '../recoil/atoms/themeState';

import { AboutSectionContent } from '../components/sections/AboutSectionContent';
import { ExperienceSectionContent } from '../components/sections/ExperienceSectionContent';
import { ProjectsSectionContent } from '../components/sections/ProjectsSectionContent';
import { SkillsSectionContent } from '../components/sections/SkillsSectionContent';
import { ContactSectionContent } from '../components/sections/ContactSectionContent';

const HomePage: React.FC = () => {
  const aboutRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const [darkTheme] = useRecoilState(themeState);

  useEffect(() => {
    const handleHashChange = () => {
      const section = window.location.hash.substring(1);
      switch (section) {
        case 'About':
          aboutRef.current?.scrollIntoView({ behavior: 'smooth' });
          break;
        case 'Experience':
          experienceRef.current?.scrollIntoView({ behavior: 'smooth' });
          break;
        case 'Projects':
          projectsRef.current?.scrollIntoView({ behavior: 'smooth' });
          break;
        case 'Skills':
          skillsRef.current?.scrollIntoView({ behavior: 'smooth' });
          break;
        case 'Contact':
          contactRef.current?.scrollIntoView({ behavior: 'smooth' });
          break;
        default:
          break;
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  return (
    <div
      className="homepage"
      style={{
        marginTop: '50px',
      }}
    >
      <AboutSectionContent sectionRef={aboutRef} theme={darkTheme} />
      <ExperienceSectionContent sectionRef={experienceRef} theme={darkTheme} />
      <ProjectsSectionContent sectionRef={projectsRef} theme={darkTheme} />
      <SkillsSectionContent sectionRef={skillsRef} theme={darkTheme} />
      <ContactSectionContent sectionRef={contactRef} theme={darkTheme} />
    </div>
  );
};

export default HomePage;
