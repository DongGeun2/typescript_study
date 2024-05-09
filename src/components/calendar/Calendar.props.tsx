type curretnDate = Date;

export interface ICalendar {
  selectedDate: Date[];
  onSelectDate: (date: Date[]) => void;
}

export interface ICalendarHeader {
  currentDate: curretnDate;
  onChange?: (date: curretnDate) => void;
}

export interface ICalendarMain extends ICalendarHeader {
  selectedDate: Date[];
  onSelectDate: (date: Date) => void;
}

export interface ISCalendar {
  $openView: boolean;
}

export interface IHolidayView {
  selectedDate: Date[];
  onSelectedClear: () => void;
}
