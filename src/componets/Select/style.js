import styled from "styled-components";

export const StyleSelect = styled.select`
  font-size: 16px;
  font-family: "Inter", sans-serif;
  font-weight: 400;
  color: var(--grey-0);

  width: 100%;

  border: 2px solid var(--grey-2);
  border-radius: 6px;

  padding: 15px 20px;
  background-color: var(--grey-2);

  &:hover {
    border-color: var(--grey-0);
  }

  &:focus {
    border-color: var(--grey-0);
  }
`;
