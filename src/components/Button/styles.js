import styled from "styled-components";

export const Container = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${(props) =>
    props.beigeSchema
      ? "var(--beige)"
      : props.greySchema
      ? "var(--grey)"
      : props.landingSchema
      ? "var(--grey)"
      : "var(--orange)"};
  border: 1px solid
    ${(props) => (props.beigeSchema ? "var(--black)" : "var(--orange)")};
  border-radius: 8px;
  height: 42px;
  padding: 0 5px;
  font-family: "Luckiest Guy", cursive;
  font-style: normal;
  font-weight: 500;
  line-height: 26px;
  color: ${(props) =>
    props.beigeSchema
      ? "var(--black)"
      : props.greySchema
      ? "var(--beige)"
      : props.landingSchema
      ? "var(--vanilla)"
      : "var(--black)"};
  margin: 0px 5px;

  :hover {
    box-shadow: inset 0 0 1em
      ${(props) =>
        props.beigeSchema
          ? "var(--black)"
          : props.landingSchema
          ? "var(--orange)"
          : "var(--black)"};
    color: ${(props) =>
      props.beigeSchema
        ? "var(--black)"
        : props.landingSchema
        ? "var(--vanilla)"
        : "var(--black)"};
    border: 1px solid
      ${(props) =>
        props.beigeSchema
          ? "var(--black)"
          : props.landingSchema
          ? "var(--orange)"
          : "var(--black)"};
  }
  :active {
    transform: scale(0.95);
  }
`;
