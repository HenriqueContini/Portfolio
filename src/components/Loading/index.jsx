import React from "react";
import * as S from "./styles";
import ReactLoading from "react-loading";
import { useTheme } from "styled-components";

export default function Loading() {
  const theme = useTheme();

  return (
    <S.container>
      <ReactLoading
        type="spin"
        color={theme.color.gray}
        width={100}
        height={100}
      />
    </S.container>
  );
}
