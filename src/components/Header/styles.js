import styled from "styled-components";

export const headerContainer = styled.header`
  position: fixed;
  top: 0;
  padding: 20px;
  box-sizing: border-box;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: ${(props) => props.theme.color.background};

  @media screen and (min-width: 768px) {
    position: relative;
    padding: 30px 40px;
  }

  @media screen and (min-width: 1024px) {
    padding: 40px 10%;
  }
`;

export const titleWrapper = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
`;

export const logoImg = styled.img`
  max-width: 30px;
`;

export const title = styled.h1`
  color: ${(props) => props.theme.color.white};
  font-weight: bold;
  font-size: 1.25rem;
`;

export const toggleSideNav = styled.div`
  display: flex;
  justify-content: right;
  align-items: center;
  font-size: 30px;
  color: ${(props) => props.theme.color.gray};
  transition: 0.3s;

  &:hover {
    color: ${(props) => props.theme.color.white};
  }

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const modalContainer = styled.div`
  display: ${({ $opened }) => ($opened ? "flex" : "none")};
  flex-direction: column;
  justify-content: space-between;
  position: fixed;
  top: 60px;
  left: 0;
  min-height: calc(100% - 60px);
  width: 100%;
  background-color: ${(props) => props.theme.color.background};
  padding: 36px 20px;

  @media screen and (min-width: 768px) {
    position: relative;
    display: flex;
    justify-content: right;
    align-items: center;
    flex-direction: row;
    top: auto;
    left: auto;
    padding: 0;
  }
`;

export const mediaLinkContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 50px;

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const mediaLinkButton = styled.a`
  font-size: 55px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.color.gray};
  transition: 0.3s;

  &:hover {
    color: ${(props) => props.theme.color.white};
  }
`;
