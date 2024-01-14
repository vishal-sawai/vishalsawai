import React from 'react'
import styled from 'styled-components'
import Heading from './Heading'
import Fade from 'react-reveal/Fade';

const About = () => {
    return (
        <>
            <Container id='About'>
                <Heading name="About" />
                <AboutContainer>
                    <Fade top>
                        <AbImg>
                            <img src="/assets/profile.jpg" alt='profile' />
                        </AbImg>
                    </Fade>
                    <Fade bottom>
                        <AbInfo>
                            <p>
                                <span style={{ color: '#F4D03F' }}>&emsp;&emsp;&emsp; Hello, I'm Vishal Sawai! </span>  I have a lot of fun creating interesting things, exploring new ideas, and learning new skills.
                                I'm a quick learner and enjoy the process of figuring out solutions to challenges.<br />
                                I get a real kick out of solving problems and facing challenges. It's like a puzzle, and finding the right solution is pretty thrilling. I truly enjoy what I do because it's not just about writing code;
                                it's about making things work in creative and functional ways.
                            </p>
                        </AbInfo>
                    </Fade>
                </AboutContainer>
            </Container>
        </>
    )
}

export default About

const Container = styled.div`
padding: 20px;
padding-top: 80px;
`
const AboutContainer = styled.div`
display: flex;
width: 80%;
margin: auto;
align-items: center;
margin-top:30px;
margin: auto;
box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
padding: 70px 50px;
border-radius: 10px;
@media (max-width: 1000px) {
    flex-direction: column;
    padding: 20px 10px;
    width: 90%;
  }

`
const AbImg = styled.div`
padding: 10px 20px;
img{
    border-radius: 50%;
    background: linear-gradient(to right, red, yellow,blue);
    height: 350px;
    padding: 2px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
    @media (max-width: 1000px) {
    height: 250px;
}
@media (max-width: 1000px) {
   padding: 1px;
}
}
`
const AbInfo = styled.div`
padding: 10px 20px;
    margin: auto;
p{
    font-size: 20px;
    word-spacing: 3px;
    line-height: 30px;
    
    @media (max-width: 1000px) {
   font-size: 15px;
   line-height: 25px;
}
@media (max-width: 1000px) {
   padding: 10px;
}
}
`

