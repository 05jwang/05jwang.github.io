import React, { useEffect } from 'react';
import { Element, scroller } from 'react-scroll';
import { useLocation } from 'react-router-dom';

import wordle from '../../assets/wordle.png';
import { Button } from '@blueprintjs/core';

const WordleProjectPage: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    scroller.scrollTo('header', {
      offset: -50,
    });
  }, [location.state]);
  const handleDownload = () => {
    const filePath = '/wordle-asm.zip';

    const link = document.createElement('a');
    link.href = filePath;
    link.download = 'wordle-asm.zip';
    document.body.appendChild(link);
    link.click();

    document.body.removeChild(link);
  };
  return (
    <div
      style={{
        marginTop: '4rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Element name="header">
        <h1>wordle-asm</h1>
      </Element>
      <img
        style={{
          objectFit: 'contain',
          width: 'auto',
          height: '250px',
          margin: '15px',
        }}
        src={wordle}
        alt="Wordle"
      />
      <p
        style={{
          width: '50%',
          textAlign: 'center',
        }}
      >
        wordle-asm is an implementation of the popular game Wordle in MIPS
        Assembly. It was created as a final project for a Computer Architecture
        class. Features include include verifying user input against a
        dictionary file, automatically selecting a daily word using the system
        clock, proving the user with hints using a 64 x 128 pixel graphical user
        interface, and a user guide and instructions.
      </p>

      <Button
        icon="code"
        text="Download Source Code"
        onClick={() => {
          handleDownload();
        }}
      />
    </div>
  );
};

export default WordleProjectPage;
