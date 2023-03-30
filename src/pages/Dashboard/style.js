import styled from "styled-components";

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;

  > div {
    width: 100%;
    border-top: 0.5px solid var(--grey-2);

    header {
      margin: 0 auto;

      padding: 25px 20px;
    }
  }
`;
