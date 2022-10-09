import { Col, Container, Row, Card, Button, Accordion, Carousel } from "react-bootstrap";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ContextValues from "../context/ContextValues";

function Product(){
    const { productsStoreArr, filteredStoreArr, addToCart, handleShow } = useContext(ContextValues);

    const [ product, setProduct ]= useState({})
    const { productId } = useParams();

    useEffect(() => {
        if(productsStoreArr?.length){
            setProduct(productsStoreArr.filter(el => el.id === +productId)[0]);
        }
    }, [productsStoreArr, productId]);
    

    return (
        <Container>
            <Row xs={1} md={2} className='my-4 p-4 g-4' style={{backgroundColor: 'white'}}>
                <Col>
                    <Card>
                        <Carousel>
                            <Carousel.Item>
                                <img
                                className="d-block w-100"
                                src={'.' + product.imgSrc}
                                alt={product.name}/>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                className="d-block w-100"
                                src={'.' + product.imgSrc2}
                                alt={product.name}/>
                            </Carousel.Item>
                        </Carousel>
                        <Card.Body>
                            <Card.Text>
                                Это описание товара. Здесь вы можете рассказать о товаре подробнее: напишите о размерах, материалах, уходе и любых других важных моментах.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <h2>{product.name}</h2>
                        <p>Артикул: {product.article}</p>
                        <p>{product.price} UAH</p>

                        {/* {filteredStoreArr.some(id )} */}
                        { product.addToCart ? (
                            <Button 
                              variant="warning"
                              onClick={handleShow} 
                              className='mb-4'>
                                Готово к покупке
                            </Button>
                                ) : (
                            <Button 
                                variant="info"
                                onClick={() => addToCart(product)} 
                                className='mb-4'>
                                    Положить в корзину
                            </Button>)
                        }
                        <Accordion defaultActiveKey="0">
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>О товаре</Accordion.Header>
                                <Accordion.Body>
                                    <p>
                                        {product.description}
                                    </p>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header>Возврат товара и денег</Accordion.Header>
                                <Accordion.Body>
                                    <p>
                                        Это правила и условия возврата товара и денег. Расскажите посетителям, что нужно сделать, если они захотят вернуть товар и получить назад свои деньги. Четкая и ясная политика возврата — это хороший способ построить доверительные отношения с клиентами.
                                    </p>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2">
                                <Accordion.Header>Доставка</Accordion.Header>
                                <Accordion.Body>
                                    <p>
                                        Это информация о доставке заказов. Расскажите, какие способы доставки вы предлагаете, как упаковываете заказы и сколько это стоит. Подробная информация о доставке вызывает доверие клиентов и помогает принять решение купить у вас товар.
                                    </p>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </Card>
                </Col>
            </Row>

        </Container>
    )
}

export default Product;