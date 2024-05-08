import styled from "styled-components";

export const SCalendarHeader = styled.header`
  width: 100%;
  height: 50px;

  border-bottom: 1px solid #eeeeee;

  position: relative;

  .calendar-date-change-section {
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);

    position: absolute;

    display: flex;
    align-items: center;
    justify-content: center;

    gap: 10px;

    .calendar-change-button {
      padding: 8px;

      svg {
        width: 14px;
        height: 14px;
      }
    }

    .calendar-date-format {
      display: flex;
      align-items: center;
      justify-content: center;
      min-width: 90px;

      gap: 5px;

      font-size: 1.6rem;
      font-weight: bold;
    }
  }
`;
