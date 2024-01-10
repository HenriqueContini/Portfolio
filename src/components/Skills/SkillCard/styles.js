import styled from "styled-components";

export const cardContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid ${(props) => props.theme.color.gray};
`;

export const cardTitle = styled.p`
  text-align: center;
  font-size: 1.125rem;
  font-weight: 500;
  color: ${(props) => props.theme.color.white};
  padding: 8px;
  border-bottom: 1px solid ${(props) => props.theme.color.gray};
`;

export const cardTechWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  gap: 8px;
  padding: 10px;
`;
