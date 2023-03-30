import { Link } from "react-router-dom";
import { Button } from "../../componets/Button/style";
import { FormContainer } from "../../componets/Form/style";
import { Input } from "../../componets/Input/style";
import { Section } from "./style";
import { AiFillEye } from "react-icons/ai";
import { useContext, useState } from "react";
import { UserContext } from "../../contexts/UserContext";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { FormSchemaContext } from "../../contexts/Schemas";

function LoginPage() {
  const { onLogin } = useContext(UserContext);
  const [visiblePassword, setVisiblePassword] = useState(false);
  const { formSchemaLogin } = useContext(FormSchemaContext);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchemaLogin),
  });

  return (
    <Section>
      <h1 className="Logo">Kenzie Hub</h1>
      <FormContainer onSubmit={handleSubmit((data) => onLogin(data, reset))}>
        <h2>Login</h2>

        <fieldset className="div__input">
          <label htmlFor="email">Email</label>

          <Input
            type="text"
            placeholder="Digite seu email..."
            {...register("email")}
          />

          <span>{errors.email?.message}</span>
        </fieldset>

        <fieldset className="div__input">
          <label htmlFor="password">Senha</label>

          <Input
            type={visiblePassword ? "text" : "password"}
            placeholder="Digite sua senha..."
            {...register("password")}
          />

          <AiFillEye onClick={() => setVisiblePassword(!visiblePassword)} />

          <span>{errors.password?.message}</span>
        </fieldset>

        <Button type="submit">Entrar</Button>

        <p>Ainda não possui uma conta?</p>

        <Link to={"/register"}>Cadastre-se</Link>
      </FormContainer>
    </Section>
  );
}

export default LoginPage;
