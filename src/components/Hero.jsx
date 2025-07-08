import React from "react";
import { motion } from "framer-motion";
import { FaFistRaised, FaRocket, FaStar } from "react-icons/fa";
import styled, { createGlobalStyle } from "styled-components";

const TickerStyles = createGlobalStyle`
  @keyframes scroll {
    0% { transform: translateX(0%); }
    100% { transform: translateX(-50%); }
  }
`;

const mobile = "@media (max-width: 768px)";
const large = "@media (min-width: 1500px)";
const tablet = "@media (min-width: 769px) and (max-width: 1500px)";

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
  &.logo-mobile {
    display: none;
  }
  ${mobile} {
    max-width: 100vw;
    min-width: 200px;
    width: 450px;
    margin-bottom: 200px;
    height: auto;
    &.logo-desktop {
      display: none;
    }

    &.logo-mobile {
      display: block;
      width: auto;
      max-width: 90%;
      height: auto;
    }
  }
  ${tablet} {
    max-width: 100vw;
    height: auto;
    margin: 0;
  }

  ${large} {
    max-width: 100vw;
    height: auto;
    position: absolute;
    margin: 0;
    top: 70px;
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
    width: 100px;
    font-size: 9px;
    gap: 5px;
    top: 35%;
    left: 0%;
  }
`;

const StarTag = styled(IconTag)`
  top: 50%;
  left: 32%;

  ${mobile} {
    top: 63%;
    left: 30%;
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
    top: 45%;
    left: 65%;
    width: 130px;
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
  padding-bottom: 80px;

  ${mobile} {
    height: 60px;
    padding-bottom: 50px;
  }
`;

const TickerWrapper = styled.div`
  width: 200%;
  display: flex;
`;
const TickerContent = styled.div`
  display: inline-block;
  white-space: nowrap;
  padding-left: 0;
  flex-shrink: 0;
  padding-top: 15px;
  animation: scroll 10s linear infinite;
  color: #fff;
  font-weight: bold;
  line-height: 40px;
  font-size: 40px;
  span {
    display: inline-block;
    padding-right: 50px;
  }

  ${mobile} {
    line-height: 10px;
    font-size: 30px;
    margin-top: 10px;
    height: 10px;
    animation-duration: 10s;
    span {
      padding-right: 30px;
    }
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
  border-radius: 8px;
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
    font-size: clamp(5rem, 34.5vw, 11rem);
    transform: translate(-50%, -50%) scaleY(1.7);
    white-space: normal;
  }

  ${tablet} {
    top: 80%;
    transform: none;
    white-space: normal;
  }
  ${large} {
    font-size: clamp(17.6rem, 50vw, 12rem);
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
  left: 56%;
  transform: translateX(-50%);
  z-index: 60;
  display: flex;
  gap: 16px;
  margin-left: -14%;
  width: 60%;
  height: 70px;
  padding-right: 140px;
  font-size: 20px;

  ${mobile} {
    align-items: center;
    text-align: center;
    width: 100%;
    padding-right: 10px;
    margin-right: 10px;
    margin-left: -20%;
    bottom: 25%;
    transform: translateX(-50%);
  }

  a {
    display: flex;
    align-items: center;
    gap: 8px;
    background: #fff;
    border: 2px solid #000;
    padding: 10px 10px;

    border-radius: 8px;
    font-weight: bold;
    cursor: pointer;
    width: 30%;
    margin-left: 30%;

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
      position: absolute;
      align-items: center;
      text-align: left;
      gap: 0px;
      margin-left: 0%;
      margin-bottom: 12px;
      font-family: "Arial";
      background: #fff;
      color: #000;
      border: 2px solid #000;
      border-radius: 8px;
      left: 36.5%;
      height: 51px;

      padding-right: -100px;

      font-size: 15px;
      width: 170px;

      text-decoration: none;

      img {
        width: 16px;
        height: 16px;

        margin-right: 10px;
      }
    }
  }
`;

const CopyBar = styled.div`
  position: absolute;
  bottom: 20%;
  left: 40%;
  transform: translateX(5%);
  z-index: 6;
  display: flex;
  gap: 0px;
  height: 70px;
  width: 1200px;
  margin-right: 420px;
  padding-right: 120px;
  font-size: 21px;

  ${mobile} {
    align-items: center;
    width: 71%;
    gap: 0px;
    left: 100%;
    font-size: 5px;
    bottom: 12%;
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
    border-radius: 8px;
    font-weight: bold;
    cursor: pointer;
    width: 90%;
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
      display: inline-flex;
      align-items: center;
      gap: 8px;
      font-size: 5px;

      background: #fff;
      color: #000; /* same text color */
      border: 2px solid #000; /* same border */
      border-radius: 8px;

      padding: 8px 12px;
      font-size: 12px;
      width: auto;

      top: -100px;
      justify-content: center;
      text-decoration: none;

      img {
        width: 16px;
        height: 16px;
        display: block;
      }
    }
  }
