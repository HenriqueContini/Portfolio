import styled from "styled-components";

export const nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 40px;

  & > a {
    font-size: 1.75rem;
    text-transform: lowercase;
    color: ${(props) => props.theme.color.gray};
    transition: 0.3s;
    text-decoration: none;
  }

  & > a:hover {
    color: ${(props) => props.theme.color.white};
  }

  & > a.active {
    color: ${(props) => props.theme.color.white};
    font-weight: 500;
  }

  @media screen and (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    justify-content: center;

    & > a {
      font-size: 1.125rem;
      flex-direction: row;
    }
  }
`;

export const span = styled.span`
  font-size: 1em;
  font-weight: 500;
  margin-right: 6px;
  color: ${(props) => props.theme.color.primary};
`;
