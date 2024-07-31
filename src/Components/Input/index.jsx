/* eslint-disable react/prop-types */
import styled from "styled-components";

const InputStyle = styled.input`
  width: 100%;
  cursor: pointer;
`;

const Input = (props) => {
  const { type, placeholder, onCambios, value } = props;
  return (
    <>
      <InputStyle
        type={type}
        placeholder={placeholder}
        onChange={onCambios}
        value={value}
      />
    </>
  );
};
export default Input;
