import React from "react";
import { motion } from "framer-motion";
import { FaFistRaised, FaRocket, FaStar } from "react-icons/fa";
import styled, { createGlobalStyle } from "styled-components";

const TickerStyles = createGlobalStyle`
  @keyframes scroll {
    0% { transform: translateX(100%); }
    100% { transform: translateX(-100%); }
  }
`;

const mobile = "@media (max-width: 768px)";
const tablet = "@media (min-width: 769px) and (max-width: 1280px)";

const HeroSection = styled.section`
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  color: #fff;

  background: url("placeholder-background.png") no-repeat center center;
  background-size: cover;

  ${mobile} {
    height: auto;
    /* padding: 60px; */
    height: 700px;
    overflow: auto;
  }
  ${tablet} {
    height: auto;
    padding: 60px 0 100px;
    height: 1050px;
    overflow: auto;
  }
`;

const ArcText = styled.svg`
  position: absolute;
  top: 120px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 67;
  width: 80%;
  max-width: 2600px;
  ${mobile} {
    top: 80px;
    width: 90%;
  }
`;
const Rays = styled(motion.img)`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 3;
  pointer-events: none;
`;
const MountainFrame = styled(motion.img)`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: 2;
`;

const HeroImage = styled(motion.img)`
  position: relative;
  z-index: 3;
  width: 1000px;
  height: 100%;
  max-width: 35%;
  margin-bottom: 110px;
  ${mobile} {
    max-width: 100vw;
    min-width: 200px;
    width: 450px;
    margin-bottom: 200px;
    height: auto;
  }
  ${tablet} {
    max-width: 100vw;
    height: auto;
    margin: 0;
  }
`;

const IconTag = styled(motion.div)`
  position: absolute;
  background: #ff8e00;
  border-radius: 8px;
  width: 100px;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  pointer-events: auto;
  rotate: -18deg;
  top: 20%;
  left: 25%;
  z-index: 40;
  ${mobile} {
    font-size: 12px;
    padding: 4px 8px;
    border: 2px;
    width: 70px;
    font-size: 9px;
    gap: 5px;
    left: 5%;
  }
`;

const StarTag = styled(IconTag)`
  top: 50%;
  left: 32%;

  ${mobile} {
    left: 2%;
  }
`;

const RocketTag = styled(IconTag)`
  color: #fff;
  width: 150px;
  height: 45px;
  box-shadow: 0 0 8px rgba(255, 140, 0, 0.6);
  rotate: 5deg;
  top: 25%;
  left: 70%;
  ${mobile} {
    left: 65%;
    width: 110px;
  }
`;
const TickerBar = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  background: #ff8e00;
  overflow: hidden;
  height: 60px;
  z-index: 6;

  ${mobile} {
    height: 60px;
  }
`;

const TickerContent = styled.div`
  display: inline-block;
  white-space: nowrap;
  padding-left: 0;
  padding-top: 15px;
  animation: scroll 20s linear infinite;
  color: #fff;
  font-weight: bold;
  line-height: 40px;
  font-size: 40px;

  ${mobile} {
    line-height: 40px;
    font-size: 20px;
    animation-duration: 20s;
  }
`;
const TagContainer = styled.div`
  position: relative;
  z-index: 6;
  display: flex;
  gap: 16px;
  margin-bottom: 24px;
`;
const Tag = styled(motion.span)`
  background: rgba(255, 140, 0, 0.9);
  color: #fff;
  padding: 6px 12px;
  font-size: 14px;
  border-radius: 16px;
  font-weight: bold;
`;

const Title = styled(motion.h1)`
  position: absolute;
  top: 54%;
  left: -2%;
  width: 100%;
  transform: translate(-10%, -10%) scaleY(0.1);
  transform-origin: center center;
  text-align: center;
  z-index: 5;
  font-size: 18.7vw;
  white-space: nowrap;
  margin: 0;
  letter-spacing: 0;
  color: #000;
  pointer-events: none;

${mobile} {
    top: 75%;
    font-size: clamp(5rem, 34.5vw, 11rem); /* bigger on small screens */
    transform: translate(-50%, -50%) scaleY(1.7);  /* normal height */
    white-space: normal;            /* allow wrapping if needed */
  }

  ${tablet} {
    top: 80%;
    transform: none;
    white-space: normal;
  }
`;

const TitleWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: -2%;
  transform: translate(-50%, -50%) scaleY(0.5);
  transform-origin: center center;
  width: 100%;
  text-align: center;
  z-index: 5;
`;

