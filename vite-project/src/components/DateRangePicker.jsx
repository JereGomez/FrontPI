import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const DateRangePicker = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  return (
    <div className="date-range-picker row">
      <div className="col-sm-6 d-flex align-items-center justify-content-center" >
        <label htmlFor="startDate" className="form-label"></label>
        <DatePicker
          selected={startDate}
          onChange={date => setStartDate(date)}
          selectsStart
          startDate={startDate}
          endDate={endDate}
          className="form-control date-picker-check-in p-2 ms-0 ms-md-2 mb-2 mb-md-0"
          placeholderText="Check-in"
          dateFormat="dd/MM/yyyy"
        />
      </div>
      <div className="col-sm-6 d-flex align-items-center justify-content-center">
        <label htmlFor="endDate" className="form-label"></label>
        <DatePicker
          selected={endDate}
          onChange={date => setEndDate(date)}
          selectsEnd
          startDate={startDate}
          endDate={endDate}
          minDate={startDate}
          className="form-control date-picker-check-out p-2"
          placeholderText="Check-out"
          dateFormat="dd/MM/yyyy"
        />
      </div>
    </div>
  );
};

export default DateRangePicker;
