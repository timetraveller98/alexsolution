'use client'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../style/style.css'
import Link from 'next/link';
import Image from 'react-bootstrap/Image';

const Footer = () => {
    return (
      <footer className='bg-light' id='footer'>
    <Container >
     <Row >
     
       <Col  md={3}>
       <ul className='mt-3'>
        <h6>Company</h6>
       <Link href={'/about'}> <li className='fw-light'>About</li></Link>
        <Link href={'/works'} className='fw-light'><li>Projects</li></Link>
       <Link href={'/contact'}><li className='fw-light'>Contact</li></Link></ul>
       <hr className="text-dark"  />
       </Col>
       
       <Col md={3}>
       <ul className='mt-3'>
       <h6>Services</h6>
       <Link href={'/about'}><li className='fw-light'> UI / UX Design</li></Link>
       <Link href={'/about'}><li className='fw-light'> Frontend</li></Link>
       <Link href={'/about'}> <li className='fw-light'>Backend</li></Link></ul>
        <hr className="text-dark" / >
       </Col>
       <Col  md={3}>
       <ul className='mt-3'>
       <h6 >Contact</h6>
       <li className='fw-light'>7087868780</li>
       <li className='fw-light'>help@alexsolution.in</li>
      <li className='fw-light'>IT Park, Panchkula</li></ul>
        <hr className="text-dark" / >
       </Col>
       <Col sm={{ order: 'first' }} md={3}>
     <ul className='mt-3'>
     <Link href="/"><Image src='/logo.png' width={150} height={95} alt='logo'/></Link>
    <h6 style={{color:'gray',marginLeft:'30px',margin:'15px', padding:'12px'}}>Alex Solution</h6>
     </ul>
     <hr className="text-dark"  />
     </Col>
       <Col xs={12}>
        <h6 className='fw-light' style={{color:'gray', textAlign:'center', marginTop:'10px',marginBottom:'10px'}}>© Copyright 2020 Alex Solution. All Rights Reserved</h6>
       </Col>
      
     </Row>
     </Container>
     </footer>
    );
}

export default Footer;
