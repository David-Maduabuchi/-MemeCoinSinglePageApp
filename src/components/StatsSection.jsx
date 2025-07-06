// src/components/StatsSection.jsx
import React from 'react';
import styled from 'styled-components';

/** breakpoints **/
const mobile = '@media (max-width: 768px)';

/** SECTION WRAPPER **/
const Section = styled.section`
  margin: 0;             
  padding: 0 20px 80px;
  background: #181818;
  color: #fff;
  margin-top: 70px;
`;

/** LIVE MARKET DATA **/
const MarketGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 24px;
  margin-bottom: 64px;

  ${mobile} {
    grid-template-columns: repeat(auto-fit, minmax(130px, 1fr));
    gap: 16px;
    margin-bottom: 40px;
  }
`;

const DataCard = styled.div`
  background: #fff;
  border: 2px solid #ff7200;
  border-radius: 12px;
  padding: 16px;
  text-align: left;

  ${mobile} {
    padding: 12px;
  }
`;

const Label = styled.div`
  font-size: 14px;
  color: #f34900;
  font-weight: 600;

  ${mobile} {
    font-size: 12px;
  }
`;

const Value = styled.div`
  margin-top: 8px;
  font-size: 24px;
  font-weight: bold;
  color: #000;

  ${mobile} {
    font-size: 20px;
  }
`;

/** MEMINOMICS **/
const MeminomicsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 48px;
  align-items: center;

  ${mobile} {
    grid-template-columns: 1fr;
    gap: 24px;
  }
`;

const TextBlock = styled.div`
  line-height: 1.6;
  font-size: 16px;
  color: #ddd;


  & h2 {
    margin-bottom: 16px;
    font-size: 28px;
    color: #fff;
    

  }

  & p {
    margin-bottom: 16px;
  }

  ${mobile} {
    & h2 { font-size: 24px; }
    font-size: 14px;
  }
`;

const ChartContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 320px;
  margin: 0 auto;
`;

/** PLACEHOLDER IMAGE—swap this out for your own SVG or Canvas chart **/
const ChartImage = styled.img`
  width: 100%;
  height: 100%;
  
  display: block;
  border-radius: 5%;
`;

/** CONNECTOR LABELS **/
const Connector = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  color: #fff;
  font-weight: bold;

  &::before {
    content: '';
    display: block;
    width: 40px;
    height: 2px;
    background: #fff;
    margin-right: 8px;
  }
`;

/** SPECIFIC POSITIONS **/
const LiquidityLabel = styled(Connector)`
  top: 20%;
  left: -20%;
`;

const CexLabel = styled(Connector)`
  bottom: 15%;
  right: -20%;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;           /* ~40px */
  font-weight: bold;
  text-transform: uppercase;
  text-align: center;
  color: #fff;
  margin-bottom: 1.5rem;

  ${mobile} {
    font-size: 2rem;           /* ~32px on mobile */
    margin-bottom: 1rem;
  }
`;


const OverflowImage = styled.img`
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  width: 100vw;
  display: block;
  margin: -8px 0 0;         /* negative top margin removes the space */
`;
export default function StatsSection() {
  return (
    <Section>
         <OverflowImage
        src="subtract.png"
        alt="Top decorative overflow"
      />
        <SectionTitle>Live Market Data</SectionTitle>
      {/* Live Market Data */}
      <MarketGrid>
        <DataCard>
          <Label>Price</Label>
          <Value>$0.280209</Value>
        </DataCard>
        <DataCard>
          <Label>Market Cap</Label>
          <Value>$282.15M</Value>
        </DataCard>
        <DataCard>
          <Label>24h Volume</Label>
          <Value>$19.20M</Value>
        </DataCard>
        <DataCard>
          <Label>Holders</Label>
          <Value>20,269</Value>
        </DataCard>
      </MarketGrid>

      {/* MEMINOMICS */}
      <MeminomicsWrapper>
        <TextBlock>
          <h2>MEMINOMICS</h2>
          <p>
            60% of the tokens were sent to the liquidity pool. LP tokens were burnt once renounced.
            The remaining 40% of the supply is being held in a multi-sig wallet only to be
            used as tokens for future centralized exchange listings, bridges and liquidity pools.
          </p>
        </TextBlock>

        <ChartContainer>
          <ChartImage
            src="meminomics2.png"
            alt="Token distribution chart (60% liquidity, 40% CEX)"
          />
          
        </ChartContainer>
      </MeminomicsWrapper>
    </Section>
  );
}
