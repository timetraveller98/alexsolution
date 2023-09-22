'use client'
import { MDBRow, MDBCol} from 'mdb-react-ui-kit';
import Container from 'react-bootstrap/Container';
import '../style/style.css'
import Link from 'next/link';
import Image from 'next/image';
import logo from '../assets/images/logo.png'

const Footer = () => {
    return (
      <footer className='bg-light' id='footer'>
    <Container >
     <MDBRow >
     <MDBCol sm={6}  md={6}>
     <ul className='mt-3'>
     <Link href="/"><Image src={logo} width={170} height={100} alt='logo'/></Link>
    <h6 style={{color:'gray',marginLeft:'30px',marginTop:'15px'}}>Alex Solution</h6>
     </ul>
     <hr className="text-dark"  />
     </MDBCol>
       <MDBCol sm={6}  md={3}>
       <ul className='mt-3'>
        <h6>Company</h6>
       <Link href={'/about'}> <li>About</li></Link>
        <Link href={'/testimonials'}><li>Blog</li></Link>
       <Link href={'/contact'}><li>Contact</li></Link></ul>
       <hr className="text-dark"  />
       </MDBCol>
       
       <MDBCol sm={6} md={3}>
       <ul className='mt-3'>
       <h6>Services</h6>
       <Link href={'/about'}><li> UI / UX Design</li></Link>
       <Link href={'/about'}><li> FrontEnd Development</li></Link>
       <Link href={'/about'}> <li>BackEnd Development</li></Link></ul>
        <hr className="text-dark" / >
       </MDBCol>
       <MDBCol size={12}>
        <h6 style={{color:'gray', textAlign:'center', marginTop:'10px',marginBottom:'10px'}}>© Copyright 2020 Alex Solution. All Rights Reserved</h6>
       </MDBCol>
      
     </MDBRow>
     </Container>
     </footer>
    );
}

export default Footer;
