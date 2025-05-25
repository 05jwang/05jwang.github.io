import React from 'react';
import { Card } from '@blueprintjs/core';
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
    flexDirection: 'column' as const,
    alignItems: 'center',
  };
  const imageStyle = {
    width: '100%',
    height: 'auto',
    objectFit: 'contain' as const,
  };
  const imageDivStyle = {
    marginTop: '10px',
    marginBottom: '10px',
    display: 'flex',
    width: '90%',
    height: '70%',
  };
  return (
    <section id="Projects" style={SectionWrapper}>
      <h2>Portfolio</h2>
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
          onClick={() => (window.location.href = '#/projects/memeintent')}
        >
          <h3>MemeIntent Paper</h3>
          <i>Accepted to SIGDIAL 2024</i>
          <div style={imageDivStyle}>
            <img
              style={imageStyle}
              src="https://2024.sigdial.org/wp-content/uploads/sites/6/2023/09/cropped-cropped-cropped-cropped-sigdial_site_icon_2-1.png"
              alt="SIGDIAL"
            />
          </div>
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
          <div style={imageDivStyle}>
            <img style={imageStyle} src={vip} alt="VIP" />
          </div>
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
          onClick={() => (window.location.href = '#/projects/wordle')}
        >
          <h3>wordle-asm</h3>
          <i>March – May 2024</i>
          <div style={imageDivStyle}>
            <img style={imageStyle} src={wordle} alt="Wordle" />
          </div>
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
