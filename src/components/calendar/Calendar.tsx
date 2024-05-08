import React, { useState } from "react";

import { SCalendar } from "./Calendar.styled";

import CalendarHeader from "./item/CalendarHeader";
import CalendarMain from "./item/CalendarMain";

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState<Date>(new Date());

  const onChangeDate = (date: Date) => {
    setCurrentDate(date);
  };

  return (
    <SCalendar>
      <CalendarHeader currentDate={currentDate} onChange={onChangeDate} />
      <CalendarMain currentDate={currentDate} />
    </SCalendar>
  );
};

export default Calendar;
