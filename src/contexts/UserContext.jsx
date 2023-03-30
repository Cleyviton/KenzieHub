import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Api } from "../services/Api";

export const UserContext = createContext({});

export function UserProvider({ children }) {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [userTechList, setUserTechList] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("@Kenzie-Hub:UserToken");
    if (token) {
      async function autoLogin() {
        try {
          const response = await Api.get("/profile", {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          setUser(response.data);
          setUserTechList(response.data.techs);
          navigate("/dashboard");
        } catch (error) {
          console.log(error);
        }
      }
      autoLogin();
    }
  }, []);

  async function onLogin(data, reset) {
    try {
      const response = await Api.post("/sessions", data);
      setUser(response.data.user);
      setUserTechList(response.data.user.techs);
      navigate("/dashboard");
      localStorage.setItem("@Kenzie-Hub:UserToken", response.data.token);

      reset();
      toast.success("Login efetuado com sucesso!");
    } catch (error) {
      toast.error("Email ou senha incorreto, verifique seus dados!");
    }
  }

  async function onRegister(data, reset) {
    try {
      const response = await Api.post("/users", data);

      navigate("/");
      toast.success("Usuário cadastrado com sucesso!");
      reset();
    } catch (error) {
      toast.error("Email já cadastrado, tente cadastrar um email diferente!");
    }
  }

  return (
    <UserContext.Provider
      value={{
        onLogin,
        onRegister,
        user,
        setUser,
        userTechList,
        setUserTechList,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
