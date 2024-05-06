// DateRangeContext.js
import React, { createContext, useContext, useState } from 'react';

const DateRangeContext = createContext();

export const useDateRange = () => useContext(DateRangeContext);

export const DateRangeProvider = ({ children }) => {
  const [dateRange, setDateRange] = useState([]);

  const onDateChangeHandler = (ranges) => {
    setDateRange([ranges.selection]);
  };

  return (
    <DateRangeContext.Provider value={{ dateRange, onDateChangeHandler }}>
      {children}
    </DateRangeContext.Provider>
  );
};
