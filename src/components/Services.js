import React from 'react'
import styled from 'styled-components'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import invest from '../Images/invest.png'
import consult from '../Images/consulting.png'
import sustain from '../Images/planet-earth.png'

const Wrap = styled(Container)`
  width: 91vw;
  padding: 4.5rem 0;
`
const Box = styled.div`
  border-radius: 2rem;
  background-color: #ffe8d6;
  box-shadow: 5px 10px #3f4238;
  transition: 0.8s ease-in-out;
  cursor: pointer;
  @media only screen and (max-width: 600px) {
    box-shadow: 0px 10px #3f4238;
  }
  &:hover {
    transform: translateY(2px);
  }
`

export default function Services() {
  return (
    <>
      <div style={{ backgroundColor: '#D4C7B0', position: 'relative' }}>
        <Wrap>
          <h4 className="text-center py-3">
            &#8212;&nbsp;SERVICES&nbsp;&#8212;
          </h4>
          <Row>
            <Col md={4} className="pb-1">
              <Box>
                <div className="pb-1">
                  <p className="text-center font-weight-bold pt-1">
                    INVESTMENTS
                  </p>
                  <p className="p-5">
                    <img src={invest} alt="investments" className="w-100" />
                  </p>
                  <ul>
                    <li>
                      <p>Investment preparations</p>
                    </li>
                    <li>
                      <p>Securing investment funding from investors</p>
                    </li>
                    <li>
                      <p>Attaining grant investments</p>
                    </li>
                  </ul>
                </div>
              </Box>
            </Col>
            <Col md={4} className="pb-1">
              <Box>
                <div className="pb-1">
                  <p className="text-center font-weight-bold pt-1">
                    CONSULTING
                  </p>
                  <p className="p-5">
                    <img src={consult} alt="consulting" className="w-100" />
                  </p>
                  <ul>
                    <li>
                      <p>Expanding Company’s Visions</p>
                    </li>
                    <li>
                      <p>Business Structures</p>
                    </li>
                    <li>
                      <p>Efficiencies / Technology</p>
                    </li>
                    <li>
                      <p>Brand Messaging</p>
                    </li>
                    <li>
                      <p>Forensic Accounting</p>
                    </li>
                  </ul>
                </div>
              </Box>
            </Col>
            <Col md={4} className="pb-1">
              <Box>
                <div className="pb-1">
                  <p className="text-center font-weight-bold pt-1">
                    SUSTAINABILITY
                  </p>
                  <p className="p-5">
                    <img src={sustain} alt="sustainability" className="w-100" />
                  </p>
                  <ul>
                    <li>
                      <p>Sustainability Audit</p>
                    </li>
                    <li>
                      <p>Sustainable Implementation</p>
                    </li>
                  </ul>
                </div>
              </Box>
            </Col>
          </Row>
        </Wrap>
        <div className="services-wave">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              className="services-shape-fill"
            ></path>
          </svg>
        </div>
      </div>
    </>
  )
}
