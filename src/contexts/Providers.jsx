import React from "react";
import { FormSchemaProvider } from "./Schemas";
import { UserProvider } from "./UserContext";
import { UserTechProvider } from "./TechContext";

const Providers = ({ children }) => {
  return (
    <UserProvider>
      <FormSchemaProvider>
        <UserTechProvider>{children}</UserTechProvider>
      </FormSchemaProvider>
    </UserProvider>
  );
};

export default Providers;
