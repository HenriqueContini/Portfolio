import * as S from "./styles";

const navList = [
  {
    link: "#",
    text: "Início",
  },
  {
    link: "#",
    text: "Projetos",
  },
  {
    link: "#",
    text: "Sobre-mim",
  },
];

import React from "react";

export default function HeaderNav() {
  return (
    <S.nav>
      {navList.map((item, index) => (
        <S.navItem href={item.link} key={index}>
          <S.navItemSpan>#</S.navItemSpan>
          {item.text}
        </S.navItem>
      ))}
    </S.nav>
  );
}
