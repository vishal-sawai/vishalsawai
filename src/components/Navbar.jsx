import React from 'react'
import { HashLink } from 'react-router-hash-link';
import styled from 'styled-components';
import { IoMdMenu } from "react-icons/io";
import { useState } from 'react';
import Slide from 'react-reveal/Slide';
const Navbar = () => {
  const [MobileMenu, setMobileMenu] = useState(false);

  return (
    <>
      <Container>
        <Menu onClick={() => setMobileMenu(MobileMenu => !MobileMenu)} />
        <Slide down>
          <Nav className={MobileMenu ? "ShowNav" : "HideNav"}>
            <NavLink to="#Home">Home</NavLink>
            <NavLink to="#About">About</NavLink>
            <NavLink to="#Projects">Projects</NavLink>
            <NavLink to="#Technology">Technology</NavLink>
            <NavLink to="#Contact">Contact</NavLink>
          </Nav>
        </Slide>
      </Container>

    </>
  )
}

export default Navbar

const Container = styled.div`
position: fixed;
width: 100%;
display: flex;
justify-content: right;
background-color: #080015e8;
backdrop-filter: blur(10px);
box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
z-index: 50;
@media (max-width: 1000px) {
    flex-direction: column;
}
`

const Nav = styled.div`
padding:30px 25px;
margin-right: 50px;
@media (max-width: 1000px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    background-color: red;
    padding: 0px 0px;
    background-color: #0e23354e;
    backdrop-filter: blur(10px);
    transition: .5s ease;
  }
`
const NavLink = styled(HashLink)`
color: white;
margin: 0px 10px;
text-decoration: none;
text-transform: uppercase;
font-size: 13px;
font-family: Verdana, Geneva, Tahoma, sans-serif;
color:#A6ACAF;
transition: 0.5s;   
&:hover{
    color: white;
}
&.active {
    color: red !important; 
  }
@media (max-width: 1000px) {
  margin: 0px 0px;
  color: white;
  border: 0.50 solid;
  padding: 15px 30px;
  &:nth-child(even) {
    background-color:#0e23353b;
  }
  &:nth-child(odd){
    background-color: #0e233555;
  }
}
`
const Menu = styled(IoMdMenu)`
font-size: 40px;
margin: 10px 30px 10px 0px;
align-self: flex-end;
display: none;
@media (max-width: 1000px) {
    display: block;
}
`