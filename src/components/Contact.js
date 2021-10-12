import React from 'react'
import styled from 'styled-components'
import Container from 'react-bootstrap/Container'

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { Bg } from './Global'
import consulting from '../Images/pattern.svg'

const Main = styled(Bg)`
  background-image: url(${consulting});
  background-color: #182330;
  height: auto;
`
const Wrap = styled(Container)`
  padding: 4rem 0rem 0rem 0rem;
  width: 80vw;
  @media only screen and (max-width: 768px) {
    width: 95vw;
  }
`
const Info = styled.div`
  color: #fff;
  font-size: 1.125rem;
  > p {
    &:hover {
      color: gray;
    }
  }
  @media only screen and (max-width: 650px) {
    margin-bottom: 2rem;
    text-align: center;
  }
`
const FormWrap = styled.div`
  background-color: #000000;
  @media only screen and (max-width: 650px) {
    background-color: transparent;
  }
`
const Form = styled.input`
  width: 100%;
  margin-bottom: 2rem;
  height: 2.5rem;
  border-radius: 0.2rem;
  border: none;
  &:focus {
    outline: none;
  }
`
const FormArea = styled.textarea`
  width: 100%;
  height: 120px;
  border-radius: 0.2rem;
  border: none;
  &:focus {
    outline: none;
  }
`
const Btn = styled.button`
  background-color: #b7b6a3;
  color: #182330;
  padding: 0.5rem 3rem;
  border-radius: 2rem;
  border: solid transparent;
  transition: 1s all linear;
  &:hover {
    background-color: transparent;
    color: #c87f2a;
    border: solid #c87f2a;
  }
`
const Footer = styled.div`
  background-color: #000000;
`

export default function Contact() {
  return (
    <>
      <Main>
        <Wrap>
          <Row>
            <Col md={6}>
              <Info>
                <h1>CONTACT US</h1>
                <p>
                  Phone
                  <br />
                  <span>
                    <a
                      href="tel:+256782442281"
                      style={{ textDecoration: 'none', color: 'inherit' }}
                    >
                      +256(0) 782 442 281
                    </a>
                  </span>
                  <br />
                  <span>
                    <a
                      href="tel:+256782442281"
                      style={{ textDecoration: 'none', color: 'inherit' }}
                    >
                      +256(0) 782 442 281
                    </a>
                  </span>
                </p>
                <p>
                  Email
                  <br />
                  <span>
                    <a
                      href="mailto:someone@yoursite.com?cc=someoneelse@theirsite.com"
                      style={{ textDecoration: 'none', color: 'inherit' }}
                    >
                      realsalimsema@gmail.com
                    </a>
                  </span>
                  <br />
                  <span>
                    <a
                      href="mailto:someone@yoursite.com?cc=someoneelse@theirsite.com"
                      style={{ textDecoration: 'none', color: 'inherit' }}
                    >
                      realsalimsema@gmail.com
                    </a>
                  </span>
                </p>
              </Info>
            </Col>
            <Col md={6}>
              <FormWrap>
                <form style={{ padding: '2rem 1rem 2.5rem 1rem' }}>
                  <Form
                    type="text"
                    name="name"
                    placeholder="&nbsp;Name"
                    required
                  />
                  <Form
                    type="text"
                    name="email"
                    placeholder="&nbsp;Email"
                    required
                  />
                  <FormArea
                    type="text"
                    name="message"
                    placeholder="&nbsp;Message"
                    required
                  />
                  <div className="text-center pt-4">
                    <Btn type="submit">Send Message</Btn>
                  </div>
                </form>
              </FormWrap>
            </Col>
          </Row>
        </Wrap>
      </Main>
      <Footer>
        <section
          className=" pt-4 pb-2 text-white"
          style={{ display: 'flex', justifyContent: 'center' }}
        >
          <span>
            &copy;{new Date().getFullYear()}&nbsp;MAAEMO.&nbsp;All Rights
            Reserved.
          </span>
        </section>
      </Footer>
    </>
  )
}
