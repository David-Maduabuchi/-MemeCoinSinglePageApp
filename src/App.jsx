import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StatsSection from './components/StatsSection';
import NativeLanguage from './components/NativeLanguage';
import HowToBuySection from './components/HowToBuySection'; 
import FooterSection from './components/FooterSection';

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after { box-sizing: border-box; }
  body, html {
    margin: 0;
    padding: 0;
    overflow-x: hidden;
    font-family: Arial, Helvetica, sans-serif;
    background-color: #fff;
  }
`;

const Main = styled.div`
  width: 100%;
`;

export default function App() {
  return (
    <Main>
      <GlobalStyle />
      <Navbar />
      <Hero />
      <NativeLanguage />
      <StatsSection />
      <HowToBuySection />
      <FooterSection />
    </Main>
  );
}