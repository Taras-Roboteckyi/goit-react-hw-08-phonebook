import styled from 'styled-components';
import img from '../../images/bookPhone.jpg';

export const Container = styled.div`
  /*  padding-bottom: 30px; */
  /* margin: 0, auto;
  padding-top: 30px;
  height: 320px; */
  background-image: url(${img});

  background-repeat: no-repeat;
  /* background-size: 240px 320px; */

  @-moz-document url-prefix() {
    background-image: url(${img});

    background-repeat: no-repeat;
    /* background-size: 210px 320px; */
  }
`;
