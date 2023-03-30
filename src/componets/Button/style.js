import styled, { css } from "styled-components";

export const Button = styled.button`
  font-size: 16px;
  font-family: "Inter", sans-serif;
  font-weight: 500;
  color: var(--grey-0);

  border-radius: 8px;
  border: none;

  padding: 15px 0;

  background-color: transparent;

  cursor: pointer;
  transition: 0.3s;

  background-color: var(--Color-primary);
  &:hover {
    background-color: var(--Color-primary-focus);
    transform: scale(1.03);
  }

  ${({ variante }) => {
    if (variante === "excluir") {
      return css`
        background-color: var(--grey-1);

        &:hover {
          background-color: var(--grey-2);
          transform: scale(1.03);
        }
      `;
    }
  }}
`;
