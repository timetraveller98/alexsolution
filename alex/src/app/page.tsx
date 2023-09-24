'use client'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './style/style.css'
import Image from 'react-bootstrap/Image';
import Button from '@mui/material/Button';
import Link from 'next/link';
import Card from 'react-bootstrap/Card'

const Home = () => {
  return (
    <>

      <Container >
        <Row>
          <Col md={6} sm={{ order: 'last' }} className='p-4'>
            <Image alt='loading' src='/home.jpg' fluid />
          </Col>
          <Col md={6} className='p-4'>
            <h1 className='fw-1000 my-5' style={{ color: '#45B39D' }}>Your Everlasting Web Development & Designing Company.</h1>
            <h4 className='fw-light my-4' style={{ color: '#F5B041' }}>Expand your business with Alex Solution's team</h4>
            <Button variant="contained" style={{ backgroundColor: '#45B39D' }} className='shadow my-4'><Link href='/about' className='text-light'>Explore</Link></Button>
          </Col>
        </Row>
        <hr />
      </Container >
      <Container >
        <Row>
        <Col xs={12} className='p-4'>
          <h2 className='fw-light text-center'>OUR SERVICES</h2>
        </Col>
      </Row>
      </Container >
      <Container >
        <Row>
        <Col lg={3} md={4} sx={6}>
          <Card className='shadow mt-5 p-3'>
          <Image src='/home/2023001.png' alt='Loading' fluid/>
         <Link href={'/service/2023001'}><h5 style={{backgroundColor:'#45B39D',cursor:'pointer'}} className='m-0 p-3 text-center  text-light fw-light'>Web Designing</h5></Link>
          </Card>
        </Col>
        <Col lg={3} md={4} sx={6}>
          <Card className='shadow mt-5 p-3'>
          <Image src='/home/2023002.png' alt='Loading' fluid/>
          <Link href={'/service/2023002'}> <h5 style={{backgroundColor:'#45B39D',cursor:'pointer'}} className='m-0 p-3 text-center  text-light fw-light'>Web Development</h5></Link>
          </Card>
        </Col>
        <Col lg={3} md={4} sx={6}>
          <Card className='shadow mt-5 p-3'>
          <Image src='/home/2023003.png' alt='Loading' fluid/>
          <Link href={'/service/2023003'}><h5 style={{backgroundColor:'#45B39D',cursor:'pointer'}} className='m-0 p-3 text-center  text-light fw-light'>Logo Designing</h5></Link>
          </Card>
        </Col>
        <Col lg={3} md={4} sx={6}>
          <Card className='shadow mt-5 p-3'>
          <Image src='/home/2023004.png' alt='Loading' fluid/>
          <Link href={'/service/2023004'}><h5 style={{backgroundColor:'#45B39D',cursor:'pointer'}} className='m-0 p-3 text-center  text-light fw-light'>Digital Marketing</h5></Link>
          </Card>
        </Col>
        <Col lg={3} md={4} sx={6}>
          <Card className='shadow mt-5 p-3'>
          <Image src='/home/2023005.png' alt='Loading' fluid/>
          <Link href={'/service/2023005'}><h5 style={{backgroundColor:'#45B39D',cursor:'pointer'}} className='m-0 p-3 text-center  text-light fw-light'>IT Solution</h5></Link>
          </Card>
        </Col>
        <Col lg={3} md={4} sx={6}>
          <Card className='shadow mt-5 p-3'>
          <Image src='/home/2023006.png' alt='Loading' fluid/>
          <Link href={'/service/2023006'}><h5 style={{backgroundColor:'#45B39D',cursor:'pointer'}} className='m-0 p-3 text-center  text-light fw-light'>Graphic Designing</h5></Link>
          </Card>
        </Col>
        <Col lg={3} md={4} sx={6}>
          <Card className='shadow mt-5 p-3'>
          <Image src='/home/2023007.png' alt='Loading' fluid/>
          <Link href={'/service/2023007'}><h5 style={{backgroundColor:'#45B39D',cursor:'pointer'}} className='m-0 p-3 text-center  text-light fw-light'>Email Marketing</h5></Link>
          </Card>
        </Col>
        <Col lg={3} md={4} sx={6}>
          <Card className='shadow mt-5 p-3'>
          <Image src='/home/2023008.png' alt='Loading' fluid/>
          <Link href={'/service/2023008'}><h5 style={{backgroundColor:'#45B39D',cursor:'pointer'}} className='m-0 p-3 text-center  text-light fw-light'>Social Marketing</h5></Link>
          </Card>
        </Col>
      </Row>
    <hr />
      </Container >
      <Container >
        <Row>
        <Col md={6} className='p-4 my-4'>
         <Image alt='loading' src='/service/develop.jpg' fluid/>
        </Col>
        <Col md={6} className='p-4 my-4'>
         <h2 style={{color:'#45B39D'}} className='fw-light'>Web Designing & Development</h2>
         <h5 style={{color:'#45B39D'}} className='fw-light my-3'>Services that We Offer</h5>
         <ul>
          <li className='my-2 fw-light'>Responsive Web Designing</li>
          <li className='my-2 fw-light'>Custom Website Designing</li>
          <li className='my-2 fw-light'>PHP Website Development</li>
          <li className='my-2 fw-light'>Website Development</li>
          <li className='my-2 fw-light'>Website Optimization</li>
          <li className='my-2 fw-light'>Mobile Templates</li>
          <li className='my-2 fw-light'>WordPress Website Designing & Development</li>
         </ul>
        </Col>
      </Row>
        <Row>
        <Col md={6} className='p-4 my-4'>
         <Image alt='loading' src='/service/digital.jpg' fluid/>
        </Col>
        <Col md={{order:'first'}} className='p-4 my-4'>
         <h2 style={{color:'#45B39D'}} className='fw-light'>Digital Marketing</h2>
         <h5 style={{color:'#45B39D'}} className='fw-light my-3'>Services that We Offer</h5>
         <ul>
          <li className='my-2 fw-light'>SEO Services</li>
          <li className='my-2 fw-light'>Social Media Marketing</li>
          <li className='my-2 fw-light'>PPC Advertising Services</li>
          <li className='my-2 fw-light'>Instagram Marketing</li>
          <li className='my-2 fw-light'>Google Local Listing Services</li>
          <li className='my-2 fw-light'>Email Marketing</li>
         </ul>
        </Col>
      </Row>
        <Row>
        <Col md={6} className='p-4 my-4'>
         <Image alt='loading' src='/service/graphic.jpg' fluid/>
        </Col>
        <Col md={6} className='p-4 my-4'>
         <h2 style={{color:'#45B39D'}} className='fw-light'>Graphic Design</h2>
         <h5 style={{color:'#45B39D'}} className='fw-light my-3'>Services that We Offer</h5>
         <ul>
          <li className='my-2 fw-light'>Logo Design & Branding</li>
          <li className='my-2 fw-light'>Social Media Design</li>
          <li className='my-2 fw-light'>Website UI & UX Design</li>
          <li className='my-2 fw-light'>Mobile App Design</li>
          <li className='my-2 fw-light'>Presentation Design</li>
          <li className='my-2 fw-light'>E-book Design</li>
         </ul>
        </Col>
      </Row>
      <hr />
      </Container >
      <Container >
        <Row>
        <Col xs={12} className='p-4'>
          <h2 className='fw-light text-center'>HAPPY CLIENTS</h2>
        </Col>
      </Row>
      </Container >
      <Container >
        <Row>
        <Col sm={6} md={4} className='p-4'>
        <Card className='p-3 shadow bg-light mt-4'>
      <Card.Img variant="top" src="/testimonials/1.jpg" />
      <Card.Body className='bg-light'>
        <Card.Title className='fw-light text-center'>Pooja Kumari</Card.Title>
        <hr />
        <Card.Text className='fw-light'>
        "I can't express how happy I am with the services provided by Alex Solution. They transformed my vision into reality and exceeded my wildest dreams. Their dedication to excellence is truly commendable. Thank you!"
        </Card.Text>
      </Card.Body>
    </Card>

        </Col>
        <Col sm={6} md={4}>
        <Card className='p-3 shadow bg-light mt-4'>
      <Card.Img variant="top" src="/testimonials/2.jpg" />
      <Card.Body className='bg-light'>
        <Card.Title className='fw-light text-center'>Pardeep Sharma</Card.Title>
        <hr />
        <Card.Text className='fw-light'>
        "I've worked with several companies in the past, but Alex Solution stands out as the best. Their commitment to customer satisfaction is evident in everything they do. I'm a raving fan and will definitely refer friends and colleagues."
        </Card.Text>
      </Card.Body>
    </Card>

        </Col>
        <Col sm={6} md={4} className='p-4'>
        <Card className='p-3 shadow bg-light mt-4'>
      <Card.Img variant="top" src="/testimonials/3.jpg" />
      <Card.Body className='bg-light'>
        <Card.Title className='fw-light text-center'>Priya Thakur</Card.Title>
        <hr />
        <Card.Text className='fw-light'>
        "Working with Alex Solution has been an absolute pleasure. They exceeded my expectations in every way possible. Their attention to detail, dedication, and expertise are truly remarkable. I couldn't be happier with the results."
        </Card.Text>
      </Card.Body>
    </Card>

        </Col>
        <Col sm={6} md={4} className='p-4'>
        <Card className='p-3 shadow bg-light my-4'>
      <Card.Img variant="top" src="/testimonials/4.jpg" />
      <Card.Body className='bg-light'>
        <Card.Title className='fw-light text-center'>Sudhesh Kumar</Card.Title>
        <hr />
        <Card.Text className='fw-light'>
        "I can't thank Alex Solution enough for their outstanding service. From start to finish, they made the process seamless and stress-free. Their team is not only professional but also incredibly friendly. I highly recommend them!"
        </Card.Text>
      </Card.Body>
    </Card>

        </Col>
        <Col sm={6} md={4}>
        <Card className='p-3 shadow bg-light my-4'>
      <Card.Img variant="top" src="/testimonials/5.jpg" />
      <Card.Body className='bg-light'>
        <Card.Title className='fw-light text-center'>Deep Sandhu</Card.Title>
        <hr />
        <Card.Text className='fw-light'>
        "Wow! Alex Solution went above and beyond to deliver a product that blew me away. Their commitment to excellence is evident in every aspect of their work. I'm thrilled with the final outcome, and I'll definitely be a repeat customer."
        </Card.Text>
      </Card.Body>
    </Card>
        </Col>
        <Col sm={6} md={4} className='p-4'>
        <Card className='p-3 shadow bg-light my-4'>
      <Card.Img variant="top" src="/testimonials/6.jpg" />
      <Card.Body className='bg-light'>
        <Card.Title className='fw-light text-center'>Divya Mittal</Card.Title>
        <hr />
        <Card.Text className='fw-light'>
        "Choosing Alex Solution for our project was the best decision we made. Their team's expertise and professionalism are unmatched. They delivered on time, within budget, and the quality of their work exceeded our expectations."
        </Card.Text>
      </Card.Body>
    </Card>

        </Col>
      </Row>
      </Container >

    </>
  )
}
export default Home;