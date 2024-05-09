import React, { useState } from "react";

import { ICalendar } from "./Calendar.props";
import { SCalendar } from "./Calendar.styled";

import CalendarHeader from "./item/CalendarHeader";
import CalendarWeek from "./item/CalendarWeek";
import CalendarMain from "./item/CalendarMain";
import CalendarFooter from "./item/CalendarFooter";

const Calendar = ({ selectedDate, onSelectDate }: ICalendar) => {
  const [currentDate, setCurrentDate] = useState<Date>(new Date());

  const onChangeDate = (date: Date) => {
    setCurrentDate(date);
  };

  const onSelectFormatDate = (date: Date) => {
    let temp: Date[] = [...selectedDate];

    if (temp?.length === 0) {
      temp.push(date);
    } else if (temp?.length === 1) {
      if (temp[0] > date) {
        temp = [];
        temp.push(date);
      } else {
        temp.push(date);
      }
    } else if (temp?.length === 2) {
      temp = [];
      temp.push(date);
    }

    onSelectDate(temp);
  };

  return (
    <SCalendar>
      <div className="calendar-container">
        <CalendarHeader currentDate={currentDate} onChange={onChangeDate} />
        <CalendarWeek />
        <CalendarMain
          currentDate={currentDate}
          onChange={onChangeDate}
          selectedDate={selectedDate}
          onSelectDate={onSelectFormatDate}
        />
      </div>

      <CalendarFooter />
    </SCalendar>
  );
};

export default Calendar;
