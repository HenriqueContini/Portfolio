import * as S from "./styles";
import { NavLink } from "react-router-dom";

const navList = [
  {
    link: "/",
    text: "Início",
  },
  {
    link: "/projetos",
    text: "Projetos",
  },
];

import React from "react";

export default function HeaderNav({ setIsModalOpen }) {
  return (
    <S.nav>
      {navList.map((item, index) => (
        <NavLink
          key={index}
          to={item.link}
          onClick={() => setIsModalOpen(false)}
        >
          <S.span>#</S.span>
          {item.text}
        </NavLink>
      ))}
    </S.nav>
  );
}
