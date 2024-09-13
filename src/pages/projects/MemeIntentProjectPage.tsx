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
      <h1>
        MemeIntent: An Intent Generation Benchmark for Memes Leveraging
        Background Knowledge
      </h1>
      <i>
        By: Jeongsik Park, Khoi PN Nguyen, Terrence Li, Suyesh Shrestha, Megan
        Kim Vu, <strong>Jerry Yining Wang</strong> and Vincent Ng
      </i>
      <img
        style={{
          objectFit: 'contain',
          width: '300px',
          height: 'auto',
          margin: '50px',
          marginBottom: '60px',
          cursor: 'pointer',
        }}
        src="https://2024.sigdial.org/wp-content/uploads/sites/6/2023/09/cropped-cropped-cropped-cropped-sigdial_site_icon_2-1.png"
        alt="SIGDIAL"
        onClick={() => window.open('https://2024.sigdial.org/')}
      />
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
      <b
        style={{
          width: '50%',
          textAlign: 'center',
        }}
      >
        This paper was accepted to the 2024 SIGDIAL conference, and will be
        published during the proceedings (September 18-20, 2024). It will be
        embedded here once published.
      </b>
      <br />
    </div>
  );
};

export default MemeIntentProjectPage;
