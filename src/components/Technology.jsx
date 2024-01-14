import React, { useState } from 'react'
import Heading from './Heading'
import styled from 'styled-components'
import TechStackApi from '../Api/TechStackApi'
import { Fade } from 'react-reveal'

const Technology = () => {
    const [Skill] = useState(TechStackApi);
    return (
        <>
            <Container id='Technology'>
                <Heading name="Technology" />
                <TechnologyContainer>
                    {Skill.map((tech) => {
                        return (

                            <TechBox>
                                <Fade>
                                    <img src={tech.Path} alt="TechStack" />
                                    <h3>{tech.Name}</h3>
                                </Fade>
                            </TechBox>

                        )
                    })}

                </TechnologyContainer>
            </Container>
        </>
    )
}

export default Technology;

const Container = styled.div`
padding-top: 80px;
align-items: center;
justify-content: center;
@media (max-width: 1000px) {
   padding: 0px 20px;
   padding-top: 80px;
  }
`
const TechnologyContainer = styled.div`
display: flex;
flex-wrap: wrap;
margin: auto;
padding: 0px 40px;
padding-top: 20px;
padding-bottom: 60px;
justify-content: center;
box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
@media (max-width: 1000px) {
  padding: 0px 0px;
  padding-bottom: 60px;
}
`
const TechBox = styled.div`
 margin: auto;
 margin-top: 40px;
 width: 22%;
 text-align: center;
 padding: 20px 0px;
 border-radius: 10px;
 background-color: #0E2335;
 img{
    height: 60px;
    margin-bottom: 10px;
    @media (max-width: 1000px) {
    height: 30px;
  }
 }

 @media (max-width: 1000px) {
   width: 150px;
   h1{
    font-size: 20px;
   }
}
`