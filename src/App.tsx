import styled from "styled-components";
import HeroSection from "./components/HeroSection";
import EventDetails from "./components/EventDetails";
import RSVPSection from "./components/RSVPSection";
import GiftRegistry from "./components/GiftRegistry";
import Footer from "./components/Footer";
import FinalImageSrc from "./assets/19.jpg";
import MidImageSrc from "./assets/25.jpg";

const Container = styled.div`
  width: 100vw;
  margin: 0 auto;
  font-family: 'Georgia', serif;
  color: #333;
`;

const Image = styled.img`
  width: 100%;
  margin-top: 2rem;
  border-radius: 10px;
`;

function App() {
  return (
    <Container>
      <HeroSection />
      <EventDetails />
      <RSVPSection />
      <GiftRegistry />
      <Image src={FinalImageSrc} alt="Decoración final" />
      <Footer />
    </Container>
  );
}

export default App;
