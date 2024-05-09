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

    font-size: 14px;
    color: #555555;

    border-left: 1px solid #f4f4f4;

    &.holiday > p {
      color: #f00;
    }

    &.isOpacity > p {
      opacity: 0.4;
    }
  }
`;
