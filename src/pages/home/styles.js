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
    margin-top: 0;
  }

  @media screen and (min-width: 1024px) {
    padding: 10%;
    gap: 200px;
  }
`;
