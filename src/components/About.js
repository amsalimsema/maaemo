import React from 'react'
import styled from 'styled-components'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import landing from '../Images/about.jpg'
import strip from '../Images/heroStrip.jpg'

const Box = styled.div`
  background-color: #fff3eb;
`

const Wrap = styled(Container)`
  width: 80vw;
  padding: 2rem 0;

  @media only screen and (max-width: 767px) {
    width: 95vw;
  }
`
const WrapImg = styled.div`
  @media only screen and (min-width: 768px) and (max-width: 1024px) {
    display: none;
  }
`
const WrapInfo = styled.div`
  text-align: end;
  padding-left: 2rem;
  > p {
    font-size: 1.2rem;
  }
  @media only screen and (max-width: 767px) {
    padding: 0rem 0.1rem 0 0.1rem;
  }
  @media only screen and (min-width: 768px) and (max-width: 1024px) {
    display: none;
  }
`
const Strip = styled.div`
  > p {
    font-size: 1.2rem;
  }
  @media only screen and (max-width: 767px) {
    display: none;
  }
  @media only screen and (min-width: 1025px) {
    display: none;
  }
`

export default function About() {
  return (
    <>
      <Box>
        <Wrap>
          <Row>
            <Col md={6}>
              <WrapImg>
                <img src={landing} alt="about us" className="w-100 rounded " />
              </WrapImg>
            </Col>

            <Col md={6}>
              <WrapInfo>
                <h1 style={{ color: '#110447' }}>ABOUT US</h1>
                <h3>Working towards</h3>
                <h3>A SELF RELIENT AFRICA</h3>
                <p>
                  Meet people using Android to change what's possible in daily
                  life.Watch and read stories about creative, driven people
                  discovering how to make their world more colorful and
                  connected. With Android by their side.
                </p>
                <p>
                  Meet people using Android to change what's possible in daily
                  life.Watch and read stories about creative, driven people
                  discovering how to make their world more colorful and
                  connected. With Android by their side.
                </p>
                <p>
                  Meet people using Android to change what's possible in daily
                  life.Watch and read stories about creative, driven people
                  discovering how to make their world more colorful and
                  connected. With Android by their side.
                </p>
              </WrapInfo>
            </Col>
          </Row>
          <Strip>
            <p>
              <img src={strip} alt="about us" className="w-100 rounded" />
            </p>
            <h1 style={{ color: '#110447' }}>ABOUT US</h1>
            <h3>Working towards</h3>
            <h3>A SELF RELIENT AFRICA</h3>
            <p>
              Meet people using Android to change what's possible in daily
              life.Watch and read stories about creative, driven people
              discovering how to make their world more colorful and connected.
              With Android by their side.
            </p>
            <p>
              Meet people using Android to change what's possible in daily
              life.Watch and read stories about creative, driven people
              discovering how to make their world more colorful and connected.
              With Android by their side.
            </p>
            <p>
              Meet people using Android to change what's possible in daily
              life.Watch and read stories about creative, driven people
              discovering how to make their world more colorful and connected.
              With Android by their side.
            </p>
          </Strip>
        </Wrap>
      </Box>
    </>
  )
}
