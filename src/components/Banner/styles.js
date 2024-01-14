import styled from "styled-components";

export const bannerContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 50px;

  @media screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    justify-items: center;
  }
`;

export const textWrapper = styled.article`
  display: flex;
  flex-direction: column;
  gap: 26px;

  @media screen and (min-width: 1024px) {
    max-width: 600px;
  }
`;

export const bannerTitle = styled.h2`
  font-size: 2rem;
  line-height: 2.75rem;
  color: ${(props) => props.theme.color.white};
  font-weight: 500;

  & > span {
    color: ${(props) => props.theme.color.primary};
  }
`;

export const bannerText = styled.p`
  font-size: 1rem;
  color: ${(props) => props.theme.color.gray};
`;

export const imageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const bannerImage = styled.img`
  width: 100%;
  max-width: 300px;

  @media screen and (min-width: 1024px) {
    max-width: 400px;
  }
`;

export const workingOnWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 12px;
  padding: 8px;
  border: 1px solid ${(props) => props.theme.color.gray};
`;

export const workingOnIcon = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.25rem;
  color: ${(props) => props.theme.color.primary};
`;

export const workingOnText = styled.p`
  font-size: 1rem;
  color: ${(props) => props.theme.color.gray};
  line-height: 20px;

  & > a {
    color: ${(props) => props.theme.color.white};
    font-weight: 500;
    text-decoration: none;
  }

  & > a:hover {
    text-decoration: underline;
  }
`;

export const buttonWrapper = styled.div`
  display: none;
  flex-direction: row;
  gap: 30px;
  margin-top: 30px;

  @media screen and (min-width: 768px) {
    display: flex;
  }
`;

export const buttonLink = styled.a`
  padding: 10px 20px;
  cursor: pointer;
  text-decoration: none;
  color: ${(props) => props.theme.color.white};
  border: 1px solid ${(props) => props.theme.color.primary};

  transition: 0.3s;

  &:hover {
    background-color: ${(props) => props.theme.color.primary}26;
  }
`;
