import React from 'react';
import styled from 'styled-components';
import ImageSlider from './ImageSlider';
import { Link } from 'react-router-dom';
import { FaGithub } from "react-icons/fa";
import { RiGitRepositoryPrivateFill } from "react-icons/ri";
import { VscPreview } from "react-icons/vsc";
import { useParams } from 'react-router-dom';
import ProjectApi from '../Api/ProjectApi';
import { CiMobile3 } from "react-icons/ci";
import { TbWorldWww } from "react-icons/tb";
import { FaCode } from "react-icons/fa6";
import { Zoom } from 'react-reveal';

const ProjectInfo = () => {

  const { PName } = useParams();
  const project = ProjectApi.find(p => p.ProjectName === PName);

  return (
    <>
      <Zoom>
        <Container>
          <ImageSlider slides={project.slides} />
          <PInfo>
            <PTitle>
              <h1>{PName}</h1>
            </PTitle>
            {project.Type === "Mobile App" ? (
              <TypeDomain>
                <CiMobile3 style={{ fontSize: "25px", color: "#F4D03F" }} />
                <h3>{project.Type}</h3>
              </TypeDomain>
            ) : (
              <TypeDomain>
                <TbWorldWww style={{ fontSize: "25px", color: "#F4D03F" }} />
                <h3>{project.Type}</h3>
              </TypeDomain>
            )}
            <TechStack>
              <FaCode style={{ fontSize: "25px", color: "#A2C4FF" }} />
              <Tech>
                {project.TechStack.map(item => {
                  return (
                    <p>{[item]}</p>
                  )
                })}
              </Tech>
            </TechStack>
            <PDescription>
              <p>
                {project.ProjectDescription}
              </p>
            </PDescription>
            <ProjectLink>
              {project.githubUrl ? <ProjectGitHubLink to={project.githubUrl} target='blank'>View Source Code <FaGithub style={{ margin: "0px 0px -5px 6px", fontSize: "25px" }} />
              </ProjectGitHubLink> : <OfflineLink> Source Code Is Private<RiGitRepositoryPrivateFill style={{ margin: "0px 0px -5px 6px", fontSize: "25px" }} /></OfflineLink>}
              {project.liveUrl ? <ProjectLiveLink to={project.liveUrl} target='blank'>Live Preview<VscPreview style={{ margin: "0px 0px -8px 10px", fontSize: "25px" }} />
              </ProjectLiveLink> : <OfflineLink>Live Preview Not Available</OfflineLink>}
            </ProjectLink>
          </PInfo>
        </Container>
      </Zoom>
    </>
  )
}

export default ProjectInfo

const Container = styled.div`
   display: flex;
   margin: 50px;
   padding: 80px 70px;
   margin-top: 6%;
   border-radius: 10px;
   align-items: center;
   background-color: #0E2335;
   box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
   @media (max-width: 1300px) {
   flex-direction: column;
   padding: 40px 10px;
   margin: 30px 10px;
   border-radius: 5px;
  }
`
const PInfo = styled.div`
padding: 30px 20px;
margin-left: 10px;
border-radius: 10px;
background-color: #2C3E50;
width: 40%;
@media (max-width: 1000px) {
    width: 95%;
    padding: 20px 10px;
    margin-left: 0px;
    margin-top: 20px;
    border-radius: 5px;
  }
`
const PTitle = styled.div`
h1{
   color: white;
   margin-bottom: 10px;
   @media (max-width: 1000px) {
    font-size: 25px;
  }
}

`
const TypeDomain = styled.div`
display: flex;
padding-bottom: 10px;
h3{
    color: #F4D03F;
    font-size: 20px;
    margin-left: 5px;
}
`
const TechStack = styled.div`
display: flex;
padding-bottom: 10px;
`
const Tech = styled.div`
display: flex;
flex-wrap: wrap;
margin-left: 5px;
p{
    color:#A2C4FF;
    font-size: 15px;
    margin: 0px 5px;
    margin-bottom: 8px;
    background-color: rgba(86, 207, 255, 0.816);
    padding: 4px 8px;
    color: white;
    border-radius: 3px;
}
`

const PDescription = styled.div`
p{
    padding: 0px 15px;
    @media (max-width: 1000px) {
    padding: 5px 10px;
    font-size: 15px;
  }
}
`
const ProjectLink = styled.div`
display: flex;
flex-direction: column;
margin: auto;
margin-top: 30px;
width: 300px;
text-align: center;
@media (max-width: 1000px) {
    width: 95%;
    margin-top: 20px;
  }
`

const ProjectGitHubLink = styled(Link)`
background-color: #F1C40F;
text-decoration: none;
padding: 15px 0px;
margin-top: 10px;
border-radius: 5px;
color: white;
font-weight: bold;
transition: 0.5s;
&:hover{
color: black;
}
@media (max-width: 1000px) {
    padding: 10px 0px;
  }
`

const ProjectLiveLink = styled(Link)`
background-color: #D35400;
text-decoration: none;
padding: 15px 0px;
margin-top: 15px;
border-radius: 5px;
color: white;
font-weight: bold;
transition: 0.5s;
    &:hover{
        color: black;
}
@media (max-width: 1000px) {
    padding: 10px 0px;
  }
`
const OfflineLink = styled.div`
background-color: skyblue;
text-decoration: none;
padding: 15px 0px;
margin-top: 15px;
border-radius: 5px;
color: white;
font-weight: bold;
@media (max-width: 1000px) {
    padding: 10px 0px;
  }
`


