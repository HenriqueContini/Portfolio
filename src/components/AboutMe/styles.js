import styled from "styled-components";

export const aboutMeContainer = styled.section`
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

export const wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 48px;

  @media screen and (min-width: 768px) {
    flex-direction: column-reverse;
  }
`;

export const aboutMeImg = styled.img`
  margin: auto;
  width: 70%;
  max-width: 300px;
`;

export const textWrapper = styled.article`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const text = styled.p`
  color: ${(props) => props.theme.color.gray};
  font-size: 1rem;
  line-height: 1.5rem;
`;
