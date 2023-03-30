import styled from "styled-components";

export const StyleCardTech = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;

  border: none;
  border-radius: 4px;

  width: 100%;

  background-color: var(--grey-4);
  padding: 15px;

  cursor: pointer;
  transition: 0.3s;

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

  &:hover {
    background-color: var(--grey-2);
  }
`;
