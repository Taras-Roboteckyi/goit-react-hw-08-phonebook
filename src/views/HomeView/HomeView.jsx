import React from 'react';

import { Outlet } from 'react-router-dom';
//import ReactPlayer from 'react-player/lazy';
//import VideoPlayer from 'react-video-js-player';

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

export const HomeView = () => {
  return (
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
          {
            <VideoHero loop autoPlay>
              <source src={video} type="video/mp4" />
              Your browser does not support the video tag.
            </VideoHero>
          }
          {/*  <VideoPlayer
            controls={false}
            src={video}
            poster={}
            width="720"
            height="420"
            onReady={this.onPlayerReady.bind(this)}
          /> */}
          {/*  {isSSR && (
            <ReactPlayer
              playing={true}
              loop={true}
              muted={true}
              stopOnUnmount={false}
              url={video}
            />
          )} */}
          {/*   <ReactPlayer
            className="react-player"
             playing={true}
            loop={true}
            url={video}
            width="100%"
            height="100%"
            muted={true}
            stopOnUnmount={false}
          /> */}
        </Section>
      </Container>
      <Footer>
        <FooterContainer>
          <FooterText>© 2022 | All Rights Reserved | Developed with by GoIT Students</FooterText>
        </FooterContainer>
      </Footer>
    </>
  );
};
