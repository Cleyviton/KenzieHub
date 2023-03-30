import styled, { css } from "styled-components";

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;

  width: 100%;
  max-width: 420px;

  margin: 50px auto 0 auto;

  h1 {
    font-size: 30px;
    font-family: "Inter", sans-serif;
    color: var(--Color-primary);
  }

  .Logo {
    margin: 10px auto;
  }

  h2,
  p {
    font-family: "Inter", sans-serif;
    color: var(--grey-0);
    margin: 0 auto;
  }

  h2 {
    font-size: 18px;
    font-weight: 700;
  }
  p {
    font-size: 14px;
    font-weight: 600;
    color: var(--grey-1);

    text-align: center;
  }

  .div__input {
    display: flex;
    flex-direction: column;
    gap: 10px;

    border: none;
    label {
      font-size: 13.5px;
      font-family: "Inter", sans-serif;
      font-weight: 400;
      color: var(--grey-0);
    }
  }
`;
