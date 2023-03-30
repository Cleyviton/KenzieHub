import { Section } from "../LoginPage/style";
import { Button } from "../../componets/Button/style";
import { FormContainer } from "../../componets/Form/style";
import { Input } from "../../componets/Input/style";
import Header from "../../componets/Header";
import Select from "../../componets/Select";
import { AiFillEye } from "react-icons/ai";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { UserContext } from "../../contexts/UserContext";
import { FormSchemaContext } from "../../contexts/Schemas";

function RegisterPage() {
  const { onRegister } = useContext(UserContext);
  const [visiblePassword, setVisiblePassword] = useState(false);
  const { formSchemaRegister } = useContext(FormSchemaContext);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchemaRegister),
  });

  return (
    <Section>
      <Header />
      <FormContainer onSubmit={handleSubmit((data) => onRegister(data, reset))}>
        <h2>Crie sua conta</h2>

        <p>Rapido e grátis, vamos nessa</p>

        <fieldset className="div__input">
          <label htmlFor="name">Nome</label>

          <Input
            type="text"
            placeholder="Digite seu nome..."
            {...register("name")}
          />

          <span> {errors.name?.message}</span>
        </fieldset>

        <fieldset className="div__input">
          <label htmlFor="email">Email</label>

          <Input
            type="email"
            placeholder="Digite sua email..."
            {...register("email")}
          />

          <span> {errors.email?.message}</span>
        </fieldset>
        <fieldset className="div__input">
          <label htmlFor="password">Senha</label>

          <Input
            type={visiblePassword ? "text" : "password"}
            placeholder="Digite sua senha..."
            {...register("password")}
          />

          <AiFillEye onClick={() => setVisiblePassword(!visiblePassword)} />

          <span> {errors.password?.message}</span>
        </fieldset>

        <fieldset className="div__input">
          <label htmlFor="confirmPassword">Confirmar Senha</label>

          <Input
            type={visiblePassword ? "text" : "password"}
            placeholder="Confirme sua senha..."
            {...register("confirmPassword")}
          />

          <AiFillEye onClick={() => setVisiblePassword(!visiblePassword)} />

          <span> {errors.confirmPassword?.message}</span>
        </fieldset>

        <fieldset className="div__input">
          <label htmlFor="bio">Bio</label>

          <Input
            type="text"
            placeholder="Fale sobre você..."
            {...register("bio")}
          />

          <span> {errors.bio?.message}</span>
        </fieldset>

        <fieldset className="div__input">
          <label htmlFor="contato">Contato</label>

          <Input
            type="text"
            placeholder="Opção de contato..."
            {...register("contact")}
          />

          <span> {errors.contact?.message}</span>
        </fieldset>

        <fieldset className="div__input">
          <label htmlFor="password">Selecionar módulo</label>

          <Select register={register} />

          <span> {errors.course_module?.message}</span>
        </fieldset>

        <Button type="submit">Cadastre-se</Button>
      </FormContainer>
    </Section>
  );
}

export default RegisterPage;
