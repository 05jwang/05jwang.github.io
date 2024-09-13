import React from 'react';
import { useRecoilState } from 'recoil';
import { themeState } from '../recoil/atoms/themeState';
import {
  Alignment,
  Navbar,
  NavbarGroup,
  NavbarHeading,
} from '@blueprintjs/core';
import linkedin_black from '../assets/linkedin_black.svg';
import linkedin_white from '../assets/linkedin_white.svg';
import github_black from '../assets/github_black.svg';
import github_white from '../assets/github_white.svg';

const Footer: React.FC = () => {
  const [darkTheme] = useRecoilState(themeState);
  return (
    <Navbar>
      <NavbarGroup align={Alignment.LEFT}>
        <NavbarHeading>
          Created by Jerry Wang with <a href="https://reactjs.org/">React</a>{' '}
          and <a href="https://blueprintjs.com/">Blueprint</a>
        </NavbarHeading>
      </NavbarGroup>
      <NavbarGroup align={Alignment.RIGHT}>
        <NavbarHeading>
          <img
            src={darkTheme ? linkedin_white : linkedin_black}
            alt="linkedin"
            style={{ width: '20px', height: '20px', marginRight: '10px' }}
          />
          <img
            src={darkTheme ? github_white : github_black}
            alt="github"
            style={{ width: '20px', height: '20px' }}
          />
        </NavbarHeading>
      </NavbarGroup>
    </Navbar>
  );
};

export default Footer;
