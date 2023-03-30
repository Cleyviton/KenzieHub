import { Notfound } from "./style";
import imgNotFound from "../../assets/notfound.png";
import { Button } from "../../componets/Button/style";
import { useNavigate } from "react-router-dom";

function NotFoundPage() {
  const navigate = useNavigate();

  function handleNotFound() {
    navigate("/");
  }

  return (
    <Notfound>
      <div>
        <img src={imgNotFound} alt="Não encontramos essa página." />
        <p>ops... parece que não conseguimos encontrar essa página :(</p>
        <span>volte para a pagina de Login.</span>
        <Button variant={"submit"} onClick={handleNotFound}>
          voltar
        </Button>
      </div>
    </Notfound>
  );
}

export default NotFoundPage;
