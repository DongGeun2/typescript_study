import React from "react";

import useDate from "src/hook/useDate";
import { addMonth, subMonth } from "src/utils/utils";

import { MdArrowLeft } from "react-icons/md";
import { MdArrowRight } from "react-icons/md";

import { ICalendarHeader } from "../Calendar.props";
import { SCalendarHeader } from "./CalendarHeader.styled";

const CalendarHeader = ({ currentDate, onChange }: ICalendarHeader) => {
  const { year, month } = useDate(currentDate);

  const onEvent = {
    onPrevDate: () => onChange(subMonth(currentDate)),
    onNextDate: () => onChange(addMonth(currentDate)),
    onToday: () => onChange(new Date()),
  };

  return (
    <SCalendarHeader>
      <div className="calendar-date-change-section">
        <div className="calendar-date-format">
          <p>{year}년</p>
          <p>{month}월</p>
        </div>

        <div className="calendar-change-button-container">
          <button
            className="calendar-change-button"
            onClick={onEvent.onPrevDate}
          >
            <MdArrowLeft />
          </button>

          <button
            className="calendar-change-button"
            onClick={onEvent.onNextDate}
          >
            <MdArrowRight />
          </button>

          <button
            className="calendar-change-button today"
            onClick={onEvent.onToday}
          >
            오늘
          </button>
        </div>
      </div>
    </SCalendarHeader>
  );
};

export default CalendarHeader;
