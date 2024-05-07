import React, { useEffect, useMemo, useState } from "react";

import { SDateClock } from "./DateClock.styled";
import { addZeroto0, setWeek } from "src/utils/utils";

const DateClock = () => {
  const [date, setDate] = useState<Date>(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatDate = useMemo(
    () => ({
      year: date?.getFullYear(),
      month: addZeroto0(date?.getMonth() + 1),
      day: addZeroto0(date?.getDate()),

      week: setWeek(date?.getDay()),

      hours: addZeroto0(date?.getHours()),
      minutes: addZeroto0(date?.getMinutes()),
      seconds: addZeroto0(date?.getSeconds()),
    }),
    [date]
  );

  return (
    <SDateClock>
      {`${formatDate.year}.${formatDate.month}.${formatDate.day}.(${formatDate.week.ko}) ${formatDate.hours}:${formatDate.minutes}:${formatDate.seconds}`}
    </SDateClock>
  );
};

export default React.memo(DateClock);
