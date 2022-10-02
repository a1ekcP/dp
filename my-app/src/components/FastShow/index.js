import { Col, Row, Card, Button, Modal, Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useContext } from "react";
import ContextValues from "../../context/ContextValues";

function FastShow(props){
    const { addToCart, filteredStoreArr } = useContext(ContextValues);

    return (
        <div>
            <Modal 
                {...props} 
                size="xl" 
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                </Modal.Header>
                <Modal.Body>
                    <Row>
                        <Col>
                            <Carousel>
                                <Carousel.Item>
                                    <img
                                    className="d-block w-100"
                                    src={props.productStore.imgSrc}
                                    alt="First slide"
                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                    className="d-block w-100"
                                    src={props.productStore.imgSrc2}
                                    alt="Second slide"
                                    />
                                </Carousel.Item>
                            </Carousel>   
                        </Col>
                        <Col className="px-4">
                            <Card>
                                <h2 
                                    style={{fontSize: 36, fontWeight: 700, marginBottom: 18}}>
                                        {props.productStore.name}
                                </h2>
                                <p style={{fontSize: 24, marginBottom: 18}}>
                                    Артикул: {props.productStore.article}
                                </p>
                                <p style={{fontSize: 24, color: "blue"}}>
                                    {props.productStore.price} UAH
                                </p>

                                {
                                    filteredStoreArr.includes(props.productStore) ? 
                                        <Button 
                                            variant="info"
                                            disabled 
                                            className='my-4'>
                                                Положить в корзину
                                        </Button> : 
                                        <Button 
                                            variant="info"
                                            onClick={() => addToCart(props.productStore)} 
                                            className='my-4'>
                                                Положить в корзину
                                        </Button>
                                }
                                <Link to={`/store/${props.productStore.id}`}>Смотреть подробную информацию</Link>
                                {/* <Button onClick={() => addToCart(props.productStore.id)} className='mb-4'>Положить в корзину</Button> */}
                            </Card>
                        </Col>
                    </Row>
                </Modal.Body>
            </Modal>
        </div>
    )
}

export default FastShow;