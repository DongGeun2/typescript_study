import React from "react";

import useDate from "src/hook/useDate";

import { SCalendarMain } from "./CalendarMain.styled";

const CalendarMain = ({ currentDate }: { currentDate: Date }) => {
  const { renderDate } = useDate(currentDate);

  return (
    <SCalendarMain>
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
