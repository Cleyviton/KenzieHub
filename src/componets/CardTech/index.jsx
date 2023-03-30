import React, { useContext, useState } from "react";
import { UserTechContext } from "../../contexts/TechContext";
import { UserContext } from "../../contexts/UserContext";
import AddModal from "../AddModal";
import { Button } from "../Button/style";
import { StyleCardTech } from "./style";

function CardTech({ tech }) {
  const [isOpenModalCard, setIsOpenModalCard] = useState(false);
  const { userTechList, setUserTechList } = useContext(UserContext);
  const { register, handleSubmit, onUpdate, onDelete, reset } =
    useContext(UserTechContext);

  return (
    <>
      <StyleCardTech onClick={() => setIsOpenModalCard(true)}>
        <p> {tech.title} </p>
        <span> {tech.status} </span>
      </StyleCardTech>

      {isOpenModalCard && (
        <AddModal setIsOpenModalCard={setIsOpenModalCard}>
          <div className="modal__content">
            <div className="modal__header">
              <p>Tecnologia Detalhes</p>
              <span
                onClick={() => {
                  setIsOpenModalCard(false);
                  reset();
                }}
              >
                x
              </span>
            </div>
            <form
              className="modal__form"
              onSubmit={handleSubmit((data) =>
                onUpdate(data, tech.id, setIsOpenModalCard)
              )}
            >
              <fieldset>
                <label htmlFor="nome">Nome do projeto</label>
                <input
                  id="nome"
                  placeholder="Material UI"
                  value={tech.title}
                  {...register("title")}
                />
              </fieldset>
              <fieldset>
                <label htmlFor="Status">Status</label>
                <select id="Status" {...register("status")}>
                  <option value="Iniciante">Iniciante</option>
                  <option value="Intermediário">Intermediário</option>
                  <option value="Avançado">Avançado</option>
                </select>
              </fieldset>
              <div className="modal__buttons">
                <Button type="submit">Salvar Alterações</Button>
                <Button
                  type="button"
                  variante={"excluir"}
                  onClick={() => onDelete(tech.id, setIsOpenModalCard)}
                >
                  Excluir
                </Button>
              </div>
            </form>
          </div>
        </AddModal>
      )}
    </>
  );
}

export default CardTech;

/* 
                handleSubmit((data) =>
                onUpdate(
                  data,
                  tech.id,
                  techsList,
                  setTechsList,
                  setIsOpenModalCard
                )
              )
*/
