import React, { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import CardTech from "../CardTech";
import EmptyTechList from "../EmptyTechList";
import { StyleTechList } from "./style";

function techList() {
  const { userTechList, setUserTechList } = useContext(UserContext);

  return userTechList.length <= 0 ? (
    <EmptyTechList />
  ) : (
    <StyleTechList>
      {userTechList.map((tech) => (
        <CardTech key={tech.id} tech={tech} />
      ))}
    </StyleTechList>
  );
}

export default techList;
