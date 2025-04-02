import styled from "styled-components";

const Section = styled.section`
  padding: 3rem 1.5rem;
  background-color: #fff7f0;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 1.75rem;
  color: #b83280;
  margin-bottom: 1rem;
`;

const Button = styled.a`
  display: inline-block;
  margin: 0.5rem;
  padding: 0.75rem 1.5rem;
  border-radius: 999px;
  color: white;
  text-decoration: none;
  font-weight: bold;
`;

const WhatsAppButton = styled(Button)`
  background-color: #25d366;
`;

const FormButton = styled(Button)`
  background-color: #3b82f6;
`;

export default function RSVPSection() {
  return (
    <Section>
      <Title>¿Nos acompañas?</Title>
      <p>Agradecemos que confirmes tu asistencia.</p>

      <div>
        <WhatsAppButton
          href="https://wa.me/message/2IEU6XVJ3GTNN1"
          target="_blank"
          rel="noopener noreferrer"
        >
          Confirmar por WhatsApp
        </WhatsAppButton>

        <FormButton
          href="https://docs.google.com/forms/d/e/1FAIpQLSejtfF2WD6nxeYWBU6tYwLnERoFg7cAJ2oFGcvE7mkuDaBk-A/viewform?usp=header"
          target="_blank"
          rel="noopener noreferrer"
        >
          Confirmar por Formulario
        </FormButton>
      </div>
    </Section>
  );
}