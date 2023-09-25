'use client'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '@/app/style/style.css'
import { Image } from 'react-bootstrap';
import data from '@/app/data.json'
const Service = ({params}:any) =>{
  const userData = data.filter((item)=>item.id==params.service)  
return(
    <>
    <Container className='my-3'>
        <Row style={{backgroundColor:'#0CAEEA'}}>
        <Col xs={12}>
        <h2 className='fw-light text-center p-3 text-light my-4 text-uppercase'>{userData[0].name}</h2>
        </Col>
        <hr className='text-light'/>
              <Col xs={6}>
          <Image className='ms-5' src={`/home/${userData[0].id}.png`} alt='loading' fluid />
        </Col>
        <Col md={6} className='p-2'>
          <h6 className='fw-light p-3 mt-3 text-secondary text-light'>{userData[0].description}</h6>
        </Col> 
      </Row>
      </Container >
      
      </>
)
}
export default Service;