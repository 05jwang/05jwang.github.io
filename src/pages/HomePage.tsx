// src/pages/HomePage.tsx
import React, { useEffect, useRef } from 'react';
import { Text, Icon, Card } from '@blueprintjs/core';
import { useRecoilState } from 'recoil';
import { themeState } from '../recoil/atoms/themeState';
import { Element, scroller } from 'react-scroll';
import { useLocation } from 'react-router-dom';

import { AboutSectionContent } from '../components/sections/AboutSectionContent';
import { ExperienceSectionContent } from '../components/sections/ExperienceSectionContent';
import { ProjectsSectionContent } from '../components/sections/ProjectsSectionContent';
import { SkillsSectionContent } from '../components/sections/SkillsSectionContent';
import { ContactSectionContent } from '../components/sections/ContactSectionContent';

const HomePage: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    // Check if a section was passed in the navigation state
    if (location.state && location.state.section) {
      const { section } = location.state;
      // Scroll to the section
      scroller.scrollTo(section);
    }
  }, [location.state]);
  const aboutRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const [darkTheme] = useRecoilState(themeState);
  return (
    <div
      className="homepage"
      style={{
        marginTop: '50px',
      }}
    >
      <Element name="About">
        <AboutSectionContent sectionRef={aboutRef} theme={darkTheme} />
      </Element>

      <Element name="Experience">
        <ExperienceSectionContent
          sectionRef={experienceRef}
          theme={darkTheme}
        />
      </Element>

      <Element name="Projects">
        <ProjectsSectionContent sectionRef={projectsRef} theme={darkTheme} />
      </Element>

      <Element name="Skills">
        <SkillsSectionContent sectionRef={skillsRef} theme={darkTheme} />
      </Element>

      <Element name="Contact">
        <ContactSectionContent sectionRef={contactRef} theme={darkTheme} />
      </Element>
    </div>
  );
};

export default HomePage;
