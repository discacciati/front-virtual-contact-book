import { Container } from "./styles";

const Button = ({
  beigeSchema,
  greySchema,
  landingSchema,
  children,
  type,
  ...rest
}) => {
  return (
    <Container
      landingSchema={landingSchema}
      beigeSchema={beigeSchema}
      greySchema={greySchema}
      type={type}
      {...rest}
    >
      {children}
    </Container>
  );
};

export default Button;
