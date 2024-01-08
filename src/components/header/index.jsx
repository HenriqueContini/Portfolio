import React, { useState } from "react";
import * as S from "./styles";
import logo from "../../assets/logo.svg";
import { HiMenuAlt3 } from "react-icons/hi";
import { IoLogoLinkedin, IoMdClose, IoLogoGithub } from "react-icons/io";
import HeaderNav from "./headerNav";

export default function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <S.headerContainer>
      <S.titleWrapper>
        <S.logoImg src={logo} alt="Logo" />
        <S.title>Portfólio</S.title>
      </S.titleWrapper>
      <S.modalContainer $opened={isModalOpen}>
        <HeaderNav />
        <S.mediaLinkContainer>
          <S.mediaLinkButton href="https://github.com/HenriqueContini">
            <IoLogoGithub />
          </S.mediaLinkButton>
          <S.mediaLinkButton href="https://www.linkedin.com/in/henrique-contini/">
            <IoLogoLinkedin />
          </S.mediaLinkButton>
        </S.mediaLinkContainer>
      </S.modalContainer>
      <S.toggleSideNav onClick={() => setIsModalOpen((prev) => !prev)}>
        {isModalOpen ? <IoMdClose /> : <HiMenuAlt3 />}
      </S.toggleSideNav>
    </S.headerContainer>
  );
}
