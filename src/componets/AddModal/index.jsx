import React from "react";
import { useContext } from "react";
import { UserTechContext } from "../../contexts/TechContext";
import { ModalConteiner } from "./style";

function AddModal({ children, setIsOpenModalCard }) {
  const { setIsOpenModal, reset } = useContext(UserTechContext);

  function handleModalClose(event) {
    if (event.target.id == "modal") {
      setIsOpenModal(false);
      setIsOpenModalCard && setIsOpenModalCard(false);
      reset();
    }
  }
  return (
    <ModalConteiner id="modal" onClick={handleModalClose}>
      {children}
    </ModalConteiner>
  );
}

export default AddModal;
