import React, { useEffect } from 'react';
import { Element, scroller } from 'react-scroll';
import { useLocation } from 'react-router-dom';

import tarigma from '../../assets/tarigma_corp_logo.jpeg';
const TriageProjectPage: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    scroller.scrollTo('header', {
      offset: -50,
    });
  }, [location.state]);
  return (
    <div
      style={{
        marginTop: '4rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Element name="header">
        <h1>Triage Fault Cause Predictor Proof-of-Concept</h1>
      </Element>
      <img
        style={{
          objectFit: 'contain',
          width: 'auto',
          height: '250px',
          margin: '15px',
        }}
        src={tarigma}
        alt="Tarigma"
      />
      <p
        style={{
          width: '50%',
          textAlign: 'center',
        }}
      >
        Triage was a proof-of-concept project for a convolutional neural network
        (CNN) that is able to predict the root cause of an electrical fault
        based on the waveforms of the current and voltage signals. This
        imformation is critical for strengthening the power grid against future
        outages. My role in this project was to develop the data pipeline for
        live data, and backfill the dataset with historical data. The waveform
        data is stored using many different formats, and I was responsible for
        designing a unified data format that could be used by the CNN, and
        converting the data to this format. In the proof of concept, the CNN was
        able to predict some root causes such as lightning with over 95%
        accuracy.
      </p>
    </div>
  );
};

export default TriageProjectPage;
