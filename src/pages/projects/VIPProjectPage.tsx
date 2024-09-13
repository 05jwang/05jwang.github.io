import React from 'react';
import vip from '../../assets/vip.jpg';

const VIPProjectPage: React.FC = () => {
  return (
    <div
      style={{
        marginTop: '4rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <h1>Advancing Material Discovery with AI</h1>
      <img
        style={{
          objectFit: 'contain',
          width: 'auto',
          height: '250px',
          margin: '15px',
        }}
        src={vip}
        alt="VIP"
      />
      <p
        style={{
          width: '50%',
          textAlign: 'center',
        }}
      >
        Advancing Material Discovery with AI is my junior capstone project
        required for my degree in Computer Science. The project involves
        creating models to assist in material science research. I am part of the
        inverse design team, which is trying to create a model that can generate
        candidate materials based on a set of desired properties (as opposed to
        the traditional method of trying to predict the properties of a material
        based on its structure).
      </p>
    </div>
  );
};

export default VIPProjectPage;