`;

const AddressContainer = styled.div`
  display: flex;
  background: #fff;
  border: 2px solid #000;
  border-radius: 8px;
  padding-right: 120px;

  overflow: hidden;
  align-items: center;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
  position: relative;
  .copy-moblie {
    display: none;
  }
  .add-moblie {
    display: none;
  }
  ${mobile} {
    display: flex;
    margin-bottom: -10px;
    width: 64%;
    overflow: hidden;
    font-size: 5px;
    white-space: nowrap;
    text-overflow: ellipsis;

    position: absolute;
    left: -51%;
    padding-right: -30px;

    .copy-moblie {
      display: block;
    }
    .add-moblie {
      display: block;
    }
    .add-desktop {
      display: none;
    }
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
  font-family: Arial;
  outline: none;
  overflow: hidden;
  font-size: 18px;
  white-space: nowrap;
  text-overflow: ellipsis;

  /* optional: hide the scrollbar but still allow scrolling */
  &::-webkit-scrollbar {
    height: 0;
    &.add-moblie {
      display: none;
    }
    ${mobile} {
      &.add-desktop {
        display: none;
      }
      &.add-moblie {
        display: block;
      }
      font-size: 5px;
      width: 100%;
      max-width: 100%;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
`;

const CopyButton = styled.button`
  background: #ff8e00;
  color: #fff;
  border: none;
  margin-top: 1%;
  margin-right: 2%;
  position: absolute;
  right: 1%;
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
  .copy-mobile {
    display: none;
  }

  ${mobile} {
    font-size: 15px;
    width: 70px;
    right: 3px;
    position: absolute;
    &.copy-desktop {
      display: none;
    }

    &.copy-mobile {
      display: flex;
      position: absolute;
      width: auto;
      max-width: 90%;
      height: auto;
    }
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
          className="logo-desktop"
        />
        <HeroImage
          src="combine.png"
          alt="MemeCoin Mascot"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="logo-mobile"
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
            <img src="header_logo2.png" alt="Buy Icon" />
            Buy $MemeCoin
          </a>
        </BuyBar>
        <CopyBar>
          <AddressContainer>
            <AddressInput
              type="text"
              value="CA: 4daoTLufDmV3ods48Zh8rymaZKBLtgEvuH9qALYLbonk"
              readOnly
              style={{ direction: "ltr" }}
              className="add-desktop"
            />
            <AddressInput
              type="text"
              value="CA: 4dao..."
              readOnly
              style={{ direction: "ltr", fontSize: "15px" }}
              className="add-moblie"
            />
            <CopyButton onClick={handleCopy} className="copy-desktop">
              Copy address
            </CopyButton>
            <CopyButton onClick={handleCopy} className="copy-moblie">
              Copy
            </CopyButton>
          </AddressContainer>
        </CopyBar>

        <TickerBar>
          <TickerWrapper>
            <TickerContent>
              <span>
                No pitch decks. No whitepapers. No complex tech. Just the most
                viral, relatable, and unstoppable narrative in crypto history
                &nbsp;&nbsp;
              </span>
              <span>
                No pitch decks. No whitepapers. No complex tech. Just the most
                viral, relatable, and unstoppable narrative in crypto history
                &nbsp;&nbsp;
              </span>
            </TickerContent>
          </TickerWrapper>
        </TickerBar>
      </HeroSection>
    </>
  );
}
