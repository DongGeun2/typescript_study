import React from "react";

import { SCalendarWeek } from "./CalendarWeek.styled";

const WEEK = [
  { id: "sun", label: "일" },
  { id: "mon", label: "월" },
  { id: "tue", label: "화" },
  { id: "wed", label: "수" },
  { id: "thu", label: "목" },
  { id: "fri", label: "금" },
  { id: "sat", label: "토" },
];

const CalendarWeek = () => {
  return (
    <SCalendarWeek>
      <thead>
        <tr>
          {WEEK?.map((item) => (
            <th
              key={item?.id}
              className="calendar-header-container-item"
              aria-label={item?.label}
            >
              {item?.label}
            </th>
          ))}
        </tr>
      </thead>
    </SCalendarWeek>
  );
};

export default CalendarWeek;
