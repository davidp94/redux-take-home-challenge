import React from 'react';
import Day from './Day';

// class component
class Week extends React.Component {
  render() {
    return (
      <div>
          <Day weekday="Monday" />
          <Day weekday="Tuesday" />
          <Day weekday="Wednesday" />
          <Day weekday="Thursday" />
          <Day weekday="Friday" />
      </div>
    );
  }
};


export default Week;
