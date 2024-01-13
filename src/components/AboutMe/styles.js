import styled from "styled-components";

export const aboutMeContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 48px;
`;

export const wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 48px;

  @media screen and (min-width: 768px) {
    flex-direction: column-reverse;
  }

  @media screen and (min-width: 1024px) {
    flex-direction: row;
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
