'use client'
import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Image } from 'react-bootstrap';
import data from '@/app/data.json';
import 'bootstrap/dist/css/bootstrap.min.css';


const Service = (props:any) => {

  return (
    <>
      <Container className="my-3">
        <Row style={{ backgroundColor: '#6082B6' }}>
          <Col xs={12}>
            <h2 className="fw-light text-center p-3 text-light my-4 text-uppercase">
              {props.name}
            </h2>
          </Col>
          <hr className="text-light" />
          <Col xs={6}>
            <Image className="ms-5" src={`/home/${props.id}.png`} alt="loading" fluid />
          </Col>
          <Col md={6} className="p-2">
            <h6 className="fw-light p-4 mt-3 text-light">
              {props.description}
            </h6>
          </Col>
        </Row>
      </Container>
    </>
    
  
  );
};

export default Service;

// export function generateStaticParams() {
//   return[
//     {id:'2023001'},
//     {id:'2023002'},
//     {id:'2023003'},
//     {id:'2023004'},
//     {id:'2023005'},
//     {id:'2023006'},
//     {id:'2023007'},
//     {id:'2023008'}

//   ]
// }


