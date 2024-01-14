import styled from "styled-components";

export const projectsContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;

  @media screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    justify-items: center;
    align-items: stretch;
  }

  @media screen and (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;
