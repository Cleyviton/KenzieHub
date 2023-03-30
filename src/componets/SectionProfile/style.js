import styled from "styled-components";

export const StyleSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;

  max-width: 850px;
  margin: 0 auto;

  padding: 35px 20px;

  p {
    font-size: 17px;
    font-weight: 500;
    font-family: "Inter", sans-serif;
    color: var(--grey-0);
  }

  span {
    font-size: 14px;
    font-weight: 400;
    font-family: "Inter", sans-serif;
    color: var(--grey-1);
  }

  @media (max-width: 569px) {
    flex-direction: column;
    gap: 15px;

    align-items: flex-start;
  }
`;
