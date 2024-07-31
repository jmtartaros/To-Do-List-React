import styled from "styled-components";
import Input from "../Input";
import Add from "../Button";
import { useEffect, useState } from "react";
import TextoInput from "../Texto";

const ContainerForm = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: ${(props) => (props.isRow ? "row" : "column")};
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 24px;
  flex-wrap: wrap;
  overflow-y: auto;
`;

const Form = styled.form`
  height: 36px;
  width: 600px;
  display: flex;
  margin-bottom: 8px;
  gap: 0.5rem;
  :focus {
    outline: none;
  }
  @media screen and (max-width: 768px) {
    width: 250px;
    margin-bottom: 0;
  }
`;

const Formulario = () => {
  const [value, setValue] = useState("");
  const [mensaje, setMensaje] = useState(() => {
    const saveMensaje = localStorage.getItem("mensaje");
    return saveMensaje ? JSON.parse(saveMensaje) : [];
  });

  const [isRow, setIsRow] = useState(false);

  useEffect(() => {
    // Cambiar a 'row' si hay más de 40 elementos
    setIsRow(mensaje.length > 35 || window.innerWidth <= 768);
  }, [mensaje]);
  useEffect(() => {
    localStorage.setItem("mensaje", JSON.stringify(mensaje));
  }, [mensaje]);

  const manejoDeTexto = (e) => {
    setValue(e.target.value);
  };
  const manejoDeEnvio = (e) => {
    e.preventDefault();
    if (value.trim() === "") return alert("debes escribir algo");
    console.log("Enviando formulario", value);
    setMensaje([...mensaje, value]);
    setValue("");
  };
  const deleteText = (index) => {
    setMensaje(mensaje.filter((_, i) => i !== index));
  };
  const deleteAll = () => {
    setMensaje([]);
  };
  return (
    <>
      <Form onSubmit={manejoDeEnvio}>
        <Input
          placeholder="Ingresa una tareas"
          value={value}
          type="text"
          onCambios={manejoDeTexto}
        />
        <Add type="submit" bgColor="#b39ddb">
          Add
        </Add>
        <Add type="button" onClear={deleteAll} bgColor="red">
          Delete
        </Add>
      </Form>
      <ContainerForm isRow={isRow}>
        {mensaje.map((send, index) => (
          <TextoInput key={index} onDelete={() => deleteText(index)}>
            {send}
          </TextoInput>
        ))}
      </ContainerForm>
    </>
  );
};
export default Formulario;
