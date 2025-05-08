// src/pages/HomePage.tsx
import React, { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { themeState } from '../recoil/atoms/themeState';
import { mobileState } from '../recoil/atoms/mobileState';
import { Element, scroller } from 'react-scroll';
import { useLocation } from 'react-router-dom';

import { AboutSectionContent } from '../components/sections/AboutSectionContent';
import { ExperienceSectionContent } from '../components/sections/ExperienceSectionContent';
import { ProjectsSectionContent } from '../components/sections/ProjectsSectionContent';
import { SkillsSectionContent } from '../components/sections/SkillsSectionContent';
import { ContactSectionContent } from '../components/sections/ContactSectionContent';

const HomePage: React.FC = () => {
  const location = useLocation();

  const [isMobile, setIsMobile] = useRecoilState(mobileState);
  useEffect(() => {
    // Check if a section was passed in the navigation state
    if (location.state && location.state.section) {
      const { section } = location.state;
      // Scroll to the section
      scroller.scrollTo(section);
    }
  }, [location.state]);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 700);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [setIsMobile]);

  const [darkTheme] = useRecoilState(themeState);
  return (
    <div
      className="homepage"
      style={{
        marginTop: '50px',
      }}
    >
      <Element name="About">
        <AboutSectionContent theme={darkTheme} isMobile={isMobile} />
      </Element>

      <Element name="Experience">
        <ExperienceSectionContent theme={darkTheme} />
      </Element>

      <Element name="Projects">
        <ProjectsSectionContent theme={darkTheme} isMobile={isMobile} />
      </Element>

      <Element name="Skills">
        <SkillsSectionContent theme={darkTheme} isMobile={isMobile} />
      </Element>

      <Element name="Contact">
        <ContactSectionContent theme={darkTheme} isMobile={isMobile} />
      </Element>
    </div>
  );
};

export default HomePage;
