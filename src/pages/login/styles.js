import styled from "styled-components";
import { keyframes } from "styled-components";
import Logo from "../../assets/contatos.svg";

export const Container = styled.section`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--blue);

  @media (min-width: 1024px) {
    display: flex;
    justify-content: space-evenly;
  }
`;

export const LogoContainer = styled.div`
  width: 30vw;
  height: 80vh;
  background: url(${Logo}) no-repeat center var(--blue);

  @media (max-width: 1024px) {
    display: none;
  }
`;

const appearFromLeft = keyframes`
    from {
        opacity: 0;
        transform: translateX(-50px);
    }

    to{
        opacity: 1;
        transform: translateX(0);
    }
`;

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  //  animation: ${appearFromLeft} 1s;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    padding: 40px;
    border-radius: 8px;
    background-color: var(--gray);
    height: 400px;

    .buttonsBox {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: 16px;

      button {
        width: 100%;
      }

      span {
        margin: 16px 0;
        color: var(--beige);
      }
    }

    svg {
      margin-top: 25px;
      color: var(--gray);
      cursor: pointer;
    }
  }
`;
