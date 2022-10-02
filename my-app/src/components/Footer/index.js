// import './footer.css'
import styles from './Footer.module.scss';
import { Form, Row, Col, Container } from 'react-bootstrap';
import { Link } from "react-router-dom";


function Footer(){
    return (
        <footer className='mt-5'>
            <Container>
                <div className={`${styles.wrap} p-4`}>
                    <Row className={`${styles.nav} py-4 justify-content-between text-center text-lg-start`}>
                        <Col className="mb-4" xs={12} sm={6} lg={3}>
                            <h4 className='mb-4 fw-bold'>Магазин «Поиграємо»</h4>
                                
                            <p>вул. Мініна, 1, Київ</p>
                            <p>02156, Україна</p>
                            <a href='+380951422308'>+38 095 142-23-08</a>
                            <p><a href='info@my-domain.ru'>info@my-domain.ru</a></p>
                        </Col>
                        <Col className="mb-4" xs={12} sm={6} lg={3}>
                            <h4 className='mb-4 fw-bold'>Заходьте</h4>
                                
                            <p><Link to="/store">Інтернет-магазин</Link></p>
                            <p><Link to="/about">Про нас</Link></p>
                            <p><Link to="/social">Зв'язок</Link></p>
                        </Col>
                        <Col className="mb-4" xs={12} sm={6} lg={3}>
                           <h4 className='mb-4 fw-bold'>Інформація</h4>
        
                           <p><Link to='/qaa'>Відповіді та запитання</Link></p>
                           <p><Link to='/deliveryAndReturn'>Доставка та повернення</Link></p>
                           <p><Link to='/politicy'>Політика магазину</Link></p>
                        </Col>
                        <Col className="mb-4" xs={12} sm={6} lg={3}>
                            <h4 className='mb-4 fw-bold'>Соцмережі</h4>
                                
                            <p><a href="https://www.facebook.com/">Facebook</a></p>
                            <p><a href="https://www.instagram.com/">Instagram</a></p>
                            <p><a href="https://pinterest.com/">Pinterest</a></p>                   
                        </Col>
                    </Row>
                    <Form className={styles.ContactUs}>
                        <Row className={`${styles.subscribe} align-items-center justify-content-center py-4 text-center`}>
                            <Col md={6} xl={4} className='mb-3'>
                                <h3 className='text-uppercase fw-bold' style={{fontSize: 32}}>Нужбо грати</h3>
                                <p className='mb-0'>Підпишись на свіжі новини</p>
                            </Col>
                            <Col md={6} xl={6}>
                                <Row className='align-items-center'>
                                    <Col md={8} xl={10} className="mb-4 mb-md-0">
                                        <Form.Group 
                                          className="h-100"            
                                          controlId="formBasicEmail">
                                            <Form.Control 
                                                className={`${styles.input} h-100`} 
                                                type="email" 
                                                placeholder="Enter email" />
                                        </Form.Group>
                                    </Col>
                                    <Col md={4} xl={2}>
                                        <button className={`${styles.button} h-100 w-100 px-4 py-2`}type="submit">OK</button>
                                    </Col>
                                </Row>        
                            </Col>
                        </Row>
                    </Form> 
                </div>
            </Container>
        </footer>
    )
}

export default Footer;