import styled from "styled-components";

export const StyleHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 850px;

  h1 {
    font-size: 30px;
    font-family: "Inter", sans-serif;
    color: var(--Color-primary);

    text-align: center;
  }

  a {
    font-size: 14px;
    font-family: "Inter", sans-serif;
    font-weight: 600;
    color: var(--grey-0);
    text-align: center;
    text-decoration: none;

    padding: 7px 25px;

    border-radius: 6px;
    border: none;

    background-color: var(--grey-2);
    cursor: pointer;
    transition: 0.3s;

    &:hover {
      background-color: var(--grey-3);
    }
  }

  @media (max-width: 380px) {
    h1 {
      font-size: 22px;
    }
  }
`;
