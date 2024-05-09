import React, { useEffect, useRef } from "react";

import { useQuery } from "react-query";
import holidayService, { IHoliday } from "src/service/holidayService";

import useDate from "src/hook/useDate";
import { addMonth, subMonth } from "src/utils/utils";

import { SCalendarMain } from "./CalendarMain.styled";
import { ICalendarHeader } from "../Calendar.props";

type IfetchData = { [key: string]: IHoliday };

const CalendarMain = ({ currentDate, onChange }: ICalendarHeader) => {
  const mainRef = useRef<HTMLElement>();

  const { today, year, renderDate } = useDate(currentDate);

  const fetchData = async (): Promise<IfetchData> => {
    try {
      const res = await holidayService.getHoliday(year);

      const temp: IfetchData = {};

      res.forEach((item) => {
        temp[item.date] = { ...item };
      });

      return temp;
    } catch (error) {
      console.log(error);
    }
  };

  const { data: holidayData, isLoading } = useQuery(
    ["holiday", year],
    fetchData
  );

  useEffect(() => {
    const current = mainRef.current;

    if (current) {
      const onChangeDate = (e: { deltaY: number }) => {
        if (e.deltaY > 0) {
          // Down
          onChange(addMonth(currentDate));
        } else {
          // Up
          onChange(subMonth(currentDate));
        }
      };

      current.addEventListener("wheel", onChangeDate);

      return () => current.removeEventListener("wheel", onChangeDate);
    }
  }, []);

  console.log(today);

  return (
    <SCalendarMain ref={mainRef}>
      {renderDate?.map((week, i) => (
        <div key={i} className="calendar-week-container">
          <table className="calendar-week-table">
            <tbody>
              <tr>
                {week?.map((date) => {
                  const day = date.day;

                  const formatDate: string = date?.formatDate;
                  const isToday: boolean = today === formatDate;
                  const isOpacity: boolean = date?.isOpacity;

                  let holiday: IHoliday = { date: "", localName: "", name: "" };

                  if (holidayData[formatDate]) {
                    holiday = holidayData[formatDate];
                  }

                  const className = `calendar-day-container 
                  ${isToday ? "isToday" : ""}
                  ${isOpacity ? "isOpacity" : ""}
                  ${holiday.date ? "holiday" : ""}
                  `.trim();

                  return (
                    <td
                      key={formatDate}
                      aria-label={formatDate}
                      className={className}
                    >
                      <div className="calendar-day-item">
                        <p>{day}</p>
                        <span>{holiday.localName || ""}</span>
                      </div>
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
