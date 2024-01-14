import React from "react";
import ParticleBg from './ParticleBg'
import { Link } from 'react-router-dom'
import styled from "styled-components";
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import Fade from 'react-reveal/Fade';

const Home = () => {
    const [text] = useTypewriter({
        words: ['Full stack Web Developer', 'React Js Developer', 'React Native Developer', 'Tech Enthusiast'],
        loop: {},
    })
    return (
        <>
            <HomeContainer>
                <HeadingContainer>
                    <Fade top>
                        <Heading>
                            <h1>Hello, I'm <span>Vishal Sawai</span></h1>
                            <p>I'm a <span>{text}</span><span><Cursor /></span></p>
                        </Heading>
                    </Fade>
                    <SocialMediaIcons>
                        <Fade right>
                            <Link to={"https://www.linkedin.com/in/vishal-sawai-5462b9186/"} target="_blank">
                                <img src="/assets/linkedin.svg" alt="linkedin" />
                            </Link>
                        </Fade>
                        <Fade top>
                            <Link to={"https://twitter.com/vishaldnynasha1"} target="_blank">
                                <img src="/assets/x.png" alt="x" />
                            </Link>
                        </Fade>
                        <Fade left>
                            <Link to={"https://github.com/Vishal-Sawai"} target="_blank">
                                <img src="/assets/github.svg" alt="github" />
                            </Link>
                        </Fade>
                    </SocialMediaIcons>
                </HeadingContainer>
            </HomeContainer>
        </>
    );
}

const Wrapper = () => {
    return (
        <><ParticleBg /><Home /></>
    )
}

export default Wrapper;

const HomeContainer = styled.div`
 position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  @media (max-width: 1073px) {
    width: 90%;
    top: 50%;
  }
 `
const HeadingContainer = styled.div`
margin: auto;
display: flex;
flex-direction: column;
 `
const Heading = styled.div`
    align-self: center;
    justify-self: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    line-height: normal;
    width: fit-content;
    height: auto;
    margin-left: auto;
    margin-right: auto;
    color: #fafafa;
    text-transform: capitalize;
    text-align: center;
    h1{
        font-weight: 100;
        font-size:50px;
        @media (max-width: 1073px) {
            font-size: 25px;
      }
        span{
            font-weight: bold;
        }
    }
    p{
        margin-top: 15px;
        font-size: 25px;
        @media (max-width: 1073px) {
            font-size: 20px;
      }
        span:nth-child(1){
            color: yellow;
            font-weight: bold;
            padding-left: 5px;
            text-transform: uppercase;
        }
    }
`
const SocialMediaIcons = styled.div`
display: flex;
align-self: center;
margin-top: 15px;
@media (max-width: 1073px) {
            margin-top: 20px;
      }
img{
    width: 30px;
    height: 30px;
    margin: 5px 15px;
    cursor: pointer;
    background-color: #0E2335;
    border-radius: 5px;
    padding: 10px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
    transition: 0.5s;
    @media (max-width: 1073px) {
           width: 25px;
           height: 25px;
           margin: 5px 8px;
      }
}
    :hover{
       opacity: 60%;
    }
`
