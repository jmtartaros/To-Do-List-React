/* eslint-disable react/prop-types */
import styled from "styled-components";

const BtnAdd = styled.button`
  background-color: ${(props) => props.bgColor || "#000"};
  color: #fff;
  border: none;
  border-radius: 6px;
  height: 100%;
  cursor: pointer;
`;

const Add = (props) => {
  const { children, type, onClear, bgColor } = props;
  return (
    <>
      <BtnAdd type={type} onClick={onClear} bgColor={bgColor}>
        {children}
      </BtnAdd>
    </>
  );
};
export default Add;
