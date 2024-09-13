import React from 'react';
import { useRecoilState } from 'recoil';
import { themeState } from '../recoil/atoms/themeState';

const ResumePage: React.FC = () => {
  const [darkTheme] = useRecoilState(themeState);
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '20px',
        paddingTop: '50px',
      }}
    >
      <h1>Resume</h1>
      <iframe
        title="resume"
        allowTransparency
        style={{
          width: '100%',
          height: '1000px',
          maxWidth: '800px',
        }}
        src="https://docs.google.com/document/d/1fskp9Q9r7JBY4NZrD2S8-8edlODksNu6dAeRDz6JrA4/preview?"
      />
    </div>
  );
};

export default ResumePage;
