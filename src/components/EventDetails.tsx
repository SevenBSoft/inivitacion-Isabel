import styled from "styled-components";
import MidImage from "../assets/25.jpg";

const Section = styled.section`
  padding: 3rem 1.5rem;
  background-color: #ffffff;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 1.75rem;
  color: #b83280;
  margin-bottom: 2rem;
`;

const LocationBlock = styled.div`
  margin-bottom: 2rem;
`;

const LocationName = styled.h3`
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

const LocationLink = styled.a`
  color: #2563eb;
  text-decoration: underline;
`;

const StyledImage = styled.img`
  width: 100%;
  margin-top: 2rem;
  border-radius: 10px;
`;

export default function EventDetails() {
    return (
        <Section>
            <Title>Detalles del Evento</Title>

            <LocationBlock>
                <LocationName>Ceremonia religiosa</LocationName>
                <p>Parroquia del Señor del Encino - 4:00 PM</p>
                <LocationLink
                    href="https://maps.app.goo.gl/gU68P2V5fz1Ruj6u7"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Ver en Google Maps
                </LocationLink>
            </LocationBlock>

            <LocationBlock>
                <LocationName>Recepción</LocationName>
                <p>Hacienda San José del Carmen - 6:00 PM</p>
                <LocationLink
                    href="https://maps.app.goo.gl/Uq2tyukXEm4QSNRC9"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Ver en Google Maps
                </LocationLink>
            </LocationBlock>

            <StyledImage src={MidImage} alt="Decoración intermedia" />
        </Section>
    );
}