import styled from "styled-components";

export const skillsContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 48px;
`;

export const skillsCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  gap: 30px;

  @media screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    align-items: stretch;
    justify-items: center;
  }

  @media screen and (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;
