import React from 'react';
import { useRecoilState } from 'recoil';
import { themeState } from '../recoil/atoms/themeState';
import { mobileState } from '../recoil/atoms/mobileState';
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
  const [isMobile] = useRecoilState(mobileState);
  return (
    <Navbar>
      {!isMobile && (
        <NavbarGroup align={Alignment.LEFT}>
          <NavbarHeading>
            Copyright © 2025 Jerry Wang. Released under the MIT License.
          </NavbarHeading>
        </NavbarGroup>
      )}

      <NavbarGroup align={Alignment.RIGHT}>
        <NavbarHeading>
          <img
            src={darkTheme ? linkedin_white : linkedin_black}
            alt="linkedin"
            style={{
              width: '20px',
              height: '20px',
              marginRight: '10px',
              cursor: 'pointer',
            }}
            onClick={() => window.open('https://www.linkedin.com/in/jwangcs')}
          />
          <img
            src={darkTheme ? github_white : github_black}
            alt="github"
            style={{ width: '20px', height: '20px', cursor: 'pointer' }}
            onClick={() => window.open('https://github.com/05jwang')}
          />
        </NavbarHeading>
      </NavbarGroup>
    </Navbar>
  );
};

export default Footer;
