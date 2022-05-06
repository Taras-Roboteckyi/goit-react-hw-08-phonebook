import createGlobalStyle from 'styled-components';
import styled from 'styled-components';
import imgBG from './images/bookPhone.jpg';

export const GlobalStyles = createGlobalStyle.div`
  /*-----Скидування стилів------*/

  html {
    box-sizing: border-box;

    
  }
  a {
    text-decoration: none;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    margin-top: 0;
    margin-bottom: 0;
  }
  ul,
  ol {
    /* list-style: none; */
    margin-top: 0;
    margin-bottom: 0;
  }
  img {
    display: block;
    max-width: 100%;
    object-fit: cover;
  }
  /*-------------Body--------------*/
  body {
        background-color: #e6e6e6;
    width: 100%;
    height: 100%;
    min-height: 100vh;
  }
  display: flex;
  flex-direction: column;
  align-items: center;
  /* background-image: url(${imgBG}); */
  /* background-size: cover; */
  
`;

export const DownloadText = styled.p`
  font-size: 24px;
  font-weight: 400;
  padding-top: 200px;
`;
