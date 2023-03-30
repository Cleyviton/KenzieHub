import { StyleSelect } from "./style";

function Select({ register }) {
  return (
    <StyleSelect {...register("course_module")}>
      <option value="Primeiro módulo (Introdução ao Frontend)">
        Primeiro módulo (Introdução ao Frontend)
      </option>
      <option value="Segundo módulo (Frontend Intermediário)">
        Segundo módulo (Frontend Intermediário)
      </option>
      <option value="Terceiro módulo (Frontend Avançado)">
        Terceiro módulo (Frontend Avançado)
      </option>
      <option value="Quarto módulo (Introdução ao Backend)">
        Quarto módulo (Introdução ao Backend)
      </option>
      <option value="Quinto módulo (Backend Intermediário)">
        Quinto módulo (Backend Intermediário)
      </option>
      <option value="Sexto módulo (Backend Avançado)">
        Sexto módulo (Backend Avançado)
      </option>
    </StyleSelect>
  );
}

export default Select;
