import React, { useContext } from "react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { Link, useLocation } from "react-router-dom";
import Input from "../../components/input";
import { LoginContainer, Container, LogoContainer } from "./styles";
import Button from "../../components/Button";
import requestApi from "../../services/API";
import { userInfoContext } from "../../providers/userInfo";
import { toast } from "react-toastify";
import { FaEye } from "react-icons/fa";

export default function Login() {
  const schema = yup.object().shape({
    full_name: yup.string().required("Campo obrigatório!"),
    password: yup
      .string()
      .min(6, "Mínimo de 6 dígitos")
      .required("Campo obrigatório!"),
  });
  const location = useLocation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const { saveUserInfo } = useContext(userInfoContext);

  const onSubmitFunction = (data) => {
    requestApi
      .post("/user/login", data)
      .then((res) => {
        saveUserInfo(res.data);

        return <Link to="/contact" state={{ from: location }} />;
      })
      .catch((_) => toast.error("Email ou senha inválidos!"));
  };

  return (
    <Container>
      <LoginContainer>
        <div>
          <h1>AGENDA VIRTUAL</h1>
          <h2>seus contatos a todo instante</h2>
        </div>
        <form onSubmit={handleSubmit(onSubmitFunction)}>
          <Input
            name="full_name"
            error={errors.full_name?.message}
            register={register}
            placeholder="Digite aqui seu nome completo"
          />
          <Input
            label="password"
            register={register}
            placeholder="Digite aqui seu senha"
            name="password"
            type="password"
            icon={FaEye}
            error={errors.password?.message}
          />

          <div className="buttonsBox">
            <Button type="submit">Entrar</Button>

            <span>Ainda não possui cadastro?</span>

            <Button
              landingSchema
              onClick={() => (
                <Link to="/user/register" state={{ from: location }} />
              )}
            >
              Cadastre-se aqui!
            </Button>
          </div>
        </form>
      </LoginContainer>
      <LogoContainer />
    </Container>
  );
}
