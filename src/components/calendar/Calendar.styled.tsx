import styled, { css } from "styled-components";

import { ISCalendar } from "./Calendar.props";

export const SCalendar = styled.div<ISCalendar>`
  width: 100%;
  height: calc(100vh - 55px);

  display: flex;
  flex-direction: column;

  .calendar-section-container {
    width: 100%;
    height: 100%;

    display: flex;
    overflow: hidden;
  }

  .calendar-container {
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;

    position: relative;

    transition: width 250ms ease-in-out;

    ${(props) =>
      props.$openView &&
      css`
        width: calc(100% - 300px);
      `}
  }

  .calendar-holiday-view-container {
    width: 0;
    height: 100%;

    display: flex;
    flex-direction: column;

    position: relative;

    transition: width 250ms ease-in-out;

    background: #ffffff;
    border-left: 1px solid #636363;

    ${(props) =>
      props.$openView &&
      css`
        width: 300px;
      `}
  }
`;
