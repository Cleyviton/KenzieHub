import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { StyleSection } from "./style";

function SectionProfile() {
  const { user } = useContext(UserContext);

  return (
    <StyleSection>
      <p>Olá, {user.name}</p>
      <span>{user.course_module}</span>
    </StyleSection>
  );
}

export default SectionProfile;
