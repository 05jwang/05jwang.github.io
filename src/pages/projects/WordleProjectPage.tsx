import React from 'react';
import wordle from '../../assets/wordle.png';
import { Button } from '@blueprintjs/core';

const WordleProjectPage: React.FC = () => {
  return (
    <div
      style={{
        marginTop: '4rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <h1>wordle-asm</h1>
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
          const link = document.createElement('a');
          link.href = '/assets/wordle-asm.zip';
          link.download = 'wordle-asm.zip';
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        }}
      />
    </div>
  );
};

export default WordleProjectPage;
