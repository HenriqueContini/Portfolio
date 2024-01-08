import styled from "styled-components";

export const bannerContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 50px;
`;

export const textWrapper = styled.article`
  display: flex;
  flex-direction: column;
  gap: 26px;
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
`;

export const bannerImage = styled.img`
  width: 100%;
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

  & > span {
    color: ${(props) => props.theme.color.white};
    font-weight: 500;
    overflow: hidden;

    text-overflow: ellipsis;
  }
`;
