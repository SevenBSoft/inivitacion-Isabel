import styled from "styled-components";
import BackgroundImage from "../assets/8.jpg";

const Section = styled.section`
  min-height: 100vh;
  background-image: url(${BackgroundImage});
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  text-align: center;
  color: white;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background-color: rgba(0, 0, 0, 0.4);
    z-index: 1;
  }
`;

const Content = styled.div`
  position: relative;
  z-index: 2;
`;

const Title = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 1rem;
`;

const Subtitle = styled.p`
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
`;

export default function HeroSection() {
  return (
    <Section>
      <Content>
        <Title>Isabel & Javier</Title>
        <Subtitle>Nos hace mucha ilusión compartir contigo</Subtitle>
        <Subtitle>este día tan especial.</Subtitle>
      </Content>
    </Section>
  );
}