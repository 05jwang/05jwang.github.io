import React, { useRef, useState } from 'react';
import {
  Text,
  Icon,
  Card,
  Tabs,
  Tab,
  InputGroup,
  NonIdealState,
} from '@blueprintjs/core';
import SectionWrapper from './SectionWrapper';
import linkedin_black from '../../assets/linkedin_black.svg';
import linkedin_white from '../../assets/linkedin_white.svg';
import github_black from '../../assets/github_black.svg';
import github_white from '../../assets/github_white.svg';

interface ContactSectionContentProps {
  theme: boolean;
}
export const ContactSectionContent: React.FC<ContactSectionContentProps> = (
  props: ContactSectionContentProps,
) => {
  return (
    <section id="Contact" style={SectionWrapper}>
      <h2>Contact</h2>
      <Text>
        <Icon icon="envelope" /> Email:
        <a href="mailto:05jwang@gmail.com">05jwang@gmail.com</a>
        {' | '}
        <a href="mailto:jwang3450@gatech.edu">jwang3450@gatech.edu</a>
        {'\n'}
      </Text>
      <Text>
        <img
          src={props.theme ? linkedin_white : linkedin_black}
          alt="linkedin"
          style={{ width: '16px', height: '16px' }}
        />{' '}
        LinkedIn:{' '}
        <a href="https://www.linkedin.com/in/jwangcs/">
          linkedin.com/in/jwangcs
        </a>
      </Text>
      <Text>
        <img
          src={props.theme ? github_white : github_black}
          alt="github"
          style={{ width: '16px', height: '16px' }}
        />{' '}
        GitHub: <a href="https://www.github.com/05jwang">github.com/05jwang</a>
      </Text>
    </section>
  );
};
