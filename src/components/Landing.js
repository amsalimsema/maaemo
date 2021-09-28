import React from 'react'
import styled from 'styled-components'
import { Bg } from './Global'

const LandingBg = styled(Bg)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`

export default function Landing() {
  return (
    <>
      <LandingBg>
        <hr
          style={{
            width: '100px',
            background: '#885c44',
            height: '5px',
            marginTop: '30px',
          }}
        />
      </LandingBg>
    </>
  )
}
