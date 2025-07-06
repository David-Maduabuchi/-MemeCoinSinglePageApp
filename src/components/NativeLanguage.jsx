import React from 'react';
import styled from 'styled-components';


const mobile = '@media (max-width: 768px)';
const tablet = '@media (max-width: 1280px)';

/** FULL-BLEED STRIPES OVERFLOW **/
const OverflowImage = styled.img`
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  width: 100vw;
  display: block;
  object-fit: cover;
`;

/** SECTION WRAPPER **/
const Section = styled.section`
  background: #fff;
  text-align: center;
  padding: 80px 20px;

  ${mobile} {
    padding: 60px 16px;
  }
`;

/** TITLES & TEXT **/
const Title = styled.h2`
  font-size: 6rem;
  color: #f34900;
  margin: 0 0 16px;
  margin-top: -7%;

  ${mobile} {
    font-size: 2.5rem;
  }
`;

const Subtitle = styled.p`
  font-size: 2.5rem;
  color: #f34900;
  margin: 0 0 24px;
  font-weight: bold;

  ${mobile} {
    font-size: 1.1rem;
    margin-bottom: 16px;
  }
`;

const Text = styled.p`
  max-width: 640px;
  margin: 0 auto 16px;
  font-weight: 900;
  font-family: 'Arial', sans-serif;
  color: #333;
  line-height: 1.6;
  font-size: 1rem;

  ${mobile} {
    font-size: 0.9rem;
    margin-bottom: 12px;
  }
`;

/** FLOOR + MOUNTAINS BACKGROUND for Mascots **/
const MascotArea = styled.div`
  position: relative;
  background:
    url('') bottom center / cover no-repeat,
    url('Nativegroup.png') bottom center / cover no-repeat;
  padding: 120px 0 40px;
  display: flex;
  justify-content: space-around;
  align-items: flex-end;
  ${mobile} {
    padding: 80px 0 20px;
  }
`;

/** MASCOT IMAGES **/
const Mascot = styled.img`
  width: 100%;
  max-width: 30%;
  z-index: 3;
  margin-bottom: -100px;
  margin-right: -300px; 
  ${mobile} {
    width: 100px;
    max-width: 100vw;
  }
  ${tablet} {
    margin-top: 150px;
    width: 200px;
    max-width: 100vw;
  }
`;

const MascotRight = styled.img`
  width: 100%;
  max-width: 30%;
  z-index: 3;
  margin-bottom: -100px;
  margin-left: -300px;
  ${mobile} {
    width: 100px;
    max-width: 100vw;
  }
  ${tablet} {
    margin-top: 150px;
    width: 200px;
    max-width: 100vw;
  }
`;
const MascotCenter = styled.img`
  width: 700px;
  height: auto;
  max-height: 1500px;
  position: relative;
  z-index: 3;
  margin-top: 0;
  margin-bottom: -100px;

  ${mobile} {
    position: absolute;
    width: 300px;
    z-index: 1;
    height: auto;
  }

  ${tablet} {
    position: absolute;
    width: 400px;
    z-index: 1;
    height: auto;
  }
`;

const TextWrapper = styled.div`
  position: relative;
  z-index: 5;               /* sits above the mascots */
  margin: 0 auto;
  max-width: 640px;
  margin-bottom: -200px;     /* pull it down over the top of the mascots */
  
  ${mobile} {
    margin-bottom: -30px;
  }
`;

const BottomOverflowImage = styled.img`
  position: relative;
  left: 51%;

  transform: translateX(-50%);
  width: 100vw;            /* full viewport width */
  display: block;
  object-fit: cover;
  margin-top: -4.5%;
  padding-bottom: 0%; /* space for mascots to sit */
  padding-top: 0; 
`;

export default function MemeLanguageSection() {
  return (
    <>
      {/* full-width red stripes */}
      <OverflowImage
        src="overflow1.png"
        alt="Decorative stripe overflow"
      />

      <Section>
        <Title>$MEMECOIN</Title>
        <Subtitle>Speaks the internet’s native language—MEMES!</Subtitle>

        <Text>
          When retail floods in, they’re not looking for whitepapers…
          They’re looking for the next Doge.
        </Text>
        <Text>
          $MEMECOIN is instantly understood, effortlessly shared, and
          emotionally resonant.
        </Text>
          <TextWrapper>
        <Text>
          It doesn’t need explaining—it just clicks.
        </Text>
          </TextWrapper>
      </Section>

      {/* three-mascot layout */}
      <MascotArea>
        <Mascot
          src="native1.png"
          alt="MemeCoin mascot on laptop, left"
        />
        <MascotCenter
          src="native2.png"
          alt="MemeCoin mascot standing, center"
        />
        <MascotRight
          src="native3.png"
          alt="MemeCoin mascot on laptop, right"
        />
      </MascotArea>
      <BottomOverflowImage
        src="subtract1.png"
        alt="Bottom decorative overflow"
      />
    </>
  );
}
