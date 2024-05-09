import styled from "styled-components";

export const SCalendarMain = styled.article`
  width: 100%;
  flex: 1;

  display: flex;
  flex-direction: column;

  background: white;
  overflow: hidden;

  .calendar-week-container {
    width: 100%;
    height: 100%;
    padding: 0 14px;
  }

  .calendar-week-table {
    width: 100%;
    height: 100%;

    border-spacing: 0;
    border-bottom: 1px solid #e6e6e6;
  }

  .calendar-week-table > tbody > tr > td:first-child {
    color: #f00;
    border-left: none;
  }

  .calendar-week-table > tbody > tr > td:last-child {
    color: blue;
  }

  .calendar-day-container {
    width: calc(100% / 7);

    padding: 4px 8px;
    text-align: left;
    font-weight: normal;

    font-size: 1.3rem;
    color: #555555;

    border-left: 1px solid #f4f4f4;

    &.isToday {
      background-color: #fff7e4;
    }

    &.holiday {
      color: #f00 !important;
    }

    &.isOpacity > .calendar-day-item {
      opacity: 0.4;
    }

    .calendar-day-item {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    &:hover {
      cursor: pointer;
      background-color: #eeeeee;
    }

    &.selectedStart {
      color: #fff !important;
      background-color: #1d99ff !important;

      border-radius: 10px 0 0 10px;
    }
    &.selectedMiddle {
      color: #fff !important;
      background-color: #1d99ffd1 !important;
    }
    &.selectedEnd {
      color: #fff !important;
      background-color: #1d99ff !important;

      border-radius: 0 10px 10px 0;
    }
    &.selectedSame {
      color: #fff !important;
      background-color: #1d99ff !important;

      border-radius: 10px;
    }
    &.disabled {
      background-color: #eeeeee40;
      text-decoration: line-through;
      cursor: no-drop;
    }
  }
`;
