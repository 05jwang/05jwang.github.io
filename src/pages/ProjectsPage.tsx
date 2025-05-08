import React, { useEffect } from 'react';
import { ProjectsSectionContent } from '../components/sections/ProjectsSectionContent';
import { mobileState } from '../recoil/atoms/mobileState';
import { useRecoilState } from 'recoil';
import { themeState } from '../recoil/atoms/themeState';

const ProjectsPage: React.FC = () => {
  const [darkTheme] = useRecoilState(themeState);
  const [isMobile, setIsMobile] = useRecoilState(mobileState);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 700);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [setIsMobile]);
  return (
    <div
      style={{
        marginTop: '50px',
        maxWidth: '95%',
      }}
    >
      <ProjectsSectionContent theme={darkTheme} isMobile={isMobile} />
    </div>
  );
};

export default ProjectsPage;
