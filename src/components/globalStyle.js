import styled from "styled-components";

const Title = styled.h2`
  font-size: calc(1.8rem + 1.2vw);
  font-weight: 700;
`;

const Para = styled.p`
  color: hsl(231, 7%, 60%);
`;

const Button = styled.button`
  width: 100%;
  padding: 15px 20px;
  border-radius: 5px;
  border: none;
  outline: none;
  background: hsl(234, 29%, 20%);
  color: white;
  cursor: pointer;
  &:hover {
    background: hsl(4, 100%, 67%);
    box-shadow: 4px 4px 10px hsl(4, 100%, 67%);
  }
`;

export { Title, Para, Button };
