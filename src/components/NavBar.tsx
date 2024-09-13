import React from 'react';
import { Navbar, Alignment, Button, Switch } from '@blueprintjs/core';
import { Link } from 'react-scroll';
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
        <Link to="About">
          <Button minimal>About</Button>
        </Link>
        <Link to="Experience">
          <Button minimal>Experience</Button>
        </Link>
        <Link to="Projects">
          <Button minimal>Projects</Button>
        </Link>
        <Link to="Skills">
          <Button minimal>Skills</Button>
        </Link>
        <Link to="Contact">
          <Button minimal>Contact</Button>
        </Link>
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
