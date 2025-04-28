import React, { useState, useEffect } from 'react';
import {
  Navbar,
  Alignment,
  Button,
  Popover,
  PopoverPosition,
} from '@blueprintjs/core';
import { Link, scroller } from 'react-scroll';
import { useRecoilState } from 'recoil';
import { themeState } from '../recoil/atoms/themeState';
import { mobileState } from '../recoil/atoms/mobileState';
import { useNavigate, useLocation } from 'react-router-dom';

const NavBar: React.FC = () => {
  const [darkTheme, setDarkTheme] = useRecoilState(themeState);
  const [isMobile] = useRecoilState(mobileState);
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigateAndScroll = (section: string) => {
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
      {isMobile ? (
        <>
          <Navbar.Group align={Alignment.LEFT}>
            <Navbar.Heading>
              <a href="/">
                <Button
                  minimal
                  style={{
                    fontSize: '18px',
                  }}
                >
                  Jerry Wang
                </Button>
              </a>
            </Navbar.Heading>
            <Navbar.Divider />
          </Navbar.Group>
          <Navbar.Group align={Alignment.RIGHT}>
            <Button
              minimal
              icon={darkTheme ? 'flash' : 'moon'}
              onClick={toggleTheme}
            />
            <Popover
              minimal
              position="bottom-right"
              content={
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                >
                  <Button
                    minimal
                    onClick={() => handleNavigateAndScroll('About')}
                  >
                    About
                  </Button>
                  <Button
                    minimal
                    onClick={() => handleNavigateAndScroll('Experience')}
                  >
                    Experience
                  </Button>
                  <Button
                    minimal
                    onClick={() => handleNavigateAndScroll('Projects')}
                  >
                    Projects
                  </Button>
                  <Button
                    minimal
                    onClick={() => handleNavigateAndScroll('Skills')}
                  >
                    Skills
                  </Button>
                  <Button
                    minimal
                    onClick={() => handleNavigateAndScroll('Contact')}
                  >
                    Contact
                  </Button>
                </div>
              }
            >
              <Button minimal icon="menu" />
            </Popover>
          </Navbar.Group>
        </>
      ) : (
        <>
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
            <Button
              minimal
              onClick={() => handleNavigateAndScroll('Experience')}
            >
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
        </>
      )}
    </Navbar>
  );
};

export default NavBar;
