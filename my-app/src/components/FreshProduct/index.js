import styles from "./FreshProduct.module.scss";
import { Row, Col, Card, Button } from 'react-bootstrap';
import { useContext } from 'react';
import ContextValues from '../../context/ContextValues';
import { Link } from "react-router-dom";

function FreshProducts({freshProducts}){
    const { addToCart, filteredStoreArr } = useContext(ContextValues);

    return (
        <section className={styles.FreshProducts}>
            <h2 className={styles.title}>СВЕЖИЕ ПОСТУПЛЕНИЯ</h2>
            <Row className={styles.row}>
                {freshProducts.map(el => 
                    <Col key={el.id} className={styles.items}>
                        <Card className={styles.card}>
                            <Link 
                              to={`/store/${el.id}`}
                              className='d-block'>
                                <Card.Img 
                                  variant="top" 
                                  src= {el.imgSrc}/>
                            </Link>
                            <Card.Body className={`text-center ${styles.body}`}>
                                <div className={styles.text}>
                                    <Card.Title>{el.name}</Card.Title>
                                    <Card.Text>{el.price} UAH</Card.Text>
                                </div>
                                {filteredStoreArr.includes(el) ? 
                                    <Button
                                      className={styles.button}
                                      disabled>
                                        Положить в корзину
                                    </Button> : 
                                    <Button 
                                      onClick={() => addToCart(el)}
                                      className={styles.button}>
                                        Положить в корзину
                                    </Button>
                                }
                            </Card.Body>
                        </Card>
                    </Col>)
                }
            </Row>
        </section>
    )
}

export default FreshProducts;