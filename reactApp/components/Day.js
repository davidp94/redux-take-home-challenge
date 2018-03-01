import React from 'react';
import TimeSlot from './TimeSlot';

// class component
class Day extends React.Component {
  render() {
    return (
      <div className="schedule">
          <em>{this.props.weekday}</em>
          <ul>
              <TimeSlot slot="9am" />
              <TimeSlot slot="10am" />
              <TimeSlot slot="11am" />
              <TimeSlot slot="12am" />
              <TimeSlot slot="1pm" />
              <TimeSlot slot="2pm" />
              <TimeSlot slot="3pm" />
              <TimeSlot slot="4pm" />
              <TimeSlot slot="5pm" />
          </ul>
      </div>
    );
  }
};


export default Day;
