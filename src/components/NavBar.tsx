import React from 'react';
import { Navbar, Alignment, Button, Switch } from '@blueprintjs/core';
import { Link, scroller } from 'react-scroll';
import { useRecoilState } from 'recoil';
import { themeState } from '../recoil/atoms/themeState';
import { useNavigate, useLocation } from 'react-router-dom';

const NavBar: React.FC = () => {
  const [darkTheme, setDarkTheme] = useRecoilState(themeState);
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigateAndScroll = (section: string) => {
    console.log('section: ', section);
    console.log(location);
    if (location.pathname !== '/') {
      navigate('/', { state: { section } });
    } else {
      scroller.scrollTo(section);
    }
  };

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
        <Button minimal onClick={() => handleNavigateAndScroll('About')}>
          About
        </Button>
        <Button minimal onClick={() => handleNavigateAndScroll('Experience')}>
          Experience
        </Button>
        <Button minimal onClick={() => handleNavigateAndScroll('Projects')}>
          Projects
        </Button>
        <Button minimal onClick={() => handleNavigateAndScroll('Skills')}>
          Skills
        </Button>
        <Button minimal onClick={() => handleNavigateAndScroll('Contact')}>
          Contact
        </Button>
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
