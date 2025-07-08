import React from "react";
import styled from "styled-components";
import { FaTelegramPlane, FaDiscord } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const mobile = "@media (max-width: 768px)";
const tablet = "@media (min-width: 769px) and (max-width: 1280px)";

const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 32px;
  background: #fff;
  border-bottom: 0px solid #000;
  position: fixed;
  width: 100%;             
  z-index: 1000;      
  top: 0;
  
`;

const NavLinks = styled.div`
  display: flex;
  gap: 24px;
  > a {
    font-weight: bold;
    color: #000;
    text-decoration: none;
  }

  ${mobile} {
    display: none;
  }
`;
const BrandLink = styled.a`
  display: flex;
  align-items: center;
  gap: 8px;
  text-decoration: none;
`;

const Logo = styled.img`
  height: 40px;
  ${mobile} {
    width: 30px;
    height: auto;
  }
`;

const BrandText = styled.span`
  font-size: 24px;
  font-weight: bold;
  color: #000;

  ${mobile} {
    font-size: 18.5px;
  }
`;
const Icons = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;
const IconWrapper = styled.div`
  border: 2px solid #000;
  border-radius: 50%;

  a {
    height: auto;
    text-decoration: none;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    height: auto;
    color: black;
    padding: 8px;
    border-radius: 50%;
  }
  ${mobile} {
    display: none;
  }
`;
const BuyButton = styled.button`
  background: #ff8e00;
  color: #fff;
  border: none;
  padding: 15px 16px;
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;

  a {
    text-decoration: none;
    color: inherit;
  }
    ${mobile} {
    padding: 15px 16px;
    width: 114px;
    height: 43px;
  }
`;

export default function Navbar() {
  return (
    <Nav>
      <NavLinks>
        <a href="#whitepaper">Whitepaper</a>

        <a href="#dapp">dApp</a>
      </NavLinks>
      <BrandLink href="/">
        <Logo src="header_logo2.png" alt="MemeCoin Logo" className="logo-desktop" />
        
        <BrandText>MEMECOIN</BrandText>
      </BrandLink>
      <Icons>
        <IconWrapper>
          <a
            href="https://x.com/thememecoincult?s=09"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTelegramPlane size={20} />
          </a>
        </IconWrapper>
        <IconWrapper>
          <a
            href="https://x.com/thememecoincult?s=09"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaXTwitter size={20} />
          </a>
        </IconWrapper>
        <IconWrapper>
          <a
            href="https://x.com/thememecoincult?s=09"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaDiscord size={20} />
          </a>
        </IconWrapper>
        <BuyButton>
          <a
            href="https://raydium.io/swap/?outputMint=4daoTLufDmV3ods48Zh8rymaZKBLtgEvuH9qALYLbonk&inputMint=sol"
            target="_blank"
            rel="noopener noreferrer"
          >
            BUY NOW
          </a>
        </BuyButton>
      </Icons>
    </Nav>
  );
}
