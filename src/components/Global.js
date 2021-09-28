import styled from 'styled-components'
import landing from '../images/hero.jpg'

export const Container = styled.div`
  z-index: 1;
  width: 80vw;
  margin-right: 10vw;
  margin-left: 10vw;
`
export const Bg = styled.div`
  background-image: url(${landing});
  height: 50vh;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  transition: all 0.8s ease-in-out;
  //   filter: grayscale(1);
  @media only screen and (max-width: 600px) {
    // filter: grayscale(1);
  }
`
