import React from 'react';
import { NonIdealState } from '@blueprintjs/core';
export const NoSkillsInfo: React.FC = () => {
  return (
    <NonIdealState
      icon="search"
      title="No Skills Found"
      description="No skills were found. However, I'm always happy to learn new things! :)"
    />
  );
};
