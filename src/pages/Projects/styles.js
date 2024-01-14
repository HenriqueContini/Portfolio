import styled from "styled-components";

export const projectsContainer = styled.main`
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
    padding: 100px 10%;
    gap: 100px;
  }
`;

export const pageTitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const pageTitle = styled.h2`
  font-size: 2rem;
  color: ${(props) => props.theme.color.white};
  font-weight: 500;

  & > span {
    margin-right: 6px;
    color: ${(props) => props.theme.color.primary};
  }
`;

export const pageTitleDescription = styled.p`
  font-weight: 300;
  font-size: 1rem;
  color: ${(props) => props.theme.color.white};
`;

export const wrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 42px;
`;
