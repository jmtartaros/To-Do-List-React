/* eslint-disable react/prop-types */
import styled from "styled-components";

const TitleStyle = styled.h1`
  font-size: 2rem;
  color: #fffccc;
  font-weight: bold;
  filter: drop-shadow(0px 0px 5px #000);
`;
const Title = ({ children }) => {
  return (
    <>
      <TitleStyle>{children}</TitleStyle>
    </>
  );
};
export default Title;
