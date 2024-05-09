import React, { useMemo } from "react";

import { IoRefreshOutline } from "react-icons/io5";

import { IHolidayView } from "../Calendar.props";
import { SHolidayView } from "./HolidayView.styled";
import { formatDate } from "src/utils/utils";

const HolidayView = ({ selectedDate, onSelectedClear }: IHolidayView) => {
  const headerDate = useMemo(() => {
    const startDate = formatDate(selectedDate[0]);
    const endDate = formatDate(selectedDate[1]);

    return (
      <p className="holiday-view-header">
        {startDate}~{endDate}
      </p>
    );
  }, [selectedDate]);

  return (
    <SHolidayView>
      <div className="holiday-view-header-container">
        {headerDate}

        <button className="holiday-clear-button" onClick={onSelectedClear}>
          <IoRefreshOutline />
        </button>
      </div>
    </SHolidayView>
  );
};

export default HolidayView;
