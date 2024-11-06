import React, { useState } from 'react';
import { Text, Icon, Card, HTMLTable } from '@blueprintjs/core';
import SectionWrapper from './sections/SectionWrapper';

interface ReliableStatusComponentProps {}

const iconStyle = {
  marginLeft: '2px',
  marginRight: '2px',
};

const statusIcons = {
  error: <Icon icon="cross-circle" color={'red'} style={iconStyle} />,
  OK: <Icon icon="tick-circle" color={'green'} style={iconStyle} />,
  warning: <Icon icon="warning-sign" color={'#EEB740'} style={iconStyle} />, // Hazard yellow
};

const renderSummary = (actuators) => {
  const errorCount = actuators.filter(
    (actuator) => actuator.status === 'error',
  ).length;
  const warningCount = actuators.filter(
    (actuator) => actuator.status === 'warning',
  ).length;
  if (errorCount === 0 && warningCount === 0) {
    return (
      <Text>
        {statusIcons['OK']}
        All systems nominal
      </Text>
    );
  }
  return (
    <div>
      <Text>
        {errorCount} {statusIcons['error']}
        {errorCount === 1 ? 'error' : 'errors'}, {warningCount}{' '}
        {statusIcons['warning']}
        {warningCount === 1 ? 'warning' : 'warnings'}
      </Text>
    </div>
  );
};

const renderActuatorStatus = (actuator: any) => {
  return (
    <tr>
      <td>{statusIcons[actuator.status]}</td>
      <td>{actuator.name}</td>
    </tr>
  );
};
const ReliableStatusComponent: React.FC<ReliableStatusComponentProps> = (
  props: ReliableStatusComponentProps,
) => {
  const [actuators, setActuators] = useState([
    {
      name: 'Ailerons',
      status: 'error',
    },
    {
      name: 'Elevators',
      status: 'error',
    },
    {
      name: 'Rudder',
      status: 'OK',
    },
    {
      name: 'Flaps',
      status: 'warning',
    },
  ]);
  return (
    <section style={SectionWrapper}>
      <div>
        <Card
          style={{
            fontFamily: 'Arial, sans-serif',
          }}
        >
          <h3
            style={{
              fontFamily: 'Arial, sans-serif',
            }}
          >
            Actuator Status
          </h3>
          {/* {renderSummary(actuators)} */}
          <div>
            <HTMLTable
              striped
              style={{
                width: '100%',
              }}
            >
              <tbody>
                {actuators.map((actuator) => {
                  return renderActuatorStatus(actuator);
                })}
              </tbody>
            </HTMLTable>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default ReliableStatusComponent;
