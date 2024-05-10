import React, { useEffect, useMemo, useState } from "react";

import { IoRefreshOutline } from "react-icons/io5";

import { IHolidayView } from "../Calendar.props";
import { SHolidayView } from "./HolidayView.styled";
import { formatDate } from "src/utils/utils";
import holidayService, { IHoliday } from "src/service/holidayService";

const HolidayView = ({ selectedDate, onSelectedClear }: IHolidayView) => {
  const [returnList, setReturnList] = useState<IHoliday[]>([]);

  useEffect(() => {
    setReturnList([]);

    if (!(selectedDate[0] && selectedDate[1])) return;

    const startDate = formatDate(selectedDate[0]);
    const endDate = formatDate(selectedDate[1]);

    const startDateYear = selectedDate[0].getFullYear();
    const endDateYear = selectedDate[1].getFullYear();

    const yearApiList = [];
    const holidayList: IHoliday[] = [];
    const returnList: IHoliday[] = [];

    for (let i = startDateYear; i <= endDateYear; i++) {
      yearApiList.push(holidayService.getHoliday(i));
    }

    if (yearApiList.length > 0) {
      Promise.all(yearApiList).then((res) => {
        res?.forEach((a) => {
          a?.forEach((b) => {
            holidayList.push(b);
          });
        });

        holidayList.forEach((item: IHoliday) => {
          if (startDate <= item.date && endDate >= item.date)
            returnList.push(item);
        });

        setReturnList(returnList);
      });
    }
  }, [selectedDate]);

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

      <div className="holiday-view-list-header">
        <p>선택 날짜 공휴일</p>
        <p>({returnList?.length}개)</p>
      </div>
      <div className="holiday-view-list-container">
        {returnList?.map((item) => (
          <div className="holiday-view-list-item">
            <p>{item?.date}</p>
            <p>[{item?.localName}]</p>
          </div>
        ))}
      </div>
    </SHolidayView>
  );
};

export default HolidayView;
