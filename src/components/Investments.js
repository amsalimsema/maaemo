import React from 'react'
import styled from 'styled-components'
import Container from 'react-bootstrap/Container'

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { Bg } from './Global'
import consulting from '../Images/pattern.svg'
import play from '../Images/play.png'

const Main = styled(Bg)`
  background-image: url(${consulting});
  background-color: #b7b6a3;
  height: auto;
`
const Wrap = styled(Container)`
  padding: 2.3rem 0rem;
  width: 80vw;
  @media only screen and (max-width: 768px) {
    width: 95vw;
  }
`
const Info = styled.div`
  text-align: end;
  padding-left: 5rem;
  @media only screen and (max-width: 768px) {
    padding-left: 1rem;
  }
`
const Btn = styled.button`
  background-color: #182330;
  color: #fff;
  padding: 0.7rem 2rem;
  border-radius: 2rem;
  border: solid transparent;
  transition: 1s all linear;
  &:hover {
    background-color: transparent;
    color: #182330;
    border: solid #c87f2a;
  }
`
const ImgBox = styled.div`
  background-image: url(${play});
  background-position: center center;
  background-size: cover;
  background-repeat: no repeat;
  height: 100%;
  border-radius: 1rem;
  @media only screen and (max-width: 600px) {
    height: 60vh;
    margin-bottom: 1.2rem;
  }
`
export default function Investments() {
  return (
    <>
      <Main>
        <Wrap>
          <Row>
            <Col md={6}>
              <ImgBox />
            </Col>
            <Col md={6}>
              <Info>
                <h1 style={{ color: '#182330' }}>INVESTMENTS</h1>
                <p style={{ fontSize: '1.125rem', color: '#182330' }}>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Nostrum quia nobis culpa nam provident quis asperiores
                  perspiciatis et esse non.culpa nam provident quis asperiores
                </p>
                <p style={{ fontSize: '1.125rem' }}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
                  fugit adipisci nesciunt aliquid reiciendis nisi facere quae.
                  Aspernatur, ipsa voluptatibus!. Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Animi fugit adipisci nesciunt
                  aliquid reiciendis nisi facere quae. Aspernatur, ipsa
                  voluptatibus.
                </p>

                <a
                  href="/"
                  style={{
                    textDecoration: 'none',
                  }}
                >
                  <Btn>Contact us</Btn>
                </a>
              </Info>
            </Col>
          </Row>
        </Wrap>
      </Main>
    </>
  )
}
