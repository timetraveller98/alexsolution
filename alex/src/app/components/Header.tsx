'use client'
import Link from 'next/link';
import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'next/image';
import logo from '../assets/images/logo.png'
import '../style/style.css'


const Header = () =>{
return(
    <> 
    
   <Navbar expand="lg" bg='info'>
        <Link href="/"><Image src={logo} width={100} height={60} alt='logo'/></Link>
        <Navbar.Toggle className='me-2'/>
        <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end'>
          <Nav>
           <Link className='navButton' href="/" >HOME</Link>
            <Link className='navButton' href="/about" >ABOUT</Link>
            <Link className='navButton' href="/testimonials" >TESTIMONIALS</Link>
            <Link className='navButton' href="/contact" >CONTACT</Link>
          </Nav>
        </Navbar.Collapse>
    </Navbar>
</>
)
}
export default Header;