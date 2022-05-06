import React from 'react';
import { Outlet } from 'react-router-dom';
import {
  Container,
  HeroText,
  Section,
  Text,
  VideoHero,
  Footer,
  FooterContainer,
  FooterText,
} from './HomeView.styled';
import video from '../../video/fire.mp4';

export const HomeView = () => (
  <>
    <Outlet />
    <Container>
      <HeroText>
        We are glad to welcome you to our application, where you can have a good time and create
        your own phone book. Your contacts will be stored in our application, so you can not worry
        about losing them. Register or log in and get full access to our application.😊
      </HeroText>
      <Section>
        <Text>Get Started!</Text>
        <VideoHero loop autoPlay>
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </VideoHero>
      </Section>
    </Container>
    <Footer>
      <FooterContainer>
        <FooterText>© 2022 | All Rights Reserved | Developed with by GoIT Students</FooterText>
      </FooterContainer>
    </Footer>
  </>
);
