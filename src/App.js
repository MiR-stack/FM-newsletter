import { useState } from "react";
import Newsletter from "./components/newsletter";
import styled from "styled-components";
import Confirmation from "./components/confirmation";

const Container = styled.div`
  background: hsl(235, 18%, 26%);
  height: 100vh;
  width: 100%;
`;

function App() {
  const [modal, setModal] = useState("subscribe");
  const [email, setEmail] = useState("");

  const handleModal = (name) => {
    setModal(name);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  return (
    <Container>
      {modal === "subscribe" ? (
        <Newsletter
          handleModal={handleModal}
          handleEmail={handleEmail}
          email={email}
        />
      ) : (
        <Confirmation email={email} handleModal={handleModal} />
      )}
    </Container>
  );
}

export default App;
