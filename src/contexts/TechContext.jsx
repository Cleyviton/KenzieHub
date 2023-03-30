import { yupResolver } from "@hookform/resolvers/yup";
import { useState, useContext, createContext } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { Api } from "../services/Api";
import * as yup from "yup";
import { UserContext } from "./UserContext";

const formSchema = yup.object().shape({
  title: yup.string().required("É obrigatório digitar um título!"),
});

export const UserTechContext = createContext({});

export function UserTechProvider({ children }) {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const { userTechList, setUserTechList } = useContext(UserContext);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });
  async function onCreate(data) {
    reset();
    const token = localStorage.getItem("@Kenzie-Hub:UserToken");
    try {
      const response = await Api.post("/users/techs", data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setUserTechList([...userTechList, response.data]);

      setIsOpenModal(false);

      toast.success("Tecnologia Adicionada com sucesso!");
    } catch (error) {
      setIsOpenModal(false);

      toast.error(
        "Usuário Já possui esta tecnologia criada, basta atualizá-la."
      );
    }

    reset();
  }

  async function onUpdate(data, id, modal) {
    const token = localStorage.getItem("@Kenzie-Hub:UserToken");
    try {
      const response = await Api.put(`/users/techs/${id}`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const newTechList = userTechList.map((tech) => {
        if (tech.id == id) {
          return { ...tech, ...response.data };
        } else {
          return tech;
        }
      });

      setUserTechList(newTechList);
      reset();
      modal(false);
      toast.success("Tecnologia Editada com sucesso!");
    } catch (error) {
      console.log(error);
      toast.error("Opss... Não conseguimos editar essa tecnologia.");
    }
  }

  async function onDelete(id, modal) {
    const token = localStorage.getItem("@Kenzie-Hub:UserToken");
    try {
      const response = await Api.delete(`/users/techs/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const newTechList = userTechList.filter((tech) => tech.id !== id);
      setUserTechList(newTechList);
      modal(false);

      toast.success("Tecnologia Excluída com sucesso!");
    } catch (error) {
      console.log(error);
      toast.error("Opss... Não conseguimos excluir essa tecnologia.");
    }
  }

  return (
    <UserTechContext.Provider
      value={{
        isOpenModal,
        setIsOpenModal,
        register,
        handleSubmit,
        onUpdate,
        onDelete,
        onCreate,
        errors,
        reset,
      }}
    >
      {children}
    </UserTechContext.Provider>
  );
}
