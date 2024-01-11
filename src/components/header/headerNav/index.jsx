import * as S from "./styles";

const navList = [
  {
    link: "#banner",
    text: "Início",
  },
  {
    link: "#projects",
    text: "Projetos",
  },
  {
    link: "#skills",
    text: "Habilidades",
  },
  {
    link: "#aboutMe",
    text: "Sobre-mim",
  },
];

import React from "react";

export default function HeaderNav({ setIsModalOpen }) {
  return (
    <S.nav>
      {navList.map((item, index) => (
        <S.navItem
          href={item.link}
          key={index}
          onClick={() => setIsModalOpen(false)}
        >
          <S.navItemSpan>#</S.navItemSpan>
          {item.text}
        </S.navItem>
      ))}
    </S.nav>
  );
}
