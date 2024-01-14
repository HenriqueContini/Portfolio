import React from "react";
import * as S from "./styles";

export default function Title({ text, showLine = true, children }) {
  return (
    <S.titleWrapper>
      <S.title>
        <span>#</span>
        {text}
      </S.title>
      {showLine && <S.titleLine />}
      {children ? children : null}
    </S.titleWrapper>
  );
}
