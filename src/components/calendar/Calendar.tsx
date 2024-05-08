import React, { useState } from "react";

import { SCalendar } from "./Calendar.styled";
import CalendarHeader from "./item/CalendarHeader";

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState<Date>(new Date());

  const onChangeDate = (date: Date) => {
    setCurrentDate(date);
  };

  console.log(currentDate);

  return (
    <SCalendar>
      <CalendarHeader currentDate={currentDate} onChange={onChangeDate} />
    </SCalendar>
  );
};

export default Calendar;
