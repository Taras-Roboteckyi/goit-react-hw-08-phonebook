import styled from 'styled-components';
import img from '../../images/bookPhone.jpg';

export const Container = styled.div`
  /*  padding-bottom: 30px; */
  /* margin: 0, auto;
  padding-top: 30px;
  height: 320px; */
  /*  background-image: url(${img});

  background-repeat: no-repeat;
  background-size: 240px 320px;

  @-moz-document url-prefix() {
    background-image: url(${img});

    background-repeat: no-repeat;
    background-size: 210px 320px;
  } */
  /*  display: flex;
  justify-content: space-between;
  align-items: center; */
  box-shadow: 0 0 4px 0 rgb(0 0 0 / 20%);
  max-width: 1024px;
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 30px;
`;

export const HeroText = styled.h1`
  font-size: 18px;
  font-weight: 500;
  padding-bottom: 30px;
  padding-top: 30px;
`;

export const Section = styled.section`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const Text = styled.h2`
  color: white;
  font-size: 150px;
  position: relative;
  z-index: 11;
  mix-blend-mode: overlay;
  text-shadow: 5px 5px 5px yellow;
`;

export const VideoHero = styled.video`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Footer = styled.footer`
  width: 100%;
  background-color: #f7f7f7;

  bottom: 0;
  left: 0;
`;
export const FooterContainer = styled.div`
  padding-top: 29px;
  padding-bottom: 29px;
  display: grid;
  align-items: center;
  justify-items: center;
`;
export const FooterText = styled.p`
  padding-top: 29px;
  padding-bottom: 29px;
  display: grid;
  align-items: center;
  justify-items: center;
  font-size: 18px;
  font-weight: 500;
`;
