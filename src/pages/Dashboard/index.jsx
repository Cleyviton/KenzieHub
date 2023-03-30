import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../componets/Header";
import SectionTechs from "../../componets/SectionTechs";
import SectionProfile from "../../componets/SectionProfile";
import { Main } from "./style";

function DashboardPage() {
  const navigate = useNavigate();

  return (
    <Main>
      <div>
        <Header />
      </div>
      <div>
        <SectionProfile />
      </div>
      <div>
        <SectionTechs />
      </div>
    </Main>
  );
}

export default DashboardPage;
