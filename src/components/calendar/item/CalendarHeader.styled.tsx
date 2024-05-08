import styled from "styled-components";

export const SCalendarHeader = styled.header`
  width: 100%;
  height: 50px;

  background-color: #ffffff;
  border-bottom: 1px solid #eeeeee;

  position: relative;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 14px;

  .calendar-date-change-section {
    display: flex;
    align-items: center;
    justify-content: center;

    gap: 10px;

    .calendar-date-format {
      display: flex;
      align-items: center;
      justify-content: center;

      gap: 1px;

      color: #333;
      font-size: 1.5rem;
      font-weight: bold;
    }

    .calendar-change-button-container {
      display: flex;
      align-items: center;
      justify-content: center;

      .calendar-change-button {
        width: 25px;
        height: 25px;

        border: 1px solid #cbcbcb;

        display: flex;
        align-items: center;
        justify-content: center;

        margin: 0;
        padding: 0;

        svg {
          color: #6a6a6a;
          font-size: 20px;
        }

        &.today {
          width: 45px;

          color: #222;
          font-size: 1.2rem;
        }

        &:hover {
          position: relative;
          z-index: 1;
          border-color: #bbb;
          background-color: #ebebeb;
        }
      }

      .calendar-change-button:nth-child(2) {
        border-left: none;
        border-right: none;
      }
    }
  }
`;
