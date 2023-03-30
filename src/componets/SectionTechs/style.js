import styled from "styled-components";

export const StyleSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;

  max-width: 850px;
  margin: 0 auto;

  padding: 25px 20px;

  .div__addTechs {
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 100%;

    p {
      font-size: 17px;
      font-weight: 500;
      font-family: "Inter", sans-serif;
      color: var(--grey-0);
    }

    button {
      padding: 4px 8px;
      background-color: var(--grey-3);
      border: none;
      border-radius: 4px;

      font-size: 17px;
      color: var(--grey-0);
      font-family: "Inter", sans-serif;
      font-weight: 500;

      cursor: pointer;
      transition: 0.3s;

      &:hover {
        background-color: var(--Color-primary);
      }
    }
  }
`;
