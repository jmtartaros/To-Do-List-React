/* eslint-disable react/prop-types */
import { useState } from "react";
import styled from "styled-components";
import Input from "../Input";

const ContainerP = styled.div`
  background-color: ${(props) => (props.checked ? "#81D4FA" : "#9370DB")};
  width: 50%;
  height: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 6px;
  img {
    cursor: pointer;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

const Parrafo = styled.p`
  color: ${(props) => (props.checked ? "#000" : "#ffffff")};
  font-size: 1.2rem;
`;

const Contenedor = styled.div`
  height: 20px;
  width: 100px;
  display: flex;
  justify-content: space-between;
  input {
    height: 15px;
  }
`;

const TextoInput = ({ children, onDelete }) => {
  const [check, setCheck] = useState(false);
  const isMark = () => {
    setCheck((prevCheck) => !prevCheck);

    console.log("se cambio el estado");
  };
  return (
    <>
      <ContainerP checked={check}>
        <Parrafo checked={check}>{children}</Parrafo>
        <Contenedor>
          <Input type="checkbox" checked={check} onCambios={isMark} />
          <img src="img/trash-fill.svg" alt="Trash" onClick={onDelete} />
        </Contenedor>
      </ContainerP>
    </>
  );
};
export default TextoInput;
