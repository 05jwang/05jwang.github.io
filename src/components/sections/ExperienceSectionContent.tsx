import React, { useRef } from 'react';
import { Text, Icon, Card } from '@blueprintjs/core';
import { useRecoilState } from 'recoil';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import tarigma_white from '../../assets/tarigma_white.png';
import tarigma_black from '../../assets/tarigma_black.png';
import georgiaTech from '../../assets/georgiaTech.svg';
import SectionWrapper from './SectionWrapper';

interface ExperienceSectionContentProps {
  theme: boolean;
}

export const ExperienceSectionContent: React.FC<
  ExperienceSectionContentProps
> = (props: ExperienceSectionContentProps) => {
  return (
    <section id="Experience" style={SectionWrapper}>
      <h2
        style={{
          marginBottom: '20px',
        }}
      >
        Experience
      </h2>

      <VerticalTimeline lineColor="#75aadb">
        <VerticalTimelineElement
          contentStyle={{
            background: props.theme ? '#383e47' : '#ffffff',
            boxShadow: props.theme
              ? '0 0 20px rgba(0, 0, 0, 0.2)'
              : '0 0 20px rgba(0, 0, 0, 0.1)',
            transition: 'background 0.3s ease',
          }}
          date="May 2023 – Present"
          contentArrowStyle={{ borderRight: '7px solid  #75aadb' }}
          iconStyle={{ background: '#75aadb' }}
          icon={
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '110%',
              }}
            >
              <Icon icon="briefcase" />
            </div>
          }
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              cursor: 'pointer',
            }}
            onClick={() => window.open('https://tarigma.com')}
          >
            <img
              src={props.theme ? tarigma_white : tarigma_black}
              alt="Tarigma"
              style={{
                width: '50px',
                marginRight: '10px',
              }}
            />
            <div>
              <h3>Full Stack Software Engineer Intern</h3>
              <h4>Tarigma Corporation</h4>
              <i>Columbus, OH</i>
            </div>
          </div>
          <p>
            Worked on a full stack application for managing a power distribution
            grid and notifying operators of outages. Developed using a Java
            Spring server and SQL database on the backend and a React frontend.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          contentStyle={{
            background: props.theme ? '#383e47' : '#ffffff',
            boxShadow: props.theme
              ? '0 0 20px rgba(0, 0, 0, 0.2)'
              : '0 0 20px rgba(0, 0, 0, 0.1)',
            transition: 'background 0.3s ease',
          }}
          date="April 2021 – May 2023"
          contentArrowStyle={{ borderRight: '7px solid  #75aadb' }}
          iconStyle={{ background: '#75aadb' }}
          icon={
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '110%',
              }}
            >
              <Icon icon="briefcase" />
            </div>
          }
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              cursor: 'pointer',
            }}
            onClick={() => window.open('https://tarigma.com')}
          >
            <img
              src={props.theme ? tarigma_white : tarigma_black}
              alt="Tarigma"
              style={{
                width: '50px',
                marginRight: '10px',
              }}
            />
            <div>
              <h3>Software Developer Intern</h3>
              <h4>Tarigma Corporation</h4>
              <i>Columbus, OH</i>
            </div>
          </div>
          <p>
            Developed a C/C++ data acquisition platform to monitor electrical
            substations and securely send disturbance reports and health status
            to a central it to a central server for processing.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          contentStyle={{
            background: props.theme ? '#383e47' : '#ffffff',
            boxShadow: props.theme
              ? '0 0 20px rgba(0, 0, 0, 0.2)'
              : '0 0 20px rgba(0, 0, 0, 0.1)',
            transition: 'background 0.3s ease',
          }}
          date="Expected Graduation: May 2026"
          contentArrowStyle={{ borderRight: '7px solid  #75aadb' }}
          iconStyle={{ background: '#75aadb' }}
          icon={
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '110%',
              }}
            >
              <Icon icon="learning" />
            </div>
          }
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              cursor: 'pointer',
            }}
            onClick={() => window.open('https://www.cc.gatech.edu/')}
          >
            <img
              src={georgiaTech}
              alt="Georgia Tech"
              style={{
                width: '50px',
              }}
            />
            <div>
              <h3>BS in Computer Science</h3>
              <h4>Georgia Institute of Technology</h4>
              <i>Atlanta, GA</i>
            </div>
          </div>
          <p>
            GPA: 4.0/4.0
            <br />
            Threads: (Artificial) Intelligence and Information Internetworks
            <br />
            Clubs and Societies: GT Runnin’ Wreck, Big Data Big Impact
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </section>
  );
};
