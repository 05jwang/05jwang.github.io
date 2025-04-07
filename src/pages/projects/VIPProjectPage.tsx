import React, { useEffect } from 'react';
import { Element, scroller } from 'react-scroll';
import { useLocation } from 'react-router-dom';

import vip from '../../assets/vip.jpg';

const slideURL =
  'https://docs.google.com/presentation/d/1mqUBlAXYTzNzxMMXmdWIWAFFxWNEe6-dmbgqgqSju6I';

const VIPProjectPage: React.FC = () => {
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
        <h1>Advancing Material Discovery with AI</h1>
      </Element>
      <iframe
        src={slideURL + '/preview?'}
        style={{ marginBottom: '2rem' }}
        width="640"
        height="398"
        allowFullScreen
      ></iframe>
      <p
        style={{
          width: '50%',
          textAlign: 'center',
        }}
      >
        Advancing Material Discovery with AI is my junior capstone project
        required for my degree in Computer Science. We developing an active
        learning framework to try and generate materials with a desired
        spectrum. Since the forward problem is already well understood (given a
        material, predict its spectrum), we are focused on solving the inverse
        problem (given a spectrum, predict a material) by leveraging models that
        can solve the forward problem in an active learning framework. I am
        currently working on a diffusion-based generative model to improve the
        accuracy of the initial sampling.
      </p>
    </div>
  );
};

export default VIPProjectPage;
