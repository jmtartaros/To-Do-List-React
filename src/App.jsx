import styled from "styled-components";
import Formulario from "./Components/Formulario";
import GlobalStyles from "./Components/GlobalStyles";
import Title from "./Components/Title";

const DivContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  padding: 24px;
  flex-direction: column;
  align-items: center;
  background-color: var(--bg-color);
  @media screen and (max-width: 768px) {
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
  }
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <DivContainer>
        <Title>To-Do-List</Title>
        <Formulario />
      </DivContainer>
    </>
  );
}

export default App;
