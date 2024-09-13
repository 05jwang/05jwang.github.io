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

  const [darkTheme] = useRecoilState(themeState);
  return (
    <div
      className="homepage"
      style={{
        marginTop: '50px',
      }}
    >
      <Element name="About">
        <AboutSectionContent theme={darkTheme} />
      </Element>

      <Element name="Experience">
        <ExperienceSectionContent theme={darkTheme} />
      </Element>

      <Element name="Projects">
        <ProjectsSectionContent theme={darkTheme} />
      </Element>

      <Element name="Skills">
        <SkillsSectionContent theme={darkTheme} />
      </Element>

      <Element name="Contact">
        <ContactSectionContent theme={darkTheme} />
      </Element>
    </div>
  );
};

export default HomePage;
