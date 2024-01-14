import React from "react";
import styled from "styled-components";
import Zoom from 'react-reveal/Zoom';

const Heading = (props) => {
    return (
        <>
            <Zoom>
                <Headers>
                    <h1>{props.name}</h1>
                    <hr />
                </Headers>
            </Zoom>
        </>
    );
}
export default Heading;

const Headers = styled.div`
text-align: center;
text-transform: uppercase;
margin: 15px 0px;
    h1{
        letter-spacing: 8px;
        font-weight: 600;
        @media (max-width: 1000px) {
           font-size: 20px;
           letter-spacing: 3px;
           font-weight: 300;
}
    }
    hr{
        width: 250px;
        height: 1px;
        text-align: center;
        margin: auto;
        background-color: white;
        margin-top: 10px;
        border-radius: 50px;
         @media (max-width: 1000px){
            width: 200px;
        }
    }
`