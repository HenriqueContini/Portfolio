import styled from "styled-components";

export const featuredProjectsContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 48px;
`;

export const seeMore = styled.div`
  :hover {
    color: ${(props) => props.theme.color.white};
  }

  & > a {
    display: flex;
    flex-direction: row;
    align-items: center;
    text-decoration: none;
    gap: 6px;
    font-size: 1rem;
    color: ${(props) => props.theme.color.gray};
  }

  & > a > div {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const projectsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  gap: 30px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    align-items: stretch;
  }
`;
