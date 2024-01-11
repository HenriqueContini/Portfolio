import styled from "styled-components";

export const featuredProjectsContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 48px;
`;

export const titleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 16px;
`;

export const title = styled.h3`
  font-size: 1.75rem;
  font-weight: 500;
  text-transform: lowercase;
  color: ${(props) => props.theme.color.white};

  & > span {
    margin-right: 6px;
    color: ${(props) => props.theme.color.primary};
  }
`;

export const titleLine = styled.div`
  height: 1px;
  flex: 1;
  background-color: ${(props) => props.theme.color.primary};
`;

export const seeMoreWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 6px;
  font-size: 1rem;
  color: ${(props) => props.theme.color.white};

  & > div {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const projectsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;
