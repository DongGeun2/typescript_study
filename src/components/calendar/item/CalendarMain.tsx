import React, { useEffect, useRef } from "react";

import useDate from "src/hook/useDate";
import { addMonth, subMonth } from "src/utils/utils";

import { SCalendarMain } from "./CalendarMain.styled";
import { ICalendarHeader } from "../Calendar.props";

const CalendarMain = ({ currentDate, onChange }: ICalendarHeader) => {
  const mainRef = useRef<HTMLElement>();

  const { renderDate } = useDate(currentDate);

  useEffect(() => {
    const current = mainRef.current;

    if (current) {
      const onChangeDate = (e: { deltaY: number }) => {
        if (e.deltaY > 0) {
          // console.log("down");
          onChange(addMonth(currentDate));
        } else {
          // console.log("up");
          onChange(subMonth(currentDate));
        }
      };

      current.addEventListener("wheel", onChangeDate);

      return () => current.removeEventListener("wheel", onChangeDate);
    }
  }, []);

  return (
    <SCalendarMain ref={mainRef}>
      {renderDate?.map((week, i) => (
        <div key={i} className="calendar-week-container">
          <table className="calendar-week-table">
            <tbody>
              <tr>
                {week?.map((date) => {
                  const year = date.year;
                  const month = date.month;
                  const day = date.day;
                  const isOpacity = date?.isOpacity;

                  const key = `${year}-${month}-${day}`;

                  return (
                    <td
                      key={key}
                      aria-label={key}
                      className={`calendar-day-container ${
                        isOpacity ? "calendar-day-isOpacity" : ""
                      }`}
                    >
                      <strong>{day}</strong>
                    </td>
                  );
                })}
              </tr>
            </tbody>
          </table>
        </div>
      ))}
    </SCalendarMain>
  );
};

export default CalendarMain;
