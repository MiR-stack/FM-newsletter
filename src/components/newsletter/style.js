import styled from "styled-components";

const Container = styled.div`
  background: white;
  display: flex;
  align-items: center;
  gap: 50px;
  padding: 20px;
  border-radius: 30px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 900px;

  @media (max-width: 1000px) {
    width: 700px;
    gap: 30px;
  }
  @media (max-width: 800px) {
    width: 600px;
    gap: 20px;
  }
  @media (max-width: 700px) {
    width: 500px;
    gap: 10px;
  }
  @media (max-width: 550px) {
    flex-direction: column-reverse;
    width: 100%;
    height: 100%;
    border-radius: 0;
    padding: 0;
    justify-content: flex-end;
  }
`;

const Content = styled.div`
  display: flex;
  gap: 20px;
  flex-direction: column;
  padding: 50px;

  @media (max-width: 700px) {
    padding: 10px;
  }
  @media (max-width: 550px) {
    padding: 20px 10px 50px 10px;
  }
`;

const ListItem = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 10px;
`;

const LabelWraper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Label = styled.label`
  font-weight: 500;
`;

const Warning = styled.p`
  display: ${(props) => (props.$validate ? "none" : "block")};
  color: hsl(4, 100%, 67%);
`;

const Input = styled.input`
  margin-top: 10px;
  border: 1px solid hsl(231, 7%, 60%);
  border-radius: 10px;
  padding: 20px;
  width: 100%;
  outline: none;

  ${(props) =>
    props.$validate
      ? `
  color: hsl(231, 7%, 60%);
  &::placeholder {
    color: hsl(231, 7%, 60%);
  }

  &:hover {
    color: black;
    border: 1px solid black;
  }`
      : `color:hsl(4, 100%, 67%);
      border: 1px solid hsl(4, 100%, 67%);
      &::placeholder {
    color: hsl(4, 100%, 67%);
  }
      `}
`;

const Media = styled.div`
  height: 100%;

  @media (max-width: 550px) {
    border-radius: 0 0 20px 20px;
    overflow: hidden;
    height: 40%;
    width: 100%;
  }
`;

const DesktopImage = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  @media (max-width: 550px) {
    display: none;
  }
`;
const MobileImage = styled(DesktopImage)`
  display: none;
  @media (max-width: 550px) {
    display: inline-block;
  }
`;

export {
  Container,
  Content,
  ListItem,
  LabelWraper,
  Label,
  Warning,
  Input,
  Media,
  DesktopImage,
  MobileImage,
};
