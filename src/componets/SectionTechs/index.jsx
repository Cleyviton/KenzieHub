import { StyleSection } from "./style";
import TechList from "../TechList";
import { useContext } from "react";
import { UserTechContext } from "../../contexts/TechContext";
import AddModal from "../AddModal";
import { Button } from "../Button/style";

function SectionTechs() {
  const {
    isOpenModal,
    setIsOpenModal,
    handleSubmit,
    onCreate,
    register,
    errors,
    reset,
  } = useContext(UserTechContext);

  return (
    <StyleSection>
      <div className="div__addTechs">
        <p>Tecnologias</p>
        <button onClick={() => setIsOpenModal(true)}>+</button>
      </div>
      {isOpenModal && (
        <AddModal>
          <div className="modal__content">
            <div className="modal__header">
              <p>Cadastrar Tecnologia</p>
              <span
                onClick={() => {
                  setIsOpenModal(false);
                  reset();
                }}
              >
                x
              </span>
            </div>
            <form className="modal__form" onSubmit={handleSubmit(onCreate)}>
              <fieldset>
                <label htmlFor="nome">Nome</label>
                <input
                  id="nome"
                  placeholder="TypesCript"
                  {...register("title")}
                />
                <span>{errors.title?.message}</span>
              </fieldset>
              <fieldset>
                <label htmlFor="Selecionar status">Selecionar status</label>
                <select id="Selecionar status" {...register("status")}>
                  <option value="Iniciante">Iniciante</option>
                  <option value="Intermediário">Intermediário</option>
                  <option value="Avançado">Avançado</option>
                </select>
              </fieldset>
              <Button type="submit"> Cadastrar Tecnologia </Button>
            </form>
          </div>
        </AddModal>
      )}
      <TechList />
    </StyleSection>
  );
}

export default SectionTechs;

/* Finalizar função de criar tecnologia */
