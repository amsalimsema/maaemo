import React from 'react'
import styled from 'styled-components'
import Container from 'react-bootstrap/Container'

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { Bg } from './Global'
import consulting from '../Images/pattern.svg'
import aisha from '../Images/aisha.jpg'
import landing from '../Images/about.jpg'

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
const ImgBox = styled.div`
  @media only screen and (max-width: 768px) {
    padding-top: 1rem;
  }
`
const Box = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`
const PicOne = styled.img`
  margin: 0.5rem;
  background-image: url(${aisha});
  background-position: center center;
  background-size: cover;
  height: 8rem;
  width: 8rem;
  border-radius: 50%;
`
const PicTwo = styled.img`
  margin: 0.5rem;
  left: 10.5rem;
  background-image: url(${landing});
  background-position: center center;
  background-size: cover;
  height: 10rem;
  width: 10rem;
  border-radius: 50%;
`
const PicThree = styled.img`
  margin: 0.5rem;
  top: 11rem;
  background-image: url(${landing});
  background-position: center center;
  background-size: cover;
  height: 14rem;
  width: 14rem;
  border-radius: 50%;
`
const PicFour = styled.img`
  margin: 0.5rem;
  top: 15rem;
  left: 15.5rem;
  background-image: url(${landing});
  background-position: center center;
  background-size: cover;
  height: 7rem;
  width: 7rem;
  border-radius: 50%;
`

export default function Sustainability() {
  return (
    <>
      <Main>
        <Wrap>
          <Row>
            <Col md={6}>
              <h1 style={{ color: '#182330' }}>SUSTAINABILITY</h1>
              <p style={{ fontSize: '1.125rem', color: '#182330' }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
                fugit adipisci nesciunt aliquid reiciendis nisi facere quae.
                Aspernatur, ipsa voluptatibus!. Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Animi fugit adipisci nesciunt
                aliquid reiciendis nisi facere quae. Aspernatur, ipsa
                voluptatibus.
              </p>
              <p style={{ fontSize: '1.125rem', fontWeight: 'bold' }}>
                Educate
                <br />
                <span style={{ fontWeight: 'normal' }}>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Provident, rem.sit amet consectetur adipisicing elit.
                </span>
              </p>
              <p style={{ fontSize: '1.125rem', fontWeight: 'bold' }}>
                Reduce,&nbsp;Reuse,&nbsp;Recycle
                <br />
                <span style={{ fontWeight: 'normal' }}>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Provident, rem.sit amet consectetur adipisicing elit.
                </span>
              </p>
              <p style={{ fontSize: '1.125rem', fontWeight: 'bold' }}>
                Choose Sustainable
                <br />
                <span style={{ fontWeight: 'normal' }}>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Provident, rem.sit amet consectetur adipisicing elit.&nbsp;
                </span>
                <span style={{ fontWeight: 'normal', fontSize: '0.8rem' }}>
                  <a
                    href="/"
                    style={{
                      textDecoration: 'none',
                      color: '#182330',
                      fontWeight: 'bold',
                    }}
                  >
                    CONTACT US
                  </a>
                </span>
              </p>
            </Col>
            <Col md={6}>
              <ImgBox>
                <Box>
                  <PicOne />
                  <PicTwo />
                </Box>
                <Box>
                  <PicThree />
                  <PicFour />
                </Box>
              </ImgBox>
            </Col>
          </Row>
        </Wrap>
      </Main>
    </>
  )
}
