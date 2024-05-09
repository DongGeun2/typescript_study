import styled from "styled-components";

export const SHolidayView = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;

  padding: 12px;

  .holiday-view-header-container {
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: center;

    padding: 0 14px;

    .holiday-view-header {
      font-size: 1.4rem;
      font-weight: bold;
    }

    .holiday-clear-button {
      width: 30px;
      height: 30px;

      cursor: pointer;

      margin-left: 15px;

      font-size: 1.4rem;
      font-weight: 700;
      letter-spacing: -0.5px;
      text-align: center;
      white-space: pre-wrap;
      color: rgb(29, 153, 255);
    }
  }

  .holiday-view-list-header {
    width: 100%;
    height: 30px;

    display: flex;
    align-items: center;

    margin-top: 15px;
    font-size: 1.4rem;
  }

  .holiday-view-list-container {
    width: 100%;
    height: 500px;

    border: 1px solid #eeeeee;

    overflow-y: auto;
    overflow-x: none;

    display: flex;
    flex-direction: column;

    padding: 0 10px;

    .holiday-view-list-item {
      width: 100%;
      padding: 12px;

      border-bottom: 1px solid #eeeeee;

      font-size: 1.3rem;
      font-weight: bold;

      display: flex;
      flex-direction: column;
    }
  }
`;
