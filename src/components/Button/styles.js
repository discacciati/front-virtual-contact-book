import styled from "styled-components";

export const Container = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${(props) =>
    props.greySchema
      ? "var(--grey)"
      : props.greySchema
      ? "var(--grey)"
      : props.landingSchema
      ? "var(--grey)"
      : "var(--blue)"};
  border: 1px solid
    ${(props) => (props.greySchema ? "var(--blue)" : "var(--grey)")};
  border-radius: 8px;
  height: 42px;
  padding: 0 5px;
  font-family: "Luckiest Guy", cursive;
  font-style: normal;
  font-weight: 500;
  line-height: 26px;
  color: ${(props) =>
    props.greySchema
      ? "var(--black)"
      : props.greySchema
      ? "var(--black)"
      : props.landingSchema
      ? "var(--greyfont)"
      : "var(--black)"};
  margin: 0px 5px;

  :hover {
    box-shadow: inset 0 0 1em
      ${(props) =>
        props.greySchema
          ? "var(--black)"
          : props.landingSchema
          ? "var(--blue)"
          : "var(--black)"};
    color: ${(props) =>
      props.greySchema
        ? "var(--black)"
        : props.landingSchema
        ? "var(--greyfont)"
        : "var(--black)"};
    border: 1px solid
      ${(props) =>
        props.greySchema
          ? "var(--black)"
          : props.landingSchema
          ? "var(--grey)"
          : "var(--black)"};
  }
  :active {
    transform: scale(0.95);
  }
`;
