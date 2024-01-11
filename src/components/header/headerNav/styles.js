import styled from "styled-components";

export const nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 32px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
`;

export const navItem = styled.a`
  font-size: 1.75rem;
  text-transform: lowercase;
  color: ${(props) => props.theme.color.gray};
  transition: 0.3s;
  text-decoration: none;

  &:hover {
    color: ${(props) => props.theme.color.white};
  }

  @media screen and (min-width: 768px) {
    font-size: 1rem;
    flex-direction: row;
  }

  @media screen and (min-width: 1024px) {
    font-size: 1.125rem;
  }
`;

export const navItemSpan = styled.span`
  font-size: 1em;
  font-weight: 500;
  margin-right: 6px;
  color: ${(props) => props.theme.color.primary};
`;
