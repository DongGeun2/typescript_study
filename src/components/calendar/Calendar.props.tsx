type curretnDate = Date;

export interface ICalendarHeader {
  currentDate: curretnDate;
  onChange?: (date: curretnDate) => void;
}
