import React from 'react'
import styled from 'styled-components'
import Container from 'react-bootstrap/Container'

const Wrap = styled(Container)`
  width: 93vw;
  color: black;
  padding: 4rem auto 0rem auto;
  border-radius: 2rem;
  background-color: #ffe8d6;
  box-shadow: 5px 10px #3f4238;
  cursor: pointer;
  transition: 0.8s ease-in-out;
  @media only screen and (max-width: 600px) {
    box-shadow: 0px 10px #3f4238;
  }

  &:hover {
    transform: translateY(2px);
  }

  > p {
    font-size: 18px;
  }

  @media only screen and (min-width: 768px) {
    width: 90vw;
  }
`

export default function About() {
  return (
    <>
      <div style={{ backgroundColor: '#6B705C' }}>
        <div style={{ padding: '5.5rem 0 5.5rem 0' }}>
          <h4 className="text-center pb-3" style={{ color: '#ffe8d6' }}>
            &#8212;&nbsp;COMPANY&nbsp;&#8212;
          </h4>
          <Wrap>
            <div className="py-4">
              <p>
                <span className="font-weight-bold"> Maaemo Enterprises</span> is
                an investment company registered in Kampala, Uganda that offers
                consulting services to startups and established businesses
                working towards innovative, environmental, and eco-friendly
                solutions in the value supply chain focusing on developing
                countries. We provide business solutions such as access to
                investment funding, market expansion, technology and business
                structures to help scale up operations of businesses to
                profitability.
              </p>
              <p>
                Maaemo Enterprises was founded by Amanda Olusanya, who moved to
                Uganda from America as an investor, entrepreneur, and a business
                consultant. Her story is non-traditional, much like herself.
                She’s owned her own companies, invested in others but her true
                talents came out while turning around a failing business into a
                sale of a profitable company. She’s invested in herself as well,
                both in business and spirituality which is a powerful
                combination that helps her stay focused for her and her clients.
              </p>

              <p>
                <span className="font-weight-bold"> Our Mission:</span>
                <br /> To combine agriculture + manufacturing + sustainability
                to create an opportunity for Africa to be self reliant.
              </p>
              <p>
                <span className="font-weight-bold"> Our Vision:</span>
                &nbsp;&nbsp;Endless.
              </p>
              <p>
                <span className="font-weight-bold"> Our Values:</span>
                <br />
                Mother Earth, Prosperity, Efficiency
              </p>
            </div>
          </Wrap>
        </div>
      </div>
    </>
  )
}
