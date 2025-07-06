// src/components/HowToBuySection.jsx
import React from "react";
import styled from "styled-components";

const mobile = "@media (max-width: 768px)";
const tablet = "@media (min-width: 769px) and (max-width: 1280px)";


const Section = styled.section`
  position: relative;
  background: url("beach.png") bottom center no-repeat;
  background-size: cover;
  padding: 100px 20px 60px;
  color: #333;

  ${mobile} {
    background-position: 10% 40%;
    height: fit-content;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Title = styled.h2`
  font-size: 3rem;
  text-align: center;
  color: #f34900;
  margin-bottom: 64px;
  /* Updated styling */
  font-family: "Arial";
  font-weight: 900;
  font-size: 64px;
  text-transform: uppercase;

  ${mobile} {
    font-size: 2.25rem;
    margin-bottom: 40px;
  }
`;

const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 48px;

  ${mobile} {
    grid-template-columns: 1fr;
    gap: 32px;
  }
`;

const LeftColumn = styled.div``;

const RightColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;

  ${mobile} {
    gap: 24px;
  }
`;

const StepCard = styled.div`
  position: relative;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 12px;
  padding: 32px 24px 24px 96px;
  min-height: 160px;

  ${mobile} {
    padding: 24px 16px 16px 80px;
    min-height: auto;
  }
`;

const StepNumber = styled.div`
  position: absolute;
  top: 24px;
  left: 24px;
  font-weight: bold;
  font-family: "Arial", sans-serif;
  color: #f34900;
  font-family: Arial;
  font-weight: 900;
  font-style: Black;
  font-size: 128px;
  vertical-align: middle;

  ${mobile} {
    font-size: 2.5rem;
    top: 16px;
    left: 16px;
  }
`;

const StepTitle = styled.h3`
  font-size: 1.5rem;
  margin: 0 0 12px;
  color: #333;

  ${mobile} {
    font-size: 1.25rem;
    margin-bottom: 8px;
  }
`;

const StepText = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  margin: 0;

  ${mobile} {
    font-size: 0.9rem;
  }
`;

export default function HowToBuySection() {
  return (
    <Section>
      <Container>
        <Title>How to Buy</Title>

        <ContentGrid>
          <LeftColumn>
            <StepCard>
              <StepNumber>1</StepNumber>
              <StepTitle>Create a wallet</StepTitle>
              <StepText>
                Download a Solana wallet. We recommend Phantom or Solflare.
                These can be downloaded from the App Store or as Chrome
                extensions for desktop users.
              </StepText>
            </StepCard>
          </LeftColumn>

          <RightColumn>
            <StepCard>
              <StepNumber>2</StepNumber>
              <StepTitle>Buy SOL</StepTitle>
              <StepText>
                Purchase Solana through the Phantom wallet or alternatively send
                Solana to your new wallet from an exchange.
              </StepText>
            </StepCard>

            <StepCard>
              <StepNumber>3</StepNumber>
              <StepTitle>Swap</StepTitle>
              <StepText>
                Open raydium.io. Click “launch app,” connect your wallet.
                Convert SOL to $MEMECOIN by pasting the contract address into
                the second box.
              </StepText>
            </StepCard>

            <StepCard>
              <StepNumber>4</StepNumber>
              <StepTitle>You’re welcome</StepTitle>
              <StepText>
                Your MEMECOIN tokens should now be in your wallet. Welcome to
                the $TARD-fun!
              </StepText>
            </StepCard>
          </RightColumn>
        </ContentGrid>
      </Container>
    </Section>
  );
}
