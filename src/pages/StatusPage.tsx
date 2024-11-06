import React from 'react';
import ReliableStatusComponent from '../components/ReliableStatusComponent';

const StatusPage: React.FC = () => {
  return (
    <div
      className="statuspage"
      style={{
        marginTop: '50px',
      }}
    >
      <ReliableStatusComponent />
    </div>
  );
};

export default StatusPage;
