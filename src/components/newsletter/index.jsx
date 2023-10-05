import {
  Container,
  Content,
  ListItem,
  Label,
  Input,
  Media,
  DesktopImage,
  MobileImage,
  LabelWraper,
  Warning,
} from "./style";
import { Title, Para, Button } from "../globalStyle";
import { ReactComponent as Check } from "../../assets/images/icon-list.svg";
import signUpDesktop from "../../assets/images/illustration-sign-up-desktop.svg";
import signUpMobile from "../../assets/images/illustration-sign-up-mobile.svg";
import { useEffect, useState } from "react";

const lists = [
  "product discovery and building what matters",
  "mesuring to ensure updats are success",
  "and much more",
];

const initialState = {
  touched: false,
  validate: true,
};

function Newsletter({ handleModal, email, handleEmail }) {
  const [state, setState] = useState({ ...initialState });

  const pattern =
    /[a-zA-Z0-9]+[\.]?([a-zA-Z0-9]+)?[\@][a-z]{3,9}[\.][a-z]{2,5}/g;

  const handleSubscribe = () => {
    if (pattern.test(email)) {
      setState({ ...state, touched: true });
      handleModal("confirmed");
    } else {
      setState({ ...state, validate: false, touched: true });
    }
  };

  useEffect(() => {
    if (state.touched) {
      if (pattern.test(email)) {
        setState({ ...state, validate: true });
      } else {
        setState({ ...state, validate: false });
      }
    }
  }, [email]);

  return (
    <Container>
      <Content>
        <Title>Stay updated!</Title>
        <Para>
          join 60,000+ product managers receiving by monthly updates on:
        </Para>
        <div>
          {lists.map((list) => (
            <ListItem key={list}>
              <Check />
              <Para>{list}</Para>
            </ListItem>
          ))}
        </div>
        <div>
          <LabelWraper>
            <Label htmlFor="email">Email address</Label>
            <Warning $validate={state.validate}>Valid email required</Warning>
          </LabelWraper>
          <Input
            placeholder="email@company.com"
            id="email"
            value={email}
            onChange={(e) => handleEmail(e)}
            $validate={state.validate}
          />
        </div>
        <Button onClick={handleSubscribe}>
          Subscribe to monthly newsletter
        </Button>
      </Content>
      <Media>
        <DesktopImage src={signUpDesktop} />
        <MobileImage src={signUpMobile} />
      </Media>
    </Container>
  );
}

export default Newsletter;