const BuyBar = styled.div`
  position: absolute;
  bottom: 20%;
  left: 50%;
  transform: translateX(-50%);
  z-index: 6;
  display: flex;
  gap: 16px;

   ${mobile} {
    align-items: center;       /* center each button */
    width: 70%;                /* take up most of the screen */
    gap: 50px;                 /* space between buy & copy */
    bottom: 12%;               /* if you want it a bit higher/lower */
    transform: translateX(-50%);
  }

  a {
    display: flex;
    align-items: center;
    gap: 8px;
    background: #fff;
    border: 2px solid #000;
    padding: 0px 0px;
    padding-left: 5px;
    border-radius: 16px;
    font-weight: bold;
    cursor: pointer;
    width: 30%;
    margin-left: 1%;
    text-decoration: none;
    color: black;

    img {
      width: 24px;
      height: 24px;
    }

    ${mobile} {
      display: none;
    }
  }

  a.mobile-button-buy {
    display: none;
    ${mobile} {
      display: flex;
      
      background: #ff8e00;
      color: #fff;
      border: none;
      padding: 15px 16px;
      border-radius: 8px;
      font-weight: bold;
      cursor: pointer;
      width: 100%;
      font-size: 12px;
      justify-content: center;
      align-items: center;
    }
  }

  .mobile-button-copy {
    display: none;
    ${mobile} {
      
      display: flex;
      background: #ff8e00;
      color: #fff;
      border: none;
      padding: 15px 16px;
      border-radius: 8px;
      font-weight: bold;
      cursor: pointer;
      width: 350px;
      font-size: 12px;
      justify-content: center;
      align-items: center;
      position: relative;
    }
  }
`;

const AddressContainer = styled.div`
  display: flex;
  background: #fff;
  border: 2px solid #000;
  border-radius: 16px;
  overflow: hidden;
  align-items: center;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
  position: relative;

  ${mobile} {
    display: none;
  }
`;

const AddressLabel = styled.span`
  padding: 14px 20px;
  background: #f7f7f7;
  font-weight: bold;
`;

const AddressInput = styled.input`
  border: none;
  padding: 14px;
  font-weight: bold;
  width: 320px;
  font-family: monospace;
  outline: none;

  ${mobile} {
    font-size: 10px;
    width: 100%;
  }
`;

const CopyButton = styled.button`
  background: #ff8e00;
  color: #fff;
  border: none;
  margin-top: 1%;
  margin-right: 2%;
  padding: 2px 5px;
  height: 80%;
  width: 110px;
  margin-bottom: 10px;
  margin-top: 10px;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.3s;
  &:hover {
    background: #e07b00;
  }

  ${mobile} {
    margin: 0;
    font-size: 8px;
    width: 80px;
    right: 10px;

    position: absolute;
  }
`;
const MobileHide = styled.span`
  ${mobile} {
    display: none;
  }
`;
export default function Hero() {
  const handleCopy = () => {
    const fullValue = "CA: 4daoTLufDmV3ods48Zh8rymaZKBLtgEvuH9qALYLbonk";
    const addressOnly = fullValue.split("CA:")[1]?.trim(); // gets the part after "CA: "
    if (addressOnly) {
      navigator.clipboard.writeText(addressOnly).then(() => {
        alert("Address copied: " + addressOnly);
      });
    }
  };
  const iconBounce = {
    animate: { y: [0, -10, 0] },
    transition: { repeat: Infinity, duration: 3, ease: "easeInOut" },
  };
  const rocketBounce = {
    animate: { y: [0, -15, 0] },
    transition: { repeat: Infinity, duration: 2.5, ease: "easeInOut" },
  };

  return (
    <>
      <TickerStyles />
      <HeroSection>
        <Rays
          src="rays.png"
          alt="Rays Overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        />
        <MountainFrame
          src="mountain.png"
          alt="Mountain Frame"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        />
        <HeroImage
          src="combine.png"
          alt="MemeCoin Mascot"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />

        <IconTag {...iconBounce} whileHover={{ scale: 1.2 }}>
          <FaFistRaised size={20} />
          HODL
        </IconTag>
        <RocketTag {...rocketBounce} whileHover={{ scale: 1.3 }}>
          <FaRocket size={20} />
          TO THE MOON
        </RocketTag>
        <StarTag {...iconBounce} whileHover={{ scale: 1.2 }}>
          <FaStar size={20} />
          WAGMI
        </StarTag>
        <Title
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1 }}
        >
          MEME<MobileHide>COIN</MobileHide>
        </Title>
        <BuyBar>
          <a
            href="https://raydium.io/swap/?outputMint=4daoTLufDmV3ods48Zh8rymaZKBLtgEvuH9qALYLbonk&inputMint=sol"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="header_logo2.png" alt="Buy Icon" />
            Buy $MemeCoin
          </a>

          <a
            href="https://raydium.io/swap/?outputMint=4daoTLufDmV3ods48Zh8rymaZKBLtgEvuH9qALYLbonk&inputMint=sol"
            target="_blank"
            rel="noopener noreferrer"
            className="mobile-button-buy"
          >
            Buy Now
          </a>

          <AddressContainer>
            <AddressInput
              type="text"
              value="CA: 4daoTLufDmV3ods48Zh8rymaZKBLtgEvuH9qALYLbonk"
              readOnly
            />
            <CopyButton onClick={handleCopy}>Copy address</CopyButton>
          </AddressContainer>
          <CopyButton className="mobile-button-copy" onClick={handleCopy}>
            Copy address
          </CopyButton>
        </BuyBar>
        <TickerBar>
          <TickerContent>
            No pitch decks. No whitepapers. No complex tech. Just the mostviral,
            relatable, and unstoppable narrative in crypto history &nbsp;{" "}
          </TickerContent>
        </TickerBar>
      </HeroSection>
    </>
  );
}
