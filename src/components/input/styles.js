import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-right: 5px;

  div {
    display: flex;
    justify-content: space-between;
  }

  input {
    height: 35px;
    background-color: transparent;
    border: none;
    border-bottom: 1px solid var(--orange);
    caret-color: var(--orange);
    padding-left: 5px;
    color: var(--white);
    margin-top: 16px;

    &:focus {
      box-shadow: 0 0 0.7em var(--orange);
      border-bottom: none;
    }
  }

  span {
    font-size: 12px;
    color: var(--orange);
  }
`;
