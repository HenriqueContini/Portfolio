import styled from "styled-components";

export const cardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid ${(props) => props.theme.color.gray};
  max-width: 350px;
`;

export const cardImg = styled.img`
  width: 100%;
`;

export const cardLanguageWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  flex-wrap: wrap;
  border-top: 1px solid ${(props) => props.theme.color.gray};
  padding: 10px;
  gap: 8px;
`;

export const cardInfoWrapper = styled.div`
  text-align: center;
  padding: 16px;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
  gap: 20px;
  border-top: 1px solid ${(props) => props.theme.color.gray};
`;

export const cardInfoTitle = styled.p`
  color: ${(props) => props.theme.color.white};
  font-weight: 500;
  font-size: 1.5rem;
`;

export const cardInfoDescription = styled.p`
  color: ${(props) => props.theme.color.gray};
  line-height: 18px;
  font-size: 1rem;
`;

export const cardInfoLink = styled.a`
  align-self: center;
  display: inline-flex;
  color: ${(props) => props.theme.color.white};
  font-size: 1rem;
  padding: 10px 16px;
  width: fit-content;
  border: 1px solid ${(props) => props.theme.color.primary};
  cursor: pointer;
  text-decoration: none;
  transition: 0.2s;

  &:hover {
    background-color: ${(props) => props.theme.color.primary}26;
  }

  & > div {
    margin-left: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
