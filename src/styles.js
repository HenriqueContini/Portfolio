import styled from "styled-components";

export const container = styled.div`
  padding: 16px;
  background-color: ${(props) => props.theme.color.background};
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
