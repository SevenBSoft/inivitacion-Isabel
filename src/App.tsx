import React from 'react';
import styled from 'styled-components';
import headerImage from './assets/8.jpg';
import walkImage from './assets/19.jpg';
import finalImage from './assets/25.jpg';

const Container = styled.div`
  font-family: 'Georgia', serif;
  background-color: #fffaf5;
  color: #2e2e2e;
  padding: 2rem;
  max-width: 600px;
  margin: auto;
  text-align: center;
`;

const Image = styled.div`
  background-image: url(${props => props.$src});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  height: 200px;
  margin: 1rem 0;
`;

const Names = styled.h2`
  font-size: 2.5rem;
  font-weight: 300;
  color: #b08d57;
  margin-bottom: 1rem;
`;

const Divider = styled.hr`
  border: none;
  border-top: 1px solid #ccc;
  margin: 2rem 0;
`;

const Section = styled.section`
  margin: 2rem 0;
`;

const Subtitle = styled.h3`
  font-size: 1.5rem;
  color: #b08d57;
  margin-bottom: 0.5rem;
`;

const Text = styled.p`
  font-size: 1.1rem;
  margin: 0.5rem 0;
`;

const Link = styled.a`
  display: block;
  color: #b08d57;
  font-weight: bold;
  text-decoration: none;
  margin-top: 0.5rem;

  &:hover {
    text-decoration: underline;
  }
`;

const App = () => {
  return (
    <Container>
      <Image $src={headerImage} />

      <Names>Isabel & Javier</Names>
      <Subtitle>¡Estás invitado!</Subtitle>
      <Text>Queremos que seas parte de este momento tan especial</Text>

      <Divider />

      <Section>
        <Subtitle>Save the date</Subtitle>
        <Subtitle>26/04/2025</Subtitle>
      </Section>

      <Section>
        <Subtitle>Ceremonia</Subtitle>
        <Text>Templo San Francisco de Asís</Text>
        <Text>18:00 hrs.</Text>
        <Text>
          Apreciamos en este día tan especial, tu unión con nosotros en la comunión.
        </Text>
        <Link href="https://maps.app.goo.gl/gU68P2V5fz1Ruj6u7" target="_blank">
          Ver ubicación
        </Link>
      </Section>

      <Divider />

      <Image $src={walkImage} />

      <Section>
        <Subtitle>
          Después de la ceremonia acompáñanos en una caminata rumbo a la celebración al ritmo del mariachi
        </Subtitle>
      </Section>

      <Section>
        <Subtitle>Celebración</Subtitle>
        <Text>Jardín Mesón de la Trinidad</Text>
        <Text>20:00 hrs</Text>
        <Text>Con mucho cariño, les pedimos que esta celebración sea solo para adultos.</Text>
        <Text>Código de vestimenta: formal</Text>
        <Link href="https://maps.app.goo.gl/Uq2tyukXEm4QSNRC9" target="_blank">
          Ver ubicación
        </Link>
      </Section>

      <Section>
        <Subtitle>Confirmación de asistencia</Subtitle>
        <Link href="https://wa.me/message/2IEU6XVJ3GTNN1" target="_blank">
          Confirmar por WhatsApp
        </Link>
      </Section>

      <Divider />

      <Section>
        <Subtitle>Mesa de regalos</Subtitle>
        <Link
          href="https://mesaderegalos.liverpool.com.mx/milistaderegalos/51479816"
          target="_blank"
        >
          Ver mesa de regalos
        </Link>
      </Section>

      <Section>
        <Subtitle>Sugiere una canción</Subtitle>
        <Link
          href="https://docs.google.com/forms/d/e/1FAIpQLSejtfF2WD6nxeYWBU6tYwLnERoFg7cAJ2oFGcvE7mkuDaBk-A/viewform?usp=header"
          target="_blank"
        >
          Enviar sugerencia
        </Link>
      </Section>

      <Divider />

      <Image $src={finalImage} />
    </Container>
  );
};

export default App;
