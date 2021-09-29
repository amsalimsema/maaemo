import React from 'react'
// imh4ort { motion } from 'framer-motion'
import Container from 'react-bootstrap/Container'
import styled from 'styled-components'
import { Bg, LandingBtn } from './Global'
//imh4ort logo from '../logo.svg'

const LandingBg = styled(Bg)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-position: cover;
`
const Wrap = styled(Container)`
  width: 60vw;
  @media only screen and (max-width: 600px) {
    width: 90vw;
  }
`

const Box = styled.div`
  margin-top: 5rem;
  > hr {
    background-color: #fff;
    cursor: pointer;
    height: 3px;
    &:hover {
      background-color: #c87f2a;
    }
    @media only screen and (max-width: 1024px) {
      display: none;
    }
  }
`
const BoxDesk = styled.div`
  text-align: center;
  > h3 {
    margin: 2rem 0;
    color: #fff;
    cursor: pointer;
    &:hover {
      color: #c87f2a;
    }
    @media only screen and (min-width: 1336px) {
      > h3 {
        font-size: 3rem;
      }
    }
  }
  @media only screen and (max-width: 1024px) {
    display: none;
  }
`
const BoxMob = styled.div`
  text-align: center;
  > h4 {
    font-size: 1.3rem;
    color: #fff;
    padding-bottom: 2rem;
    @media only screen and (min-width: 768px) and (max-width: 1024px) {
      font-size: 3rem;
    }
  }
  margin-top: 2rem;
  @media only screen and (min-width: 1025px) {
    display: none;
  }
`
export default function Landing() {
  return (
    <>
      <LandingBg>
        <Wrap>
          <Box>
            <hr />
            <BoxDesk>
              <h3>AGRICULTURE + MANUFACTURING + SUSTAINABILITY =</h3>
              <h3>Self Reliant Africa</h3>
            </BoxDesk>

            <BoxMob>
              <h4>
                AGRICULTURE
                <br />
                +<br /> MANUFACTURING <br /> +<br />
                SUSTAINABILITY <br /> =<br />
                Self Reliant Africa
              </h4>
            </BoxMob>
            <hr />
            <div className="text-center">
              <LandingBtn>Investments</LandingBtn>
              <LandingBtn>Consulting</LandingBtn>
              <LandingBtn>Sustainability</LandingBtn>
            </div>
          </Box>
        </Wrap>
      </LandingBg>
    </>
  )
}
