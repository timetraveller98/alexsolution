'use client'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '@/app/style/style.css'
import { Image } from 'react-bootstrap';
const Service = () =>{
return(
    <>
    <Container >
        <Row>
        <Col xs={12}>
        <h2 className='fw-light text-center text-secondary p-3 my-4 shadow'>Web Development</h2>
        </Col>
      </Row>
      <hr />
      </Container >
    <Container >
        <Row>
        <Col xs={6}>
          <Image className='ms-4' src='/service/2023001.jpg' alt='loading' fluid />
        </Col>
        <Col md={6} className='p-4'>
          <h5 className='fw-light p-2 text-secondary'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero laudantium error saepe doloribus quam cum vitae nemo a cupiditate nisi accusamus optio, odio aut necessitatibus veritatis blanditiis architecto laboriosam, magnam earum voluptatibus mollitia. Laboriosam earum temporibus error sunt aperiam sequi odit deserunt aut, ullam autem velit necessitatibus delectus voluptatibus quae dolore distinctio tenetur veritatis maiores atque nulla placeat eveniet repellat. Cupiditate aperiam expedita qui unde magni corporis quam quas tempora ut culpa atque deleniti iusto est perferendis accusamus ipsam nihil delectus, impedit aliquam saepe praesentium molestiae ullam. Natus saepe blanditiis beatae ab eos necessitatibus minus, minima nostrum mollitia accusantium voluptate?</h5>
        </Col>
      </Row>
      </Container ></>
)
}
export default Service;