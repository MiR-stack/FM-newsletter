import React from "react";
import { Container, Strong, Wraper, Wraper2 } from "./styled";
import { Button, Para, Title } from "../globalStyle";
import { ReactComponent as Success } from "../../assets/images/icon-success.svg";

function Confirmation({ email, handleModal }) {
  return (
    <Container>
      <Wraper>
        <Wraper2>
          <Success />

          <Title>Thanks for subscribing! </Title>
          <Para>
            {" "}
            A confirmation email has been set to <Strong>{email}.</Strong>{" "}
            Please open it and click the button inside to confirm your
            subscription
          </Para>
        </Wraper2>
        <Button onClick={() => handleModal("subscribe")}>
          Dismiss message
        </Button>
      </Wraper>
    </Container>
  );
}

export default Confirmation;
