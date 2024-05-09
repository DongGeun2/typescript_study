import React, { useEffect, useRef } from "react";

import { addMonth, formatDate, subMonth } from "src/utils/utils";

import { useQuery } from "react-query";
import useDate, { returnDate } from "src/hook/useDate";
import holidayService, { IHoliday } from "src/service/holidayService";

import { SCalendarMain } from "./CalendarMain.styled";
import { ICalendarMain } from "../Calendar.props";

type IfetchData = { [key: string]: IHoliday };
type ICheckStatus = "selectedStart" | "selectedEnd" | "selectedMiddle" | "";

const CalendarMain = ({
  currentDate,
  onChange,
  selectedDate,
  onSelectDate,
}: ICalendarMain) => {
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

  const checkSelected = (item: returnDate): ICheckStatus => {
    const date = formatDate(item?.date);
    const startDate = formatDate(selectedDate[0]);
    const endDate = formatDate(selectedDate[1]);

    let result: ICheckStatus = "";

    if (startDate === date) {
      result = "selectedStart";
    } else if (endDate === date) {
      result = "selectedEnd";
    } else if (date > startDate && date < endDate) {
      result = "selectedMiddle";
    }

    return result;
  };

  return (
    <SCalendarMain ref={mainRef}>
      {renderDate?.map((week, i) => (
        <div key={i} className="calendar-week-container">
          <table className="calendar-week-table">
            <tbody>
              <tr>
                {week?.map((item) => {
                  const day = item.day;

                  const date: string = item?.formatDate;
                  const isToday: boolean = today === date;
                  const isOpacity: boolean = item?.isOpacity;

                  const selectedStatus = checkSelected(item);

                  let holiday: IHoliday = { date: "", localName: "", name: "" };

                  if (holidayData[date]) {
                    holiday = holidayData[date];
                  }

                  const className = `calendar-day-container 
                  ${isToday ? "isToday" : ""}
                  ${isOpacity ? "isOpacity" : ""}
                  ${selectedStatus}
                  ${holiday.date ? "holiday" : ""}
                  `.trim();

                  return (
                    <td
                      key={date}
                      aria-label={date}
                      className={className}
                      onClick={() => onSelectDate(item.date)}
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
