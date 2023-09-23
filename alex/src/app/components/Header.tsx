'use client'
import Link from 'next/link';
import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'next/image';
import '../style/style.css'
import Container from 'react-bootstrap/Container';


const Header = () =>{
return(
    <> 
   <Navbar expand="lg" bg='light' className="bg-body-teritary sticky-top">
    <Container>
        <Link href="/"><Image src='/logo.png' width={140} height={85} alt='logo'/></Link>
        <Navbar.Toggle className='me-3 text-light'/>
        <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end'>
          <Nav>
           <Link className='navButton' href="/">HOME</Link>
            <Link className='navButton' href="/about">ABOUT</Link>
            <Link className='navButton' href="/works">PROJECTS</Link>
            <Link className='navButton' href="/contact">CONTACT</Link>
          </Nav>
        </Navbar.Collapse>
        </Container>
    </Navbar>
    
</>
)
}
export default Header;