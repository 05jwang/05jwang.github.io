import React from 'react';
import { useRecoilState } from 'recoil';
import { themeState } from '../recoil/atoms/themeState';
import { Button, Icon } from '@blueprintjs/core';

const NotFoundPage: React.FC = () => {
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
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          maxWidth: '800px',
          alignItems: 'center',
          position: 'relative',
          paddingTop: '100px',
        }}
      >
        <h1>Page Not Found</h1>
        <p>
          The page you are looking for does not exist. Please check the URL and
          try again.
        </p>
        <div>
          <Button
            icon="arrow-left"
            text="Go Back"
            onClick={() => window.history.back()}
            style={{ marginTop: '20px' }}
          />
          <Button
            icon="home"
            text="Home"
            onClick={() => (window.location.href = '#/')}
            style={{ marginTop: '20px', marginLeft: '20px' }}
          />
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;