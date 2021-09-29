import React from 'react'
import styled from 'styled-components'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import {
  FaMapMarker,
  FaPhoneAlt,
  FaWhatsapp,
  FaFacebookF,
  FaYoutube,
  FaInstagram,
} from 'react-icons/fa'

const Wrap = styled(Container)`
  width: 90vw;
  padding: 8rem 0 1rem 0;
  color: #ffe8d6;
`

export const Tsup = styled(FaWhatsapp)`
  color: #ffe8d6;
  &:hover {
    color: #6b705c;
  }
`
export const FB = styled(FaFacebookF)`
  color: #ffe8d6;
  &:hover {
    color: #6b705c;
  }
`
export const Tube = styled(FaYoutube)`
  color: #ffe8d6;
  &:hover {
    color: #6b705c;
  }
`
export const Gram = styled(FaInstagram)`
  color: #ffe8d6;
  &:hover {
    color: #6b705c;
  }
`

export default function Footer() {
  return (
    <>
      <div style={{ backgroundColor: '#3f4238', position: 'relative' }}>
        <Wrap>
          <Row>
            <Col md={4} className="text-center">
              <p>Maaemo Enterprises</p>
              <p style={{ fontStyle: 'italic' }}>
                Investing in sustainable solutions for Africa
              </p>
            </Col>
            <Col md={4} className="text-center">
              <p>
                <FaMapMarker style={{ color: '#fff' }} />
                &nbsp;&nbsp;Uganda House, Kampala
              </p>

              <p>
                <a
                  href="tel:+256760721071"
                  style={{ color: '#fff', textDecoration: 'none' }}
                >
                  <FaPhoneAlt />
                  &nbsp;&nbsp;+256 760 721 071
                </a>
              </p>
              <p>
                <a
                  href="tel:+16129879870"
                  style={{ color: '#fff', textDecoration: 'none' }}
                >
                  <FaPhoneAlt />
                  &nbsp;&nbsp;+1 612 987 9870
                </a>
              </p>
            </Col>
            <Col md={4} className="text-center">
              <a
                href="https://wa.me/256760721071/?text=Hello Maaemo Enterprises"
                target="_blank"
                rel="noopener noreferrer"
                title="WhatsApp"
              >
                <Tsup style={{ width: '1.5rem', height: '1.5rem' }} />
              </a>

              <a
                href="/"
                target="_blank"
                rel="noopener noreferrer"
                title="Facebook"
                style={{ paddingLeft: '1rem' }}
              >
                <FB style={{ width: '1.5rem', height: '1.5rem' }} />
              </a>

              <a
                href="/"
                target="_blank"
                rel="noopener noreferrer"
                title="YouTube"
                style={{ paddingLeft: '1rem' }}
              >
                <Tube style={{ width: '1.5rem', height: '1.5rem' }} />
              </a>

              <a
                href="/"
                target="_blank"
                rel="noopener noreferrer"
                title="Instagram"
                style={{ paddingLeft: '1rem' }}
              >
                <Gram style={{ width: '1.5rem', height: '1.5rem' }} />
              </a>
            </Col>
          </Row>
          <p className="text-center pt-5">
            &copy;{new Date().getFullYear()}&nbsp;Maaemo Enterprises.
          </p>
        </Wrap>

        <div className="custom-shape-divider-top-1630839795">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
              className="shape-fill"
            ></path>
          </svg>
        </div>
      </div>
    </>
  )
}
