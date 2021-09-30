import styled from 'styled-components'
import { Link } from 'react-router-dom'
//import Button from 'react-bootstrap/Button'
import landing from '../Images/landingHero.jpg'
import landingMob from '../Images/landingMob.jpg'

// general link

export const GenLink = styled(Link)`
  color: #885c44;
  text-decoration: none;
  padding: 0rem 0rem;
  &:hover {
    text-decoration: none;
    color: #885c44;
    border-bottom: 3px solid #885c44;
  }
`

// background attributes for hopes
export const Bg = styled.div`
  background-image: url(${landing});
  height: 50vh;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  transition: all 0.8s ease-in-out;
  //   filter: grayscale(1);
  @media only screen and (max-width: 1024px) {
    // filter: grayscale(1);
    background-image: url(${landingMob});
  }
`

// used in nav and navelements for hopes

export const Container = styled.div`
  z-index: 1;
  width: 80vw;
  margin-right: 10vw;
  margin-left: 10vw;
`

// landing button for maaemo
export const LandingBtn = styled.button`
  padding: 0.7rem 1rem;
  width: 200px;
  margin: 6rem 0.7rem;
  background-color: transparent;
  border-color: inherit;
  border: 3px solid #fff;
  color: #fff;
  font-size: 1.5rem;
  border-radius: 0.3rem;
  transition: 0.8s ease-in-out;
  &:hover {
    color: #c87f2a;
    border-color: #c87f2a;
  }

  @media only screen and (max-width: 1024px) {
    border-radius: 0.3rem;
    font-size: 1.3rem;
    padding: 0.5rem;
    margin: 1.1rem 0rem 0rem 0rem;
    width: 100%;
    transition: 0.8s ease-in-out;
  }
`
