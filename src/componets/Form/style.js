import styled from "styled-components";

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;

  max-width: 100%;

  border-radius: 4px;

  padding: 30px 15px 20px 15px;

  background-color: var(--grey-3);

  fieldset {
    position: relative;

    span {
      font-size: 14px;
      font-weight: 400;
      color: var(--Negative);
    }

    svg {
      position: absolute;
      top: 43px;
      right: 17px;

      width: 20px;
      height: 20px;

      cursor: pointer;
      transition: 0.3s;
      color: var(--grey-4);

      &:hover {
        color: var(--Color-primary-focus);
      }
    }
  }

  a {
    font-size: 16px;
    font-family: "Inter", sans-serif;
    font-weight: 500;
    color: var(--grey-0);

    text-align: center;
    text-decoration: none;

    border-radius: 8px;
    border: none;

    padding: 15px 0;

    background-color: transparent;

    cursor: pointer;
    transition: 0.3s;

    background-color: var(--grey-1);
    &:hover {
      transform: scale(1.03);
      background-color: var(--grey-2);
    }
  }
`;
