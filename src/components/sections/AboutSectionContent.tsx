import React from 'react';
import { Button } from '@blueprintjs/core';
import { Link } from 'react-scroll';
import SectionWrapper from './SectionWrapper';
import headshot from '../../assets/headshot.jpg';
interface AboutSectionContentProps {
  theme: boolean;
  isMobile: boolean;
}

export const AboutSectionContent: React.FC<AboutSectionContentProps> = (
  props: AboutSectionContentProps,
) => {
  return (
    <section id="About" style={SectionWrapper}>
      <h2>About</h2>
      {props.isMobile && (
        <img
          src={headshot}
          alt="Jerry Wang"
          style={{
            borderRadius: '80%',
            margin: '20px',
            width: '200px',
            height: 'auto',
            objectFit: 'cover',
          }}
        />
      )}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <div>
          <p
            style={{
              maxWidth: '600px',
              marginRight: props.isMobile ? ' ' : '20px',
              textAlign: props.isMobile ? 'center' : 'left',
            }}
          >
            Hey there! My name is Jerry Wang, and I'm a computer science student
            at Georgia Tech. I'm passionate about software development and I
            enjoy working on projects where I can make a positive impact. I have
            experience with full-stack web development, IoT C/C++ development,
            and Machine Learning research. I'm always eager to learn new
            technologies and improve my skills, so reach out to me if you have
            any cool projects or opportunities!{' '}
          </p>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Button
              icon="document"
              intent="primary"
              style={{ marginTop: '20px' }}
              onClick={() => (window.location.href = '#/resume')}
            >
              Resume
            </Button>
            <Link to="Contact">
              <Button
                icon="envelope"
                intent="success"
                style={{ marginTop: '20px', marginLeft: '50px' }}
              >
                Contact
              </Button>
            </Link>
          </div>
        </div>
        {!props.isMobile && (
          <img
            src={headshot}
            alt="Jerry Wang"
            style={{
              borderRadius: '80%',
              width: '200px',
              height: 'auto',
              objectFit: 'cover',
            }}
          />
        )}
      </div>
    </section>
  );
};
