'use client'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../style/style.css'
import TextField from '@mui/material/TextField';
import Image from 'react-bootstrap/Image';
import Button from '@mui/material/Button';
import Card from 'react-bootstrap/Card';
import PhoneMissedIcon from '@mui/icons-material/PhoneMissed';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
const Contact = () =>{
    return(
        <>
        <Container >
        <Row>
        <Col md={4}>
        <Card className='bg-light m-5 shadow-lg'>
      <Card.Body>
      <Card.Title><PhoneMissedIcon style={{display:'block', width:'50px',height:'50px', margin:'auto', backgroundColor:'#45B39D',border:'2px solid #45B39D',borderRadius
      :'50%',color:'white',padding:'10px'}}/></Card.Title>
        <Card.Title className='m-4 text-center fs-6 fw-light'>+91 7087868780</Card.Title>
      </Card.Body>
    </Card>
        </Col>
        <Col md={4}>
        <Card className='bg-light m-5 shadow-lg'>
      <Card.Body>
        <Card.Title><LocationOnIcon style={{display:'block', width:'50px',height:'50px', margin:'auto', backgroundColor:'#45B39D',border:'2px solid #45B39D',borderRadius
      :'50%',color:'white',padding:'10px'}}/></Card.Title>
        <Card.Title className='m-4 text-center fs-6 fw-light'>IT Park, Panchkula</Card.Title>
      </Card.Body>
    </Card>
        </Col>
        <Col md={4}>
        <Card className='bg-light m-5 shadow-lg'>
      <Card.Body>
      <Card.Title><EmailIcon style={{display:'block', width:'50px',height:'50px', margin:'auto', backgroundColor:'#45B39D',border:'2px solid #45B39D',borderRadius
      :'50%',color:'white',padding:'10px'}}/></Card.Title>
        <Card.Title className='m-4 text-center fs-6 fw-light'>help@alexsolution.in</Card.Title>
      </Card.Body>
    </Card>
        </Col>
      </Row>
      </Container >
      <hr />
        <Container >
        <Row>
        <Col xs={12} className='p-4'>
          <h2 className='fw-light text-center my-3'>CONTACT US</h2>
        </Col>
      </Row>
      </Container >
        <Container className='mb-3'>
        <Row>
        <Col md={6}>
          <h1 className='fw-light p-2'>Want to know more? <br />
Let’s communicate!</h1>
<h5 className='fw-light my-4 p-4'>Fill up the form below and get ready to talk with our experts who will connect with you shortly to discuss the project.</h5>
          <Image src="/contact.jpg" className='p-5' alt='loading..' fluid />
        </Col>
        <Col md={6} className='bg-light shadow-lg p-5'>
        <TextField fullWidth
          id="standard-textarea"
          label="Full Name"
          multiline
          variant="outlined"
          className='my-3'
        />
        <TextField fullWidth
          id="standard-textarea"
          label="Contact"
          multiline
          variant="outlined"
          className='my-3'
        />
        <TextField fullWidth
          id="standard-textarea"
          label="Email"
          multiline
          variant="outlined"
          className='my-3'
        />
        <TextField fullWidth
          id="standard-textarea"
          label="Subject"
          multiline
          variant="outlined"
          className='my-3'
        />
         <TextField fullWidth
          id="outlined-multiline-static"
          className='my-3'
          label="Message"
          multiline
          rows={4}
        />
        <Button variant="contained" className='mt-4' style={{backgroundColor:'#45B39D', display:'block', width:'100px',margin:'auto'}}>Submit</Button>
        
        </Col>
      </Row>
      </Container >
      <Container >
        <Row>
        <Col xs={12} className='mt-5'>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1716.0660015692586!2d76.84659117436821!3d30.658411188431355!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390f957cdaaadec9%3A0xa845a78d505034b8!2sAlex%20Solution!5e0!3m2!1sen!2sin!4v1695452273772!5m2!1sen!2sin" width="100%" height="450"  loading="lazy"></iframe>
          
        </Col>
      </Row>
      </Container >
      </>
    )
    }
    export default Contact;