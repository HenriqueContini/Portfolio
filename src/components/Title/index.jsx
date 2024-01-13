import React from "react";
import * as S from "./styles";

export default function Title({ text, children }) {
  return (
    <S.titleWrapper>
      <S.title>
        <span>#</span>
        {text}
      </S.title>
      <S.titleLine />
      {children ? children : null}
    </S.titleWrapper>
  );
}
