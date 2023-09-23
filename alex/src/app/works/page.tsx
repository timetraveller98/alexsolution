'use client'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../style/style.css'
import Card from 'react-bootstrap/Card';
import Button from '@mui/material/Button';
import Link from 'next/link';

const Project = () =>{
    return(
      
        <>
        <Container >
        <Row>
        <Col xs={12} style={{backgroundColor:'#3498DB'}} className='p-4 text-light rounded'>
          <h2 className='fw-light text-center'>Alex Solution believes in providing outstanding digital solutions to aid clients achieve their business dreams by converting your ideas into top-notch products. See how we helped various businesses achieve their dreams!</h2>
        </Col>
      <hr />
      </Row>
      </Container >
        <Container >
        <Row>
        <Col xs={12} className='p-4'>
          <h2 className='fw-light text-center'>PROJECTS</h2>
        </Col>
      </Row>
      </Container >

      <Container >
        <Row>
        <Col sm={6} md={4} className='p-4'>
          <Card className='shadow'>
            <Card.Img variant="top" src="/works/grocery.jpg" />
            <Card.Body>
              <Card.Title className='fs-5 m-1 fw-light'>eCommerce Website</Card.Title>
              <hr />
              <Card.Text className='m-1 fw-light'>
              We helped them rebrand and build a new eCommerce website for their innovative products and services.
              </Card.Text>
              <Button variant="contained" className='my-4' style={{display:'block', width:'100px',margin:'auto'}}><Link href='https://amartex.in' className='text-light' target='_blank'>Visit</Link></Button>
              
            </Card.Body>
          </Card>
        </Col>
        <Col sm={6} md={4} className='p-4'>
          <Card className='shadow'>
            <Card.Img variant="top" src="/works/ai.jpg" />
            <Card.Body>
              <Card.Title className='fs-5 m-1 fw-light'>AI Website</Card.Title>
              <hr />
              <Card.Text className='m-1 fw-light'>
              We assisted them in initiating a Saas-based web application for property tenants and managers.
              </Card.Text>
              <Button variant="contained" className='my-4' style={{display:'block', width:'100px',margin:'auto'}}><Link href='https://qyubitech.com' className='text-light' target='_blank'>Visit</Link></Button>
              
            </Card.Body>
          </Card>
        </Col>
        <Col sm={6} md={4} className='p-4'>
          <Card className='shadow'>
            <Card.Img variant="top" src="/works/crypto.jpg" />
            <Card.Body>
              <Card.Title className='fs-5 m-1 fw-light'>Crypto Website</Card.Title>
              <hr />
              <Card.Text className='m-1 fw-light'>
              We revamped their website to promote branding and also helped them build engagement with their audience.
              </Card.Text>
              <Button variant="contained" className='my-4' style={{display:'block', width:'100px',margin:'auto'}}><Link href='https://qudex.io' className='text-light' target='_blank'>Visit</Link></Button>
              
            </Card.Body>
          </Card>
        </Col>
        <Col sm={6} md={4} className='p-4'>
          <Card className='shadow'>
            <Card.Img variant="top" src="/works/trade.jpg" />
            <Card.Body>
              <Card.Title className='fs-5 m-1 fw-light'>Trade Website</Card.Title>
              <hr />
              <Card.Text className='m-1 fw-light'>
              We supported them in their telemedical and Tele counseling services by designing and developing mobile and web app for them.
              </Card.Text>
              <Button variant="contained" className='my-4' style={{display:'block', width:'100px',margin:'auto'}}><Link href='https://qtrade9.com' className='text-light' target='_blank'>Visit</Link></Button>
              
            </Card.Body>
          </Card>
        </Col>
        <Col sm={6} md={4} className='p-4'>
          <Card className='shadow'>
            <Card.Img variant="top" src="/works/event.jpg" />
            <Card.Body>
              <Card.Title className='fs-5 m-1 fw-light'>Event Website</Card.Title>
              <hr />
              <Card.Text className='m-1 fw-light'>
              We lend a helping hand to them by transforming their corporate website and maximizing the volume of their qualified leads by 180%.
              </Card.Text>
              <Button variant="contained" className='my-4' style={{display:'block', width:'100px',margin:'auto'}}><Link href='https://qdhun.in' className='text-light' target='_blank'>Visit</Link></Button>
              
            </Card.Body>
          </Card >
        </Col> 
        <Col sm={6} md={4} className='p-4'>
          <Card className='shadow'>
            <Card.Img variant="top" src="/works/forex.jpg" />
            <Card.Body>
              <Card.Title className='fs-5 m-1 fw-light'>Forex Website</Card.Title>
              <hr />
              <Card.Text className='m-1 fw-light'>
              We helped Supervisual in developing their website with awesome ideas & animations. All this was made possible with our technical expertise.

              </Card.Text>
              <Button variant="contained" className='my-4' style={{display:'block', width:'100px',margin:'auto'}}><Link href='https://qprime.global' className='text-light' target='_blank'>Visit</Link></Button>
              
            </Card.Body>
          </Card>
        </Col>
        <Col sm={6} md={4} className='p-4'>
          <Card className='shadow'>
            <Card.Img variant="top" src="/works/track.jpg" />
            <Card.Body>
              <Card.Title className='fs-5 m-1 fw-light'>Tracking Website</Card.Title>
              <hr />
              <Card.Text className='m-1 fw-light'>
              We were the reason behind their increased sales. Plus, we helped them with their digital presence with awesome website revamp.
              </Card.Text>
              <Button variant="contained" className='my-4' style={{display:'block', width:'100px',margin:'auto'}}><Link href='https://tracknsure.com' className='text-light' target='_blank'>Visit</Link></Button>
              
            </Card.Body>
          </Card>
        </Col>
        <Col sm={6} md={4} className='p-4'>
          <Card className='shadow'>
            <Card.Img variant="top" src="/works/school.jpg" />
            <Card.Body>
              <Card.Title className='fs-5 m-1 fw-light'>Teaching Website</Card.Title>
              <hr />
              <Card.Text className='m-1 fw-light'>
        
              We partnered with them to develop and launch a marketplace for students and trainers.
              </Card.Text>
              <Button variant="contained" className='my-4' style={{display:'block', width:'100px',margin:'auto'}}><Link href='https://qskool.in' className='text-light' target='_blank'>Visit</Link></Button>
              
            </Card.Body>
          </Card>
        </Col>
        <Col sm={6} md={4} className='p-4'>
          <Card className='shadow'>
            <Card.Img variant="top" src="/works/charity.jpg" />
            <Card.Body>
              <Card.Title className='fs-5 m-1 fw-light'>Charity Website</Card.Title>
              <hr />
              <Card.Text className='m-1 fw-light'>
              We helped a Dutch Charity trust launch its website. It’s our pleasure to help them in their mission to help the entire world.
              </Card.Text>
              <Button variant="contained" className='my-4' style={{display:'block', width:'100px',margin:'auto'}}><Link href='https://pragatikasaathi.com' className='text-light' target='_blank'>Visit</Link></Button>

            </Card.Body>
          </Card>
        </Col>
      </Row>
      </Container >
        </>
    )
    }
    export default  Project;