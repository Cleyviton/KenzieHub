import styled from "styled-components";

export const ModalConteiner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  position: fixed;
  top: 0;
  right: 0;

  width: 100%;
  height: 100%;

  background-color: rgba(0, 0, 0, 0.8);

  .modal__content {
    width: 100%;
    max-width: 450px;
    margin: 0 auto;

    border: none;
    border-radius: 6px;

    background-color: var(--grey-3);
    animation: transicao 0.7s;
  }
  .modal__header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    border: none;
    border-radius: 6px 6px 0 0;

    padding: 15px 20px;

    background-color: var(--grey-2);

    p {
      font-size: 17px;
      font-weight: 600;
      font-family: "Inter", sans-serif;
      color: var(--grey-0);
    }

    span {
      font-size: 19px;
      font-weight: 400;
      font-family: "Inter", sans-serif;
      color: var(--grey-1);

      cursor: pointer;
      transition: 0.3s;

      &:hover {
        color: var(--grey-3);
      }
    }
  }
  .modal__buttons {
    display: flex;
    justify-content: space-between;

    button {
      padding: 10px 20px;
    }
  }
  .modal__form {
    display: flex;
    flex-direction: column;
    gap: 23px;

    padding: 25px 20px;

    fieldset {
      display: flex;
      flex-direction: column;
      gap: 15px;

      label {
        font-size: 14px;
        color: var(--grey-0);
      }

      span {
        color: var(--Negative);
      }

      input {
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
      }

      select {
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
      }
    }
  }

  @keyframes transicao {
    0% {
      transform: translateY(-80%);
      opacity: 0;
    }

    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }

  @media (max-width: 300px) {
    .modal__buttons {
      gap: 5px;

      button {
        font-size: 15px;
        padding: 5px 10px;
      }
    }
  }
`;
