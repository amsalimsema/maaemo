import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { IconContext } from 'react-icons/lib'
import logo from '../logo.png'
import '../App.css'

import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  Drawer,
} from './NavElements'

import { Tube, Tsup, Gram, FB } from './Footer'

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
                  <NavLinks
                    href="/"
                    onClick={closeMobileMenu}
                    style={{ textDecoration: 'none' }}
                  >
                    <h6>ABOUT US</h6>
                  </NavLinks>
                </NavItem>
                <NavItem>
                  <NavLinks
                    href="/"
                    onClick={closeMobileMenu}
                    style={{ textDecoration: 'none' }}
                  >
                    <h6>CONTACT US</h6>
                  </NavLinks>
                </NavItem>

                <Drawer>
                  <NavItem>
                    <NavLinks
                      href="/"
                      onClick={closeMobileMenu}
                      style={{ textDecoration: 'none' }}
                    >
                      <h6>INVESTMENTS</h6>
                    </NavLinks>
                  </NavItem>
                  <NavItem>
                    <NavLinks
                      href="/"
                      onClick={closeMobileMenu}
                      style={{ textDecoration: 'none' }}
                    >
                      <h6>CONSULTING</h6>
                    </NavLinks>
                  </NavItem>
                  <NavItem>
                    <NavLinks
                      href="/"
                      onClick={closeMobileMenu}
                      style={{ textDecoration: 'none' }}
                    >
                      <h6>SUSTAINABILITY</h6>
                    </NavLinks>
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
