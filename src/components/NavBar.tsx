import React from 'react';
import { Navbar, Alignment, Button, Switch } from '@blueprintjs/core';
import { Link } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { themeState } from '../recoil/atoms/themeState';

const NavBar: React.FC = () => {
  const [darkTheme, setDarkTheme] = useRecoilState(themeState);

  const toggleTheme = () => {
    setDarkTheme(!darkTheme);
  };

  return (
    <Navbar
      fixedToTop
      style={{
        height: '50px',
      }}
    >
      <Navbar.Group align={Alignment.LEFT}>
        <Navbar.Heading>
          <a href="/">
            <Button
              minimal
              style={{
                fontSize: '24px',
              }}
            >
              Jerry Wang
            </Button>
          </a>
        </Navbar.Heading>
        <Navbar.Divider />
        <a href="/#About">
          <Button minimal>About</Button>
        </a>
        <a href="/#Experience">
          <Button minimal>Experience</Button>
        </a>
        <a href="/#Projects">
          <Button minimal>Projects</Button>
        </a>
        <a href="/#Skills">
          <Button minimal>Skills</Button>
        </a>
        <a href="/#Contact">
          <Button minimal>Contact</Button>
        </a>
      </Navbar.Group>
      <Navbar.Group align={Alignment.RIGHT}>
        <Button
          minimal
          icon={darkTheme ? 'flash' : 'moon'}
          text="Toggle Theme"
          onClick={toggleTheme}
        />
      </Navbar.Group>
    </Navbar>
  );
};

export default NavBar;
