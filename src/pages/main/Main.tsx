import React, { useState } from "react";
import Calendar from "src/components/calendar/Calendar";

import Layout from "src/layout/Layout";

const Main = () => {
  const [selectedDate, setSelectedDate] = useState<Date[]>([]);

  const onSelectDate = (date: Date[]) => {
    setSelectedDate(date);
  };

  return (
    <Layout>
      <Calendar selectedDate={selectedDate} onSelectDate={onSelectDate} />
    </Layout>
  );
};

export default Main;
