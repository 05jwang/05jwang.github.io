import React, { useRef } from 'react';
import { ProjectsSectionContent } from '../components/sections/ProjectsSectionContent';
import { useRecoilState } from 'recoil';
import { themeState } from '../recoil/atoms/themeState';

const ProjectsPage: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [darkTheme] = useRecoilState(themeState);
  return (
    <div
      style={{
        marginTop: '50px',
      }}
    >
      <ProjectsSectionContent theme={darkTheme} />
    </div>
  );
};

export default ProjectsPage;
