import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Container } from './Global'

export const Nav = styled.nav`
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
`

export const NavbarContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  // height: 80px;
  ${Container}
`

export const NavLogo = styled(Link)`
  justify-self: flex-start;
  cursor: pointer;
  text-decoration: none;
  font-size: 2rem;
  display: flex;
  align-items: center;
  margin-top: 1.3rem;
  margin-left: -1rem;
  z-index: 50;
`

export const MobileIcon = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: -8px;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    z-index: 99;
  }
`

export const NavMenu = styled.ul`
  display: flex;
  //   align-items: center;
  list-style: none;
  //   text-align: center;
  @media screen and (max-width: 767px) {
    display: flex;
    flex-direction: column;
    padding-top: 8rem;
    padding-left: 1.5rem;
    width: 100%;
    height: 100vh;
    position: absolute;
    right: ${({ click }) => (click ? 0 : '-100%')};
    opacity: 1;
    transition: all 0.3s ease;
    background-color: #885c44;
    // margin-top: 0px;
    margin-top: 10px;
  }
  @media screen and (min-width: 768px) and (max-width: 1023px) {
    display: flex;
    flex-direction: column;
    padding-top: 10rem;
    padding-left: 2rem;
    width: 50%;
    height: 100vh;
    position: absolute;
    // margin-top: 0px;
    margin-top: 10px;
    right: ${({ click }) => (click ? 0 : '-100%')};
    opacity: 1;
    transition: all 0.5s ease;
    background-color: #885c44;
  }
  @media screen and (min-width: 1024px) {
    margin-top: 3rem;
  }
`

export const NavItem = styled.li`
  @media screen and (max-width: 1024px) {
    padding: 0.5rem 0;
  }
`

export const NavItemBtn = styled.li`
  @media screen and (max-width: 1024px) {
    display: flex;
    justify-content: center;
    align-items: start;
    width: 100%;
    // height: 120px;
  }
`

export const NavLinks = styled.a`
  color: #ffe8d6;
  // color: #885c44;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0rem 1rem;
  height: 100%;
  @media screen and (min-width: 1025px) {
    text-align: center;
    // padding: 2rem;
    width: 100%;
    display: table;
    &:hover {
      // color: #ffe8d6;
      color: #885c44;
      text-decoration: none;
    }
  }
`

export const NavBtnLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  //   padding: 8px 16px;
  height: 100%;
  width: 100%;
  border: none;
  outline: none;
  margin-left: 3rem;
`
// drawer only for Maaemo

export const Drawer = styled.div`
  margin-top: 3rem;
  text-align: start;

  color: #fff;
  line-height: normal;
  @media only screen and (min-width: 769px) {
    display: none;
  }
`
