import styled from "styled-components";

const Container = styled.div`
  background: white;
  padding: 50px;
  border-radius: 30px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: calc(300px + 5vw);

  @media (max-width: 500px) {
    width: 100%;
    height: 100vh;
    border-radius: 0;
  }
`;

const Wraper = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 40px;
  @media (max-width: 600px) {
    justify-content: space-between;
    height: 100%;
  }
`;
const Wraper2 = styled(Wraper)`
  gap: 30px;

  @media (max-width: 1000px) {
    gap: 20px;
  }
  @media (max-width: 600px) {
    justify-content: center;
  }
`;

const Strong = styled.strong`
  color: rgba(0, 0, 0, 0.7);
  cursor: pointer;
`;

export { Container, Strong, Wraper, Wraper2 };
