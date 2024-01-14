import React from 'react'
import styled from 'styled-components'

const Footer = () => {
    return (
        <>
            <Container>
                <p>© 2024 copyright: Vishal Sawai</p>
            </Container>
        </>
    )
}

export default Footer

const Container = styled.footer`
text-align: center;
padding: 15px 0px;
`
