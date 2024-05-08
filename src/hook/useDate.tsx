import { useMemo } from "react";

type returnDate = {
  year: number;
  month: number;
  day: number;
  date: Date;
  isOpacity?: boolean;
};

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

      return {
        year: getCurrentYear,
        month: getCurrentMonth,
        day: getCurrentDay,
        date: new Date(getCurrentYear, getCurrentMonth - 1, getCurrentDay),
      };
    });
  };

  const getPrevDate = () => {
    const newPrevDate = new Date(getCurrentYear, getCurrentMonth - 1, 0);

    const getPrevYear = newPrevDate.getFullYear();
    const getPrevMonth = newPrevDate.getMonth() + 1;
    const getPrevLastDate = newPrevDate.getDate();
    const getPrevLastDay = newPrevDate.getDay() + 1;

    return new Array(getPrevLastDay).fill("").map((_, i) => {
      const getCurrentDay = getPrevLastDate - (getPrevLastDay - (i + 1));

      return {
        year: getPrevYear,
        month: getPrevMonth,
        day: getCurrentDay,
        date: new Date(getPrevYear, getPrevMonth - 1, getCurrentDay),
        isOpacity: true,
      };
    });
  };

  const getNextDate = () => {
    const newNextDate = new Date(getCurrentYear, getCurrentMonth + 1, 1);

    const getNextYear = newNextDate.getFullYear();
    const getNextMonth = newNextDate.getMonth();
    const getNextStartDate = newNextDate.getDay();

    return new Array(getNextStartDate).fill("").map((_, i) => {
      const getCurrentDay = i + 1;

      return {
        year: getNextYear,
        month: getNextMonth,
        day: getCurrentDay,
        date: new Date(getNextYear, getNextMonth - 1, getCurrentDay),
        isOpacity: true,
      };
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
