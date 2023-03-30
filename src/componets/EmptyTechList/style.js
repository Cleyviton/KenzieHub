import styled from "styled-components";

export const StyleEmptyTechList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 10px;

  width: 100%;

  margin-top: 70px;

  p {
    font-size: 15px;
    font-weight: 500;
    font-family: "Inter", sans-serif;
    color: var(--grey-0);
  }

  span {
    font-size: 13px;
    font-weight: 400;
    font-family: "Inter", sans-serif;
    color: var(--grey-1);
  }
`;
