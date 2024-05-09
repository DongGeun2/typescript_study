import { useMemo } from "react";
import { addZeroto0 } from "src/utils/utils";

type returnDate = {
  year: number;
  month: number;
  day: number;
  date: Date;
  formatDate: string;
  isOpacity?: boolean;
};

class DateDto {
  private year: number;
  private month: number;
  private day: number;
  private date: Date;
  private formatDate: string;

  private isOpacity: boolean = false;

  constructor(year: number, month: number, day: number) {
    this.year = year;
    this.month = month;
    this.day = day;
    this.date = new Date(year, month - 1, day);
    this.formatDate = `${year}-${addZeroto0(month)}-${addZeroto0(day)}`;
  }

  setOpacity(b: boolean) {
    this.isOpacity = b;
  }

  getAll() {
    return {
      year: this.year,
      month: this.month,
      day: this.day,
      date: this.date,
      isOpacity: this.isOpacity,
      formatDate: this.formatDate,
    };
  }
}

const useDate = (currentDate: Date) => {
  const getYear = currentDate.getFullYear();
  const getMonth = currentDate.getMonth() + 1;
  const getDate = new Date(getYear, getMonth, 0);

  const getCurrentYear = getDate.getFullYear();
  const getCurrentMonth = getDate.getMonth() + 1;

  const getCurrentDate = () => {
    const getCurrentLastDate = getDate.getDate();

    return new Array(getCurrentLastDate).fill("").map((_, i) => {
      const getCurrentDay = i + 1;

      const dto = new DateDto(getCurrentYear, getCurrentMonth, getCurrentDay);

      return dto.getAll();
    });
  };

  const getPrevDate = () => {
    const newPrevDate = new Date(getCurrentYear, getCurrentMonth - 1, 0);

    const getPrevYear = newPrevDate.getFullYear();
    const getPrevMonth = newPrevDate.getMonth() + 1;
    const getPrevLastDate = newPrevDate.getDate();
    const getPrevLastDay = newPrevDate.getDay() + 1;

    if (getPrevLastDay === 7) return [];

    return new Array(getPrevLastDay).fill("").map((_, i) => {
      const getCurrentDay = getPrevLastDate - (getPrevLastDay - (i + 1));

      const dto = new DateDto(getPrevYear, getPrevMonth, getCurrentDay);

      dto.setOpacity(true);

      return dto.getAll();
    });
  };

  const getNextDate = () => {
    const newNextDate = new Date(getCurrentYear, getCurrentMonth, 1);

    const getNextYear = newNextDate.getFullYear();
    const getNextMonth = newNextDate.getMonth() + 1;
    const getNextStartDate = 7 - newNextDate.getDay();

    if (getNextStartDate === 7) return [];

    return new Array(getNextStartDate).fill("").map((_, i) => {
      const getCurrentDay = i + 1;

      const dto = new DateDto(getNextYear, getNextMonth, getCurrentDay);

      dto.setOpacity(true);

      return dto.getAll();
    });
  };

  const renderDate = useMemo(() => {
    const pDate = getPrevDate();
    const cDate = getCurrentDate();
    const nDate = getNextDate();

    const concatArray = [...pDate, ...cDate, ...nDate];

    let tempArray: returnDate[] = [];
    const resultArray: returnDate[][] = [];

    concatArray.forEach((a, i) => {
      if (i !== 0 && i % 7 === 0) {
        resultArray.push(tempArray);
        tempArray = [];
      }

      if (i === concatArray.length - 1) {
        resultArray.push(tempArray);
      }

      tempArray.push(a);
    });

    return resultArray;
  }, [currentDate]);

  return {
    year: getCurrentYear,
    month: getCurrentMonth,

    renderDate,
  };
};

export default useDate;
