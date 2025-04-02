import styled from "styled-components";

const Section = styled.section`
  padding: 3rem 1.5rem;
  background-color: #ffffff;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 1.75rem;
  color: #b83280;
  margin-bottom: 1rem;
`;

const Text = styled.p`
  margin-bottom: 1rem;
`;

const Button = styled.a`
  background-color: #7c3aed;
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 999px;
  text-decoration: none;
  font-weight: bold;
`;

export default function GiftRegistry() {
  return (
    <Section>
      <Title>Mesa de regalos</Title>
      <Text>Tu presencia es nuestro mayor regalo,</Text>
      <Text>pero si deseas hacernos un obsequio:</Text>
      <Button
        href="https://mesaderegalos.liverpool.com.mx/milistaderegalos/51479816"
        target="_blank"
        rel="noopener noreferrer"
      >
        Ver en Liverpool
      </Button>
    </Section>
  );
}