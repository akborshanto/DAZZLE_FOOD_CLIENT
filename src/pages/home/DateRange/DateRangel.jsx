import React, { useState } from 'react'
import { Calendar, DateRange } from 'react-date-range';
const DateRangel = () => {
    const [state, setState] = useState([
        {
          startDate: new Date(),
          endDate: null,
          key: 'selection'
        }
      ]);
  return (
    <div>
    <DateRange
    editableDateInputs={true}
    onChange={item => setState([item.selection])}
    moveRangeOnFirstSelection={false}
    ranges={state}
    
  />
    </div>
  )
}

export default DateRangel
