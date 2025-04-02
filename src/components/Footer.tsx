import styled from "styled-components";

const FooterWrapper = styled.footer`
  padding: 2rem 1rem;
  text-align: center;
  font-size: 0.875rem;
  color: #777;
  background-color: #fefefe;
`;

export default function Footer() {
    return (
        <FooterWrapper>
            <p>Con cariño, Isabel & Javier</p>
        </FooterWrapper>
    );
}