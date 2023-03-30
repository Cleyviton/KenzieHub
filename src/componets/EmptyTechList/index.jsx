import React from "react";
import { StyleEmptyTechList } from "./style";

function EmptyTechList() {
  return (
    <StyleEmptyTechList>
      <p>Você ainda não possui tecnologias cadastradas</p>
      <span>Adicione uma nova tecnologia</span>
    </StyleEmptyTechList>
  );
}

export default EmptyTechList;
