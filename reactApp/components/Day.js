import React from 'react';
import TimeSlot from './TimeSlot';

let timeSlots = [9,10,11,12,1,2,3,4,5];

// class component
class Day extends React.Component {
  render() {
    return (
      <div className="schedule">
          <em>Schedule</em>
          <ul>
              {timeSlots.map((slot) => (<TimeSlot slot={slot} key={slot}/>))}
          </ul>
      </div>
    );
  }
};


export default Day;
