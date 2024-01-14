import styled from "styled-components";

export const container = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid ${(props) => props.theme.color.gray};
  max-width: 350px;
  width: 100%;
`;

export const languagesWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  flex-wrap: wrap;
  border-bottom: 1px solid ${(props) => props.theme.color.gray};
  padding: 10px;
  gap: 8px;
`;

export const textWrapper = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding: 16px;
  height: 100%;
  justify-content: space-between;
`;

export const textTitle = styled.p`
  font-size: 1.25rem;
  font-weight: 500;
  color: ${(props) => props.theme.color.white};
`;

export const textDescription = styled.p`
  font-size: 1rem;
  color: ${(props) => props.theme.color.gray};
`;

export const textButton = styled.a`
  align-self: center;
  display: inline-flex;
  color: #ffffff;
  font-size: 1rem;
  padding: 10px 16px;
  width: fit-content;
  border: 1px solid #45bddc;
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
