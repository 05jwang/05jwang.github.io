import React from 'react';

const MemeIntentProjectPage: React.FC = () => {
  return (
    <div
      style={{
        marginTop: '4rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <h1>MemeIntent: Benchmarking Intent Description Generation for Memes</h1>
      <i>
        By: Jeongsik Park, Khoi PN Nguyen, Terrence Li, Suyesh Shrestha, Megan
        Kim Vu, <strong>Jerry Yining Wang</strong> and Vincent Ng
      </i>
      <br />
      <iframe
        src="https://aclanthology.org/2024.sigdial-1.54.pdf"
        title="MemeIntent: Benchmarking Intent Description Generation for Memes"
        style={{
          width: '100%',
          height: '1100px',
          maxWidth: '850px',
        }}
      ></iframe>
      <br />
      <p
        style={{
          width: '50%',
          textAlign: 'center',
        }}
      >
        MemeIntent is a new benchmark for intent generation in memes. In the
        paper, we argue that special attention has to be paid to the background
        knowledge required to understand memes, and we propose a new benchmark
        that specifically tests the ability of models to generate intents that
        require such background knowledge. I was involved in discussions about
        the paper content, and I helped with implementing the baseline models
        and experiments. This involved building and testing previous models and
        approaches from the literature to determine that this was in fact a new
        and challenging benchmark.
      </p>
      <br />
    </div>
  );
};

export default MemeIntentProjectPage;
