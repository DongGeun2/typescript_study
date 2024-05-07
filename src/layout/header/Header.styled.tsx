import styled from "styled-components";

export const SHeader = styled.header`
  width: 100%;
  height: 55px;

  background-color: #636363;
  border-radius: 10px 10px 0 0;

  display: flex;
  align-items: center;

  padding: 0 18px;

  .header-left-container {
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: flex-start;
  }

  .header-right-container {
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
`;
