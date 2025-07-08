import React from "react";
import styled from "styled-components";
import { FaTelegramPlane, FaDiscord } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const mobile = "@media (max-width: 768px)";
const tablet = "@media (min-width: 769px) and (max-width: 1280px)";

const OverflowStripe = styled.img`
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  width: 100vw;
  display: block;
  object-fit: cover;
  margin: 0;
`;

const Section = styled.section`
  position: relative;
  background: #222222;
  color: #fff;
  padding: 0px 20px 40px;
  overflow: hidden;
`;

/** Huge faint background text **/
const BackgroundText = styled.h1`
  position: absolute;
  top: 10px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 20vw;
  color: rgba(255, 255, 255, 0.05);
  white-space: nowrap;
  user-select: none;
  pointer-events: none;
  ${mobile} {
    display: none; 
  }
`;

/** Main grid: Mascot | Content **/
const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 40px;
  flex-direction: row;
  max-width: 1200px;
  margin: 0 auto;

  ${mobile} {
    grid-template-columns: 1fr;
    gap: 24px;
    text-align: center;
    flex-direction: column;
  }
  .social-section {
    order: 3;
    flex-direction: column;
  }
`;

/** Left: Mascot image **/
const MascotImage = styled.img`
  width: 100%;
  max-width: 400px;
  justify-self: center;
  order 0;
  ${mobile} {
    max-width: 250px;
    margin-left: 20%;
    order: 2;
    &.on-desktop {
      display: none; }  
  }
`;

/** Right: Text & controls **/
const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  order: 1;
  .on-mobile {
    display: none;
  }
  ${mobile} {
    gap: 24px;
    .on-mobile {
    display: flex;
    
  }
  }
`;

const Title = styled.h2`
  font-size: 2.5rem;
  color: #ff8e00;
  margin: 0;
  padding-top: 10%;
  
  ${mobile} {
    font-size: 2rem;
  }
`;

const Tagline = styled.p`
  font-size: 1.1rem;
  max-width: 600px;
  margin: 0;
  font-weight: 500;
  font-family: "Arial", sans-serif;
  line-height: 1.4;

  ${mobile} {
    font-size: 1.4rem;
    font-weight: 900;
    margin: 0 auto;
  }
`;

/** Reuse BuyBar from earlier examples **/
const BuyBar = styled.div`
  display: flex;
  gap: 16px;
  flex-wrap: wrap;

  ${mobile} {
    justify-content: center;
  }
`;

const BuyButton = styled.button`
  display: inline-flex;
  gap: 8px;
  background: #fff;
  color: #000;
  border: none;
  padding: 12px 20px;
  border-radius: 8px;
  font-weight: bold;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  padding-top: 5px;
  a {
    text-decoration: none;
    color: inherit;
  }

  img {
    width: 24px;
    height: 24px;
    padding: 1px;
    position: relative;
    top: 7px;
  }
    ${mobile} {
    padding: 10px 16px; 
    width: 100%;
    font-size: 1.1rem;
    align-items: center;
    justify-content: center;
    a {
    text-align: center;
    display: flex;
    align-items: center;
    }
    img {
      width: 20px;
      height: 20px; 
      margin-right: 10px;
      position: relative;
      top: 0px;
      }
    }

  &:hover {
    background: #e2e2e2;
  }
`;

const AddressContainer = styled.div`
  display: flex;
  background: #fff;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
`;

const AddressInput = styled.input`
  border: none;
  padding: 12px;
  font-family: monospace;
  font-weight: bold;
  outline: none;
  width: 240px;
  overflow-x: auto;
  white-space: nowrap;

  /* optional: hide the scrollbar but still allow scrolling */
  &::-webkit-scrollbar {
    height: 0;

  ${mobile} {
    width: 180px;
  }
`;

