import React from 'react'
import About from '../components/About'
import Consulting from '../components/Consulting'
import Investments from '../components/Investments'
import Landing from '../components/Landing'
import Sustainability from '../components/Sustainability'

export default function Home() {
  return (
    <>
      <Landing />
      <Investments />
      <Consulting />
      <Sustainability />
      <About />
    </>
  )
}
