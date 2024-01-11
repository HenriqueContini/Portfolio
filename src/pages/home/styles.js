import styled from "styled-components";

export const HomeContainer = styled.main`
  padding: 30px 20px;
  display: flex;
  flex-direction: column;
  gap: 80px;
  margin-top: 65px;
  margin-bottom: 40px;

  @media screen and (min-width: 768px) {
    padding: 60px 40px;
  }
`;
