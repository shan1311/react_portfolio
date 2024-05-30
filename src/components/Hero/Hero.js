import React, { useState } from "react";
import Dropdown from "../Dropdown/Dropdown";
import Header from "../Header/Header";
import img1 from '../../Assets/front.png';
import Type from './type';
import {
  HeroContainer,
  HeroWrapper,
  HeroLeft,
  HeroRight,
  ImageContainer,
  Img1,
  ScrollDown,
  ScrollLink,
} from "./HeroElements";
function Hero() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <main>
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Header toggle={toggle} />
      <HeroContainer>
        <HeroWrapper>
        <HeroRight>
            <h1>Hi, I'm shan</h1>
            <h5><Type/></h5>
            <p>
            Let's shape your Digital journey
            </p>
          </HeroRight>
          <HeroLeft>
          <ImageContainer>
        <Img1 src={img1} alt="Sample" />
      </ImageContainer>

          </HeroLeft>
        </HeroWrapper>
        <ScrollDown to="projects">
          <ScrollLink>
            Scroll down
            <img
              src="https://raw.githubusercontent.com/gurupawar/website/main/src/Assets/scroll-down.svg"
              alt="scroll-down"
            />
          </ScrollLink>
        </ScrollDown>
      </HeroContainer>
    </main>
  );
}

export default Hero;
