import styled from 'styled-components';
import headerImage from './assets/8.jpg';
import walkImage from './assets/19.jpg';
import finalImage from './assets/25.jpg';

interface SectionProps {
  $src: string;
  $reverse?: boolean;
}

const Background = styled.div`
  width: 100%;
  background-color: #fffaf5;
`;

const Section = styled.div<SectionProps>`
  min-height: 150vh;
  background-image: ${({ $reverse, $src }) =>
    $reverse
      ? `linear-gradient(to top, rgba(255,250,245,0) 30%, rgba(255,250,245,0.8) 70%, #fffaf5 100%), url(${$src})`
      : `linear-gradient(to bottom, rgba(255,250,245,0) 30%, rgba(255,250,245,0.8) 70%, #fffaf5 100%), url(${$src})`};
  background-size: 100% 100%;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: ${({ $reverse }) => ($reverse ? 'flex-start' : 'flex-end')};
  padding: 2rem;
  padding-top: ${({ $reverse }) => ($reverse ? '6rem' : '2rem')};
  padding-bottom: ${({ $reverse }) => ($reverse ? '2rem' : '6rem')};
`;


const Container = styled.div`
  font-family: 'Georgia', serif;
  color: #2e2e2e;
  max-width: 600px;
  text-align: center;
`;

const Names = styled.h2`
  font-size: 3.5rem;
  font-weight: 300;
  color: #b08d57;
  margin-bottom: 1.5rem;
`;

const Subtitle = styled.h3`
  font-size: 2.3rem;
  color: #b08d57;
  margin: 1.2rem 0 0.8rem;
`;

const Text = styled.p`
  font-size: 1.6rem;
  margin: 1rem 0;
  color: #b08d57;
`;

const ButtonLink = styled.a`
  display: inline-block;
  background-color: #b08d57;
  color: #fff;
  font-size: 1.5rem;
  font-weight: bold;
  padding: 0.7rem 1.8rem;
  border-radius: 999px;
  margin: 1rem 0;
  text-decoration: none;

  &:hover {
    background-color: #a07a47;
  }
`;

const App = () => {
  return (
    <Background>
      <Section $src={headerImage}>
        <Container>
          <Names>Isabel & Javier</Names>
          <Subtitle>¡Estás invitado!</Subtitle>
          <Text>Queremos que seas parte de este momento tan especial</Text>

          <Subtitle>Save the date</Subtitle>
          <Subtitle>26/04/2025</Subtitle>
        </Container>
      </Section>

      <Section $src={walkImage}>
        <Container>
          <Subtitle>Ceremonia</Subtitle>
          <Text>Templo San Francisco de Asís</Text>
          <Text>18:00 hrs.</Text>
          <Text>
            Apreciamos en este día tan especial, tu unión con nosotros en la comunión.
          </Text>
          <ButtonLink href="https://maps.app.goo.gl/gU68P2V5fz1Ruj6u7" target="_blank">
            Ver ubicación
          </ButtonLink>

          <Subtitle>
            Después de la ceremonia acompáñanos en una caminata rumbo a la celebración al ritmo del mariachi
          </Subtitle>
        </Container>
      </Section>

      <Section $src={finalImage} $reverse>
        <Container>
          <Subtitle>Celebración</Subtitle>
          <Text>Jardín Mesón de la Trinidad</Text>
          <Text>20:00 hrs</Text>
          <Text>Con mucho cariño, les pedimos que esta celebración sea solo para adultos.</Text>
          <Text>Código de vestimenta: formal</Text>
          <ButtonLink href="https://maps.app.goo.gl/Uq2tyukXEm4QSNRC9" target="_blank">
            Ver ubicación
          </ButtonLink>

          <Subtitle>Confirmación de asistencia</Subtitle>
          <ButtonLink href="https://wa.me/message/2IEU6XVJ3GTNN1" target="_blank">
            Confirmar por WhatsApp
          </ButtonLink>

          <Subtitle>Mesa de regalos</Subtitle>
          <ButtonLink
            href="https://mesaderegalos.liverpool.com.mx/milistaderegalos/51479816"
            target="_blank"
          >
            Ver mesa de regalos
          </ButtonLink>

          <Subtitle>Sugiere una canción</Subtitle>
          <ButtonLink
            href="https://docs.google.com/forms/d/e/1FAIpQLSejtfF2WD6nxeYWBU6tYwLnERoFg7cAJ2oFGcvE7mkuDaBk-A/viewform?usp=header"
            target="_blank"
          >
            Enviar sugerencia
          </ButtonLink>
        </Container>
      </Section>
    </Background>
  );
};

export default App;
