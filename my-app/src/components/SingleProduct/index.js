import styles from "./SingleProduct.module.scss";
import { Card, Col, Button } from 'react-bootstrap';
import { useState } from 'react';
import { Link } from "react-router-dom";
import FastShow from "../../components/FastShow";

function SingleProduct({productStore}){
    const [modalShow, setModalShow] = useState(false);

    return (
        <Col>
        {/* 'position-relative product__card' */}
            <Card className={styles.item}>
                <Link 
                    to={`/store/${productStore.id}`}
                    className='d-block'>
                    <div>
                        <Card.Img 
                            variant="top" 
                            src={productStore.imgSrc}
                            alt={productStore.name} />
                    </div>
                    <Card.Body className="text-center">
                        <Card.Title>{productStore.name}</Card.Title>
                        <Card.Text>
                            {productStore.price} UAH
                        </Card.Text>
                    </Card.Body>
                </Link>
                <div className={styles.buttonBlock}>
                    <Button 
                        className={styles.button}
                        variant="primary" 
                        onClick={() => setModalShow(true)}>
                            Быстрый просмотр
                    </Button>
                    <FastShow
                        productStore={productStore}
                        show={modalShow} 
                        onHide={() => setModalShow(false)}/>
                </div>
            </Card>
        </Col>
    )
}

export default SingleProduct;