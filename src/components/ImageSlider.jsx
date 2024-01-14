import React from 'react'
import styled from 'styled-components'
import { useState } from 'react'
import { FaCircleChevronLeft, FaCircleChevronRight } from "react-icons/fa6";


const ImageSlider = ({ slides }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };
    const goToNext = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };


    return (
        <>
            <Container>
                <SliderContainer>
                    <LeaftArrow>
                        <FaCircleChevronLeft onClick={goToPrevious} />
                    </LeaftArrow>
                    {slides[currentIndex].title === "video" ? (
                        <SliderVideo>
                            <video controls >
                                <source src={slides[currentIndex].url} type="video/mp4" />
                            </video>
                        </SliderVideo>
                    ) : (
                        <SliderImg $bgImg={slides[currentIndex].url} />
                    )}
                    <RightArrow>
                        <FaCircleChevronRight onClick={goToNext} />
                    </RightArrow>
                </SliderContainer>
                <Title>
                    {slides[currentIndex].title}
                </Title>
            </Container>
        </>
    )
}

export default ImageSlider

const Container = styled.div`
width: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`
const SliderContainer = styled.div`
/* width: 2500px;
height: 300px; */
height: 52vh;
width: 100%;
display: flex;
align-items: center;
img{
    height: 500px;
    width: 500px;
    @media (max-width: 1000px) {
    width: 100%;
  }
}
@media (max-width: 1000px) {
    height: 26vh;
    flex-direction: column;
  }
`
const Title = styled.p`
margin-top: 15px;
text-align: center;
width: 88%;
padding: 15px 0px;
border-radius: 5px;
background-color: #2c3e50a8;
@media (max-width: 1000px){
    width: 100%;
    margin-top: 5px;
}

`

const SliderImg = styled.div`
border: 3px solid white;
padding: 5px;
height: 100%; 
width: 100%;
background-image: ${props => `url("${props.$bgImg}")`};
background-position: center;
background-size: cover;
background-repeat: no-repeat;
border-radius: 10px;
`

const SliderVideo = styled.div`
 height: 100%; 
 width: 100%;
 background-color: white;
 border-radius:5px;
 video{
    width: 100%;
    height: 100%;
    border-radius:5px;
 }
`

const LeaftArrow = styled.div`
font-size: 30px;
margin: 0px 10px;
cursor: pointer;
color: gray;
border-radius: 50%;
height: 30px;
@media (max-width: 1000px) {
    font-size: 20px;
    position: absolute;
    top: 9rem;
    left: 30px;
  }
&:hover{
    color: yellowgreen;
}
`

const RightArrow = styled.div`
font-size: 30px;
margin: 0px 10px;
cursor: pointer;
color: gray;
border-radius: 50%;
height: 30px;
@media (max-width: 1000px) {
    font-size: 20px;
    position: absolute;
    top: 9rem;
    right: 30px;
  }
`