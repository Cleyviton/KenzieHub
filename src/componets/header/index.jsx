import { Link } from "react-router-dom";
import { StyleHeader } from "./style";

function Header() {
  return (
    <StyleHeader>
      <h1>Kenzie Hub</h1>
      <Link
        to={"/"}
        onClick={() => localStorage.removeItem("@Kenzie-Hub:UserToken")}
      >
        voltar
      </Link>
    </StyleHeader>
  );
}

export default Header;
