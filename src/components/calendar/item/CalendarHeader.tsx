import React from "react";

import useDate from "src/hook/useDate";
import { addMonth, subMonth } from "src/utils/utils";

import { MdArrowBackIosNew } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";

import { ICalendarHeader } from "../Calendar.props";
import { SCalendarHeader } from "./CalendarHeader.styled";

const CalendarHeader = ({ currentDate, onChange }: ICalendarHeader) => {
  const { year, month } = useDate(currentDate);

  const onEvent = {
    onPrevDate: () => onChange(subMonth(currentDate)),
    onNextDate: () => onChange(addMonth(currentDate)),
  };

  return (
    <SCalendarHeader>
      <div className="calendar-date-change-section">
        <button className="calendar-change-button" onClick={onEvent.onPrevDate}>
          <MdArrowBackIosNew />
        </button>

        <div className="calendar-date-format">
          <p>{year}년</p>
          <p>{month}월</p>
        </div>

        <button className="calendar-change-button" onClick={onEvent.onNextDate}>
          <MdArrowForwardIos />
        </button>
      </div>
    </SCalendarHeader>
  );
};

export default CalendarHeader;
