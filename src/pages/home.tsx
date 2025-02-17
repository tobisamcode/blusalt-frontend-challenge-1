import styled from "styled-components";
import Trafficlight from "../components/traffic-light";

const Container = styled.div`
  text-align: center;
  color: white;
`;

export default function Home() {
  return (
    <Container>
      <h1>Traffic Light System 🚦</h1>
      <Trafficlight />
    </Container>
  );
}
