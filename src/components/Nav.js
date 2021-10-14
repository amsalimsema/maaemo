import React, { useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-scroll'

import { IconContext } from 'react-icons/lib'
import {
  FaWhatsapp,
  FaFacebookF,
  FaYoutube,
  FaInstagram,
  FaBars,
  FaTimes,
} from 'react-icons/fa'
import logo from '../logo.png'
import '../App.css'

import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  Drawer,
} from './NavElements'

const Tsup = styled(FaWhatsapp)`
  color: #ffe8d6;
  &:hover {
    color: #6b705c;
  }
`
const FB = styled(FaFacebookF)`
  color: #ffe8d6;
  &:hover {
    color: #6b705c;
  }
`
const Tube = styled(FaYoutube)`
  color: #ffe8d6;
  &:hover {
    color: #6b705c;
  }
`
const Gram = styled(FaInstagram)`
  color: #ffe8d6;
  &:hover {
    color: #6b705c;
  }
`

export default function NavTop() {
  // open and close drawer
  const [click, setClick] = useState(false)

  const handleClick = () => setClick(!click)
  const closeMobileMenu = () => setClick(false)

  // change bg
  const [MobileNav, setMobileNav] = useState(false)
  const changebackground = () => {
    if (window.scrollY >= 50) {
      setMobileNav(true)
    } else {
      setMobileNav(false)
    }
  }
  window.addEventListener('scroll', changebackground)

  return (
    <>
      <div className={MobileNav ? 'MobileNav active' : 'MobileNav'}>
        <IconContext.Provider value={{ color: '#C87F2A' }}>
          <Nav>
            <NavbarContainer>
              <NavLogo to="/" onClick={closeMobileMenu}>
                <img
                  src={logo}
                  alt="logo"
                  style={{ height: '60px', width: '60px' }}
                />
                <span
                  style={{
                    fontWeight: 'bold',
                    letterSpacing: '1px',
                    fontSize: '1.6rem',
                  }}
                >
                  &nbsp;MAAEMO
                </span>
                <span
                  style={{
                    fontSize: '0.9rem',
                    paddingTop: '0.3rem',
                  }}
                  className="logoNarration"
                >
                  &nbsp; &nbsp; &nbsp; &nbsp;Investing in Sustainable Solutions
                  for Africa
                </span>
              </NavLogo>

              <MobileIcon onClick={handleClick}>
                {click ? <FaTimes /> : <FaBars />}
              </MobileIcon>

              <NavMenu onClick={handleClick} click={click}>
                <NavItem>
                  <Link
                    onClick={closeMobileMenu}
                    activeClass="active"
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={150}
                    style={{
                      textDecoration: 'none',
                      color: 'white',
                      cursor: 'pointer',
                    }}
                  >
                    <h6>ABOUT US&nbsp;&nbsp;</h6>
                  </Link>
                </NavItem>
                <NavItem>
                  <Link
                    onClick={closeMobileMenu}
                    activeClass="active"
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={150}
                    style={{
                      textDecoration: 'none',
                      color: 'white',
                      cursor: 'pointer',
                    }}
                  >
                    <h6>CONTACT US</h6>
                  </Link>
                </NavItem>

                <Drawer>
                  <NavItem>
                    <Link
                      onClick={closeMobileMenu}
                      activeClass="active"
                      to="investment"
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={150}
                      style={{
                        textDecoration: 'none',
                        color: 'white',
                        cursor: 'pointer',
                      }}
                    >
                      <h6>INVESTMENTS</h6>
                    </Link>
                  </NavItem>
                  <NavItem>
                    <Link
                      onClick={closeMobileMenu}
                      activeClass="active"
                      to="consulting"
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={150}
                      style={{
                        textDecoration: 'none',
                        color: 'white',
                        cursor: 'pointer',
                      }}
                    >
                      <h6>CONSULTING</h6>
                    </Link>
                  </NavItem>
                  <NavItem>
                    <Link
                      onClick={closeMobileMenu}
                      activeClass="active"
                      to="sustainability"
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={150}
                      style={{
                        textDecoration: 'none',
                        color: 'white',
                        cursor: 'pointer',
                      }}
                    >
                      <h6>SUSTAINABILITY</h6>
                    </Link>
                  </NavItem>

                  <div>
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
                  </div>
                </Drawer>
              </NavMenu>
            </NavbarContainer>
          </Nav>
        </IconContext.Provider>
      </div>
    </>
  )
}
