'use client'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../style/style.css'
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
    return (
      <footer className='bg-light' id='footer'>
    <Container >
     <Row >
     
       <Col xs={6} md={3}>
       <ul className='mt-3'>
        <h6>Company</h6>
       <Link href={'/about'}> <li>About</li></Link>
        <Link href={'/testimonials'}><li>Blog</li></Link>
       <Link href={'/contact'}><li>Contact</li></Link></ul>
       <hr className="text-dark"  />
       </Col>
       
       <Col xs={6} md={3}>
       <ul className='mt-3'>
       <h6>Services</h6>
       <Link href={'/about'}><li> UI / UX Design</li></Link>
       <Link href={'/about'}><li> Frontend</li></Link>
       <Link href={'/about'}> <li>Backend</li></Link></ul>
        <hr className="text-dark" / >
       </Col>
       <Col sm={{ order: 'first' }} md={3} xs={6}>
     <ul className='mt-3'>
     <Link href="/"><Image src='/logo.png' width={180} height={122} alt='logo'/></Link>
    <h6 style={{color:'gray',marginLeft:'30px',marginTop:'15px'}}>Alex Solution</h6>
     </ul>
     <hr className="text-dark"  />
     </Col>
       <Col xs={6} md={3}>
       <ul className='mt-3'>
       <h6>Contact</h6>
       <li>7087868780</li>
       <li>help@alexsolution.in</li>
      <li>IT Park, Panchkula</li></ul>
        <hr className="text-dark" / >
       </Col>
       <Col xs={12}>
        <h6 style={{color:'gray', textAlign:'center', marginTop:'10px',marginBottom:'10px'}}>© Copyright 2020 Alex Solution. All Rights Reserved</h6>
       </Col>
      
     </Row>
     </Container>
     </footer>
    );
}

export default Footer;
