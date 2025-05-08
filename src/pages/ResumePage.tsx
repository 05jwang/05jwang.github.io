import React from 'react';
import { Button } from '@blueprintjs/core';

const resumeURL =
  'https://docs.google.com/document/d/1fskp9Q9r7JBY4NZrD2S8-8edlODksNu6dAeRDz6JrA4';

const ResumePage: React.FC = () => {
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
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          maxWidth: '800px',
          alignItems: 'center',
          position: 'relative',
        }}
      >
        <h1>Resume</h1>

        <Button
          icon="download"
          text="Download"
          style={{
            marginTop: '20px',
            position: 'absolute',
            right: '0px',
            bottom: '10px',
          }}
          onClick={() =>
            window.open(resumeURL + '/export?format=pdf', '_blank')
          }
        />
      </div>
      <iframe
        title="resume"
        allowTransparency
        style={{
          width: '100%',
          height: '1000px',
          maxWidth: '800px',
        }}
        src={resumeURL + '/preview?'}
      />
    </div>
  );
};

export default ResumePage;
