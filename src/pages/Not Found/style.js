import styled from "styled-components";

export const Notfound = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100vh;

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;

    margin: 50px;

    img {
      width: 70%;
      margin: 0 auto;
    }

    p {
      font-size: 23px;
      font-weight: 500;
      color: var(--grey-1);

      text-align: center;
    }

    span {
      font-size: 18px;
      font-weight: 400;
      color: var(--grey-1);

      text-align: center;
    }

    button {
      width: 50%;
      max-width: 200px;

      padding: 10px 0;
    }

    @media (max-width: 569px) {
      p {
        font-size: 20px;
      }

      span {
        font-size: 15px;
      }
    }
  }
`;
