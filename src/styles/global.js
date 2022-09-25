import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
        font-family: "Roboto", sans-serif;
    }

    :root {
        --blue : #CBDDF7;
        --darkblue: #1C367B ;
        --black: #252422;
        --fullblack: #000000;
        --grey: #D9D9D9;
        --greyfont: #8C8A8A;
    }
    
    button{
        cursor: pointer;
        font-family: "Titan One", cursive;
        font-weight: 500;
        color: var(--darkblue);
    }

    body{
        background-color: var(--blue);
        color: var(--black);
        list-style: none;
    }

    h1, h3, h4, h5, h6{
        font-family: 'Luckiest Guy', cursive;
        font-weight: 700;
        color: var(--darkblue)
    }
    h2{
        font-family: 'Italiana', serif;
        font-weight: 400;
        color: var(--darkblue)
    }

    a{
        text-decoration: none;
    }
`;
export const customStyles = {
  content: {
    padding: "0px",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    borderRadius: "5px",
  },
};

export const galeryModalStyles = {
  content: {
    width: "300px",
    padding: "0px",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    borderRadius: "5px",
  },
};
