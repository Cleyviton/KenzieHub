import { createContext } from "react";
import * as yup from "yup";

export const FormSchemaContext = createContext({});

export function FormSchemaProvider({ children }) {
  const formSchemaRegister = yup.object().shape({
    name: yup.string().required("É obrigatório digitar um nome."),

    email: yup
      .string()
      .required("É obrigatório digitar um E-mail.")
      .email("E-mail inválido"),

    password: yup
      .string()
      .required("É obrigatório digitar uma senha.")

      .matches(/[A-Z]/, "É obrigatório pelo menos uma letra maiúscula.")
      .matches(/[a-z]/, "É obrigatório pelo menos uma letra minúscula.")
      .matches(/(\d)/, "É obrigatório pelo menos um número.")
      .matches(/(\W|_)/, "É obrigatório pelo menos um caractere especial.")
      .matches(/.{8,}/, "A senha deve conter no mínimo 8 caracteres"),

    confirmPassword: yup
      .string()
      .required("É obrigatório confirmar sua senha.")
      .oneOf([yup.ref("password"), null], "As senhas não correspondem."),

    bio: yup.string().required("É obrigatório digitar uma Bio."),

    contact: yup.string().required("É obrigatório digitar um telefone."),

    course_module: yup
      .string()
      .required("É obrigatório digitar selecionar um módulo."),
  });

  const formSchemaLogin = yup.object().shape({
    email: yup
      .string()
      .required("É obrigatório digitar um E-mail.")
      .email("E-mail inválido"),

    password: yup.string().required("É obrigatório digitar uma senha."),
  });

  return (
    <FormSchemaContext.Provider value={{ formSchemaRegister, formSchemaLogin }}>
      {children}
    </FormSchemaContext.Provider>
  );
}
