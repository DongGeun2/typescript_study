import styled, { css, keyframes } from "styled-components";
import { IOperatingHours } from "./OperatingHours.props";

const operatingIconAni = keyframes`
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0.7;
    }
    100% {
      opacity: 1;
    }

`;

export const SOperatingHours = styled.div<IOperatingHours>`
  display: flex;
  align-items: center;
  justify-content: center;

  gap: 5px;
  padding: 0 3px;

  .operating-status-icon {
    width: 10px;
    height: 10px;

    border-radius: 50%;
    display: inline-block;

    animation: ${operatingIconAni} 1.5s ease-in-out infinite;

    ${(props) =>
      props.status === "open" &&
      css`
        background-color: #7de447;
      `}

    ${(props) =>
      props.status === "close" &&
      css`
        background-color: #f33;
      `}
  }

  .operating-label {
    font-size: 1.4rem;
    font-weight: 600;
    color: #ffffff;
  }
`;
