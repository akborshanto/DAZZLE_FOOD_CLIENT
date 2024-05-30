import React, { useState } from 'react'
import { DateRange } from 'react-date-range';
import { Calendar } from 'react-date-range';
import 'react-date-range/dist/theme/default.css'; // theme css file
const DateRangel = () => {
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: null,
      key: 'selection'
    }
  ]);
  return (
    <div className='bg-gray-400 mx-auto text-center my-8'>
    <DateRange
    rangeColors={['#fb5200']}
    editableDateInputs={true}
    onChange={item => setState([item.selection])}
    moveRangeOnFirstSelection={false}
    ranges={state}


  />
    </div>
  )
}

export default DateRangel
