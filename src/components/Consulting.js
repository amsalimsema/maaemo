import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import { BsArrowRight } from 'react-icons/bs'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import strip from '../Images/ConsultStrip.jpg'
import { Bg } from './Global'
import consulting from '../Images/pattern.svg'

const Main = styled(Bg)`
  background-image: url(${consulting});
  background-color: #182330;
  height: auto;
`
const Wrap = styled(Container)`
  padding: 2.3rem 0rem;
  width: 80vw;
  @media only screen and (max-width: 768px) {
    width: 95vw;
  }
`
const Box = styled.div`
  background-color: #b7b6a3;
  border-bottom-right-radius: 0.3rem;
  border-bottom-left-radius: 0.3rem;
  @media only screen and (max-width: 650px) {
    margin-bottom: 1rem;
  }
`
const LinkCons = styled(Link)`
  color: #fff;
  transition: 0.8s ease-in-out;
  &:hover {
    color: #c87f2a;
    text-decoration: none;
  }
`

export default function Consulting() {
  return (
    <>
      <Main>
        <Wrap>
          <section className="text-center text-white">
            <h1>CONSULTING</h1>
            <p
              style={{
                fontSize: '1.125rem',
                paddingTop: '1rem',
                paddingBottom: '0.8rem',
              }}
            >
              We help you generate the energy, speed and direction your
              organization
              <br />
              needs to break free from the forces holding you back.
            </p>
          </section>
          <Row>
            <Col md={6}>
              <img src={strip} alt="consulting" className="w-100" />
              <Box>
                <div className="pt-4 pb-3 px-4">
                  <section style={{ fontSize: '1.125rem' }}>
                    <p style={{ color: '#182330', fontWeight: 'bold' }}>
                      COMMITTED TO CREATING CHANGE
                    </p>

                    <p>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Magni temporibus aut nam omnis ad nesciunt, quo fuga
                      blanditiis debitis veniam.Magni temporibus aut nam omnis
                      ad nesciunt, quo fuga blanditiis debitis veniam.
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Temporibus excepturi deleniti odio?
                    </p>
                  </section>
                  <LinkCons to="/">
                    <p>
                      Learn More About Our Work
                      <span>
                        &nbsp;&nbsp;
                        <BsArrowRight />
                      </span>
                    </p>
                  </LinkCons>
                </div>
              </Box>
            </Col>
            <Col md={6}>
              <img src={strip} alt="consulting" className="w-100" />
              <Box>
                <div className="pt-4 pb-3 px-4">
                  <section style={{ fontSize: '1.125rem' }}>
                    <p style={{ color: '#182330', fontWeight: 'bold' }}>
                      INVESTMENT ADVISORY GROUP
                    </p>

                    <p>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Magni temporibus aut nam omnis ad nesciunt, quo fuga
                      blanditiis debitis veniam.Magni temporibus aut nam omnis
                      ad nesciunt, quo fuga blanditiis debitis veniam.
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Temporibus excepturi deleniti odio?
                    </p>
                  </section>
                  <LinkCons to="/">
                    <p>
                      Join Advisory Group
                      <span>
                        &nbsp;&nbsp;
                        <BsArrowRight />
                      </span>
                    </p>
                  </LinkCons>
                </div>
              </Box>
            </Col>
          </Row>
        </Wrap>
      </Main>
    </>
  )
}
