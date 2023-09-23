'use client'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../style/style.css'
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';


const About = () => {
  return (
    <>
    <Container >
      <Row >
        <Col xs={12} style={{backgroundColor:'#3498DB'}} className='p-4 text-light rounded'>
          <h2 className='fw-light text-center'>We promise to deliver top-notch digital solutions with advanced tech-stack focusing on minute project details</h2>
        </Col>
        <hr />
        <Col md={8}>
          <Image src="/about.svg" alt='loading..' fluid />
        </Col>
        <Col md={4}>
          <ul>
            <li className='p-4 fw-light mt-3' >
            Alex Solution is founded by Ajay Chauhan, who kick-started his career in 2020 as a software engineer. He served as a freelancer after his 3 years of industrial experience in the field. In 3 years of his freelancing career, our CEO worked with more than 100 clients globally.
            </li>
            <li className='p-4 m-2 fw-light'>
            Our full-service digital agency focuses on problem-solving, long-term relationships, and business growth with hands-on experience in branding, web development, mobile development, and e-commerce.
            </li>
          </ul>
        </Col>
        <hr />
      </Row>
      </Container >
      <Container >
        <Row>
        <Col xs={12} className='p-4'>
          <h2 className='fw-light text-center'>SERVICES</h2>
        </Col>
      </Row>
      </Container >

      <Container >
        <Row>
        <Col sm={6} md={4} className='p-4'>
          <Card className='shadow'>
            <Card.Img variant="top" src="/webdev.jpg" />
            <Card.Body>
              <Card.Title className='fs-5 m-1 fw-light'>Web Development</Card.Title>
              <hr />
              <Card.Text className='m-1 fw-light'>
                We’re a full-service website development organization that covers the whale life cycle – from designing, strategizing, and developing, to testing, deploying, and supporting scalable solutions for all types of businesses.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={6} md={4} className='p-4'>
          <Card className='shadow'>
            <Card.Img variant="top" src="/uiux.jpg" />
            <Card.Body>
              <Card.Title className='fs-5 m-1 fw-light'>Web Design</Card.Title>
              <hr />
              <Card.Text className='m-1 fw-light'>
                We know that an efficient & effective brand web design is a vital ingredient of anyone’s marketing strategy. A disciplined content marketing plan along with a nurturing website design leads you toward a committed relationship with your client. From nurturing the leads to long-lasting relationships, our services are utmost in every aspect.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={6} md={4} className='p-4'>
          <Card className='shadow'>
            <Card.Img variant="top" src="/graphic.jpg" />
            <Card.Body>
              <Card.Title className='fs-5 m-1 fw-light'>Graphic Design</Card.Title>
              <hr />
              <Card.Text className='m-1 fw-light'>
                We specialize in bringing brands to life with our compelling brand storytelling & comprehensive experiences. Designing an innovative, consistent, memorable, intuitive, and scalable identity for your brand is our core motive. Because your brand is responsible for developing a connection with everyone around.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={6} md={4} className='p-4'>
          <Card className='shadow'>
            <Card.Img variant="top" src="/ecommerce.jpg" />
            <Card.Body>
              <Card.Title className='fs-5 m-1 fw-light'>eCommerce Websites</Card.Title>
              <hr />
              <Card.Text className='m-1 fw-light'>
                Alex Solution’s eCommerce development services aim to aid businesses to bridge the gap loopholes that occur between ideation, brainstorming, strategy & execution in all-inclusive e-commerce market spaces.
              </Card.Text>
            </Card.Body>
          </Card >
        </Col>
        <Col sm={6} md={4} className='p-4'>
          <Card className='shadow'>
            <Card.Img variant="top" src="/wordpress.jpg" />
            <Card.Body>
              <Card.Title className='fs-5 m-1 fw-light'>WordPress Websites</Card.Title>
              <hr />
              <Card.Text className='m-1 fw-light'>
                We’re a full-service website development organization that covers the whale life cycle – from designing, strategizing, and developing, to testing, deploying, and supporting scalable solutions for all types of businesses.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={6} md={4} className='p-4'>
          <Card className='shadow'>
            <Card.Img variant="top" src="/digital.jpg" />
            <Card.Body>
              <Card.Title className='fs-5 m-1 fw-light'>Digital Marketing</Card.Title>
              <hr />
              <Card.Text className='m-1 fw-light'>
                We’re the ones who believe in driving the market by business goals and focusing on the right target audience. This is why we use a flexible and integrated approach that’s helpful in using diverse skill sets across the team. We are completely dedicated to constantly improving the outcomes for your business
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      </Container >
      </>

  )
}
export default About;