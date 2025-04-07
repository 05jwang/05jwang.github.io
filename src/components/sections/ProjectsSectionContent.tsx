import React, { useRef } from 'react';
import { Text, Icon, Card } from '@blueprintjs/core';
import { useRecoilState } from 'recoil';
import SectionWrapper from './SectionWrapper';
import tev_homepage from '../../assets/TEV_Homepage.png';
import wordle from '../../assets/wordle.png';
import vip from '../../assets/vip.jpg';
import tarigma from '../../assets/tarigma_corp_logo.jpeg';

interface ProjectsSectionContentProps {
  theme: boolean;
  isMobile: boolean;
}

export const ProjectsSectionContent: React.FC<ProjectsSectionContentProps> = (
  props: ProjectsSectionContentProps,
) => {
  const cardStyle = {
    width: 'min(500px, 90%)',
    margin: '20px',
    display: 'flex',
    height: props.isMobile ? '450px' : '400px',
    flexDirection: 'column' as 'column',
    alignItems: 'center',
  };
  return (
    <section id="Projects" style={SectionWrapper}>
      <h2>Projects</h2>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap',
        }}
      >
        <Card
          interactive={true}
          elevation={2}
          style={cardStyle}
          onClick={() => (window.location.href = '#/projects/tev')}
        >
          <h3>Tarigma-Event-Viewer Video Demo</h3>
          <i>December 2023 – August 2024</i>
          <img
            style={{
              objectFit: 'contain',
              width: 'auto',
              height: '250px',
              marginTop: '15px',
              marginBottom: '15px',
            }}
            src={tev_homepage}
            alt="Tarigma Event Viewer"
          />
          <p>A dashboard for viewing and analyzing Electrical Faults</p>
        </Card>
        <Card
          interactive={true}
          elevation={2}
          style={cardStyle}
          onClick={() => (window.location.href = '#/projects/memeintent')}
        >
          <h3>MemeIntent Paper</h3>
          <i>Accepted to SIGDIAL 2024</i>
          <img
            style={{
              objectFit: 'contain',
              width: '300px',
              height: 'auto',
              marginTop: '50px',
              marginBottom: '60px',
            }}
            src="https://2024.sigdial.org/wp-content/uploads/sites/6/2023/09/cropped-cropped-cropped-cropped-sigdial_site_icon_2-1.png"
            alt="SIGDIAL"
          />
          <p style={{ maxWidth: '400px', textAlign: 'center' }}>
            Providing baseline evaluations paper on a new dataset for meme
            classification
          </p>
        </Card>
        <Card
          interactive={true}
          elevation={2}
          style={cardStyle}
          onClick={() => (window.location.href = '#/projects/vip')}
        >
          <h3>Material Discovery with AI Presentation</h3>
          <i>June 2024 – Present</i>
          <img
            style={{
              objectFit: 'contain',
              width: 'auto',
              height: '250px',
              marginTop: '15px',
              marginBottom: '15px',
            }}
            src={vip}
            alt="VIP"
          />
          <p
            style={{
              maxWidth: '400px',
              textAlign: 'center',
            }}
          >
            Creating models to assist in material science research
          </p>
        </Card>
        <Card
          interactive={true}
          elevation={2}
          style={cardStyle}
          onClick={() => (window.location.href = '#/projects/triage')}
        >
          <h3>Triage Cause Predictor Proof-of-Concept</h3>
          <i>June 2023 – January 2024</i>
          <img
            style={{
              objectFit: 'contain',
              width: 'auto',
              height: '250px',
              marginTop: '15px',
              marginBottom: '15px',
            }}
            src={tarigma}
            alt="Tarigma"
          />
          <p
            style={{
              maxWidth: '400px',
              textAlign: 'center',
            }}
          >
            Responsible for ETL and data preprocessing for a fault prediction
            model
          </p>
        </Card>
        <Card
          interactive={true}
          elevation={2}
          style={cardStyle}
          onClick={() => (window.location.href = '#/projects/wordle')}
        >
          <h3>wordle-asm</h3>
          <i>March – May 2024</i>
          <img
            style={{
              objectFit: 'contain',
              width: 'auto',
              height: '250px',
              marginTop: '15px',
              marginBottom: '15px',
            }}
            src={wordle}
            alt="Wordle"
          />
          <p
            style={{
              maxWidth: '400px',
              textAlign: 'center',
            }}
          >
            The popular game Wordle, but written entirely in MIPS Assembly!
          </p>
        </Card>
      </div>
    </section>
  );
};
