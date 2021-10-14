import React from 'react'

import About from '../components/About'
import Consulting from '../components/Consulting'
import Investments from '../components/Investments'
import Landing from '../components/Landing'
import Contact from '../components/Contact'
import Sustainability from '../components/Sustainability'

export default function Home() {
  return (
    <>
      <Landing />
      <section id="about" name="about">
        <div id="investment" name="investment">
          <Investments />
        </div>

        <div id="consulting" name="consulting">
          <Consulting />
        </div>

        <div id="sustainability" name="sustainability">
          <Sustainability />
        </div>

        <About />
      </section>
      <section id="contact" name="contact">
        <Contact />
      </section>
    </>
  )
}