const CopyButton = styled.button`
  background: #ff8e00;
  color: #fff;
  border: none;
  border-radius: 8px;
  margin: 5px;
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background: #e07b00;
  }
    ${mobile} { 
    width: 100%;
  }
`;

/** Stay In Touch **/
const SocialHeading = styled.h4`
  font-size: 1.25rem;
  color: #ff8e00;
  margin-bottom: 15px;
  order:1;
  ${mobile} {
    font-size: 1.1rem;
    order: 3;
  }
`;
const SocialIcon = styled.div`
  background: #fff;
  border-radius: 50%;
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: transform 0.2s;

  svg {
    width: 24px;
    height: 24px;
    color: #101010;
  }

  &:hover {
    transform: scale(1.1);
  }

  ${mobile} {
    width: 36px;
    height: 36px;

    svg {
      width: 20px;
      height: 20px;
    }
  }
`;

// Update your SocialIcons container
const SocialIcons = styled.div`
  display: flex;
  gap: 16px;

  ${mobile} {
    justify-content: center;
  }
`;

/** Footer note **/
const FooterNote = styled.p`
  margin: 12px 0 0;
  font-size: 24px;
  color: #fff;
  font-weight: 300;
  text-align: left;

  ${mobile} {
    font-size: 16px;
    text-align: center;
    margin-left: 5%;
    &.on-desktop {
      display: none;}
  }
`;

export default function FooterSection() {
  const handleCopy = () => {
    const fullValue = "CA: 4daoTLufDmV3ods48Zh8rymaZKBLtgEvuH9qALYLbonk";
    const addressOnly = fullValue.split("CA:")[1]?.trim(); // gets the part after "CA: "
    if (addressOnly) {
      navigator.clipboard.writeText(addressOnly).then(() => {
        alert("Address copied: " + addressOnly);
      });
    }
  };
  return (
    <Section>
      <OverflowStripe src="overflow2.png" alt="Footer top decorative stripe" />
      <BackgroundText>MEMECOIN</BackgroundText>
      <Grid>
       <MascotImage src="footer-mascot.png" className="on-desktop" alt="MemeCoin mascot" />
        <Content>
           <MascotImage src="footer-mascot.png" className="on-mobile" alt="MemeCoin mascot" />
          <Title>$MEMECOIN</Title>
          <Tagline>
            Is The Apex of Speculation Meets Storytelling. Don’t Overthink It.
            Just Vibe In.
          </Tagline>

          <BuyBar>
            <BuyButton>
              <a
                href="https://raydium.io/swap/?outputMint=4daoTLufDmV3ods48Zh8rymaZKBLtgEvuH9qALYLbonk&inputMint=sol"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="header_logo2.png" alt="Buy Icon" />
                Buy $MemeCoin
              </a>
            </BuyButton>
            <AddressContainer>
              <AddressInput
                type="text"
                readOnly
                value="CA: 4daoTLufDmV3ods48Zh8rymaZKBLtgEvuH9qALYLbonk"
              />
              <CopyButton onClick={handleCopy}>Copy address</CopyButton>
            </AddressContainer>
          </BuyBar>

          <div className="social-section">
            <SocialHeading>Stay In Touch</SocialHeading>
            <SocialIcons>
              <SocialIcon>
                <a
                  href="https://x.com/thememecoincult?s=09"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                <FaTelegramPlane /></a>
              </SocialIcon>
              <SocialIcon>
                <a
                    href="https://x.com/thememecoincult?s=09"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                <FaXTwitter /></a>
              </SocialIcon>
              <SocialIcon>
                <a
                      href="https://x.com/thememecoincult?s=09"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                <FaDiscord /></a>
              </SocialIcon>
            </SocialIcons>
            <FooterNote className="on-mobile">© 2024 by Memecoin — All rights reserved</FooterNote>
          </div>

          <FooterNote className="on-desktop">© 2024 by Memecoin — All rights reserved</FooterNote>
        </Content>
      </Grid>
    </Section>
  );
}
