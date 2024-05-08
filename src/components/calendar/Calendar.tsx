import React, { useState } from "react";

import { SCalendar } from "./Calendar.styled";

import CalendarHeader from "./item/CalendarHeader";
import CalendarWeek from "./item/CalendarWeek";
import CalendarMain from "./item/CalendarMain";
import CalendarFooter from "./item/CalendarFooter";

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState<Date>(new Date());

  const onChangeDate = (date: Date) => {
    setCurrentDate(date);
  };

  return (
    <SCalendar>
      <div className="calendar-container">
        <CalendarHeader currentDate={currentDate} onChange={onChangeDate} />
        <CalendarWeek />
        <CalendarMain currentDate={currentDate} />
      </div>

      <CalendarFooter />
    </SCalendar>
  );
};

export default Calendar;
