import React, { useState } from "react";
import { BsEyeSlashFill } from "react-icons/bs";
import { Container } from "./styles";

export default function Input({
  label,
  icon: Icon,
  register,
  error,
  name,
  ...rest
}) {
  const [show, setShow] = useState("password");

  const handlePassword = () => {
    show === "text" ? setShow("password") : setShow("text");
  };
  return (
    <Container>
      <div>
        <input
          {...register(name)}
          {...rest}
          type={
            label === "Senha" || label === "Confirmar senha" ? show : "text"
          }
        />
        {Icon ? (
          show === "text" ? (
            <Icon size={15} onClick={handlePassword} />
          ) : (
            <BsEyeSlashFill size={15} onClick={handlePassword} />
          )
        ) : null}
      </div>
      {!!error && <span>{error}</span>}
    </Container>
  );
}
