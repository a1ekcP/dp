import '../styles/style.scss';
import { Card, Col, Row, Container } from 'react-bootstrap';
// import { useContext } from 'react';
import PageTitle from '../components/PageTitle';
// import ContextValues from '../context/ContextValues';
import SocialForm from '../components/SocialForm';
import { useEffect, useState } from 'react';

function Social({titleBlock}){
   const [adressShopsArr, setAdressShopsArr] = useState([]);

   useEffect(() => {
      setAdressShopsArr([
        {
          id: 1,
          title : 'Магазин 1',
          adress: 'вул. Братиславська, 32а, Київ',
          index: '02156',
          country: 'Україна',
          tell: '+38 095 142-23-08'
        },
        {
          id: 2,
          title : 'Магазин 2',
          adress: 'вул. Довженко, 7, Київ',
          index: '38420',
          country: 'Україна',
          tell: '+38 123 456-78-90'
        },
        {
          id: 3,
          title : 'Магазин 3',
          adress: 'вул. Мініна, 1, Київ',
          index: '41062',
          country: 'Україна',
          tell: '+38 098 765-43-21'
          }
      ])
    }, [])


    return (
        	<Container>
         	<PageTitle titleBlock={titleBlock}/>
      	   <section className="mb-4">
               <Row xs={1} md={2}>
                  <Col md={4}>
         	         <Row className="flex-column text-center gap-4">
                        <Col>
                           <Card>
                              <Card.Title className='parTitle'>
											Приходьте до нас
										</Card.Title>
                              <Card.Body>
                                 <p>
                                    вул. Братиславська, 32а, Київ
											</p>
                                 <p>
                                 38420, Україна
											</p>
                                 <p>
												<a href="+71234567890">+38 095 142-23-08</a>
											</p>
                                 <p>
												<a href='a1ekc.p85@gmail.com'>a1ekc.p85@gmail.com</a>
											</p>   
                              </Card.Body>
                           </Card>
                        </Col>
                     	<Col>
                           <Card>
                              <Card.Title className='parTitle'>
											Години роботи
										</Card.Title>
										<Card.Body>
                                 <p>ПН–ПТ: 12:00–23:00</p>
                                 <p>Суббота: 11:00–00:00</p>
                                 <p>Неділя: 12:00–00:00</p> 
                              </Card.Body>
                           </Card>
                       </Col>
                     </Row>
                  </Col>
                  <Col md={8}>
                     <SocialForm/>
                  </Col>
               </Row>
            </section>

            <section className="mb-5">
              <h2 className="text-center mb-5 fw-bold parTitle">Магазини</h2>
              <Row xs={1} md={3} className='g-4 justify-content-center px-4'>
                  {adressShopsArr.map(el => {
                     return (
                        <Col key={el.id} className='text-center'>
                           <Card>
                              <h3 className='fw-bold mb-3'>{el.title}</h3>
                              <p>{el.adress}</p>
                              <p>{el.index}, {el.country}</p>
                              <p><a href={el.tell.replaceAll('-', ' ').split(' ').join('')}>{el.tell}</a></p>
                           </Card>
                       </Col>
                     )
                  })}
            	</Row>
            </section>
         </Container>
    	)
}

export default Social;