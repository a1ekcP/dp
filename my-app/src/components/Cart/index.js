import styles from './Cart.module.scss';
import '../../styles/style.css';
import { useContext } from 'react';
import { Offcanvas, Row, Col, Button, CloseButton } from 'react-bootstrap';
import ContextValues from '../../context/ContextValues';
import TotalPrice from '../TotalPrice';
import CartLinkIcon from '../CartLinkIcon';

function Cart(){

const { filteredStoreArr, removeFromCart, addProd, minusProd, show, handleClose, handleShow } = useContext(ContextValues);
    
  return (
    <>
      <CartLinkIcon handleShow={handleShow} filteredStoreArr={filteredStoreArr}/>

      <Offcanvas show={show} onHide={handleClose} placement='end'>

        <Offcanvas.Header closeButton className={styles.header}>
          <Offcanvas.Title className={styles.title}>Моя корзина</Offcanvas.Title>
        </Offcanvas.Header>

        <Offcanvas.Body className={styles.body}>
          {filteredStoreArr.length ? 
            <div className={styles.items}> 
              {filteredStoreArr.map(el => 
                { return <Row 
                           key={el.id} 
                           xs={1} 
                           className='align-items-center pb-4 border-bottom mb-4'>
                            <Col className='mb-2'>
                              <Row className='align-items-center'>
                                <Col xs={4} className='d-flex mr-4'>
                                  <img width={100} src={'.'+ el.imgSrc}/>
                                </Col>
                                <Col xs={6}>
                                  <h3>
                                    <i>{el.name}</i>
                                  </h3>
                                  <div className='fw-bold'>
                                    {el.price} UAH
                                  </div>
                                </Col>
                                <Col xs={2}>
                                  <CloseButton onClick={() => removeFromCart(el.id)} />
                                </Col>
                              </Row>
                            </Col>
                            <Col>
                              <Row className='align-items-center'>
                                <Col 
                                  xs={8} 
                                  className={styles.countItem}>
                                  <Button 
                                    disabled = {el.count === 1} 
                                    onClick={() => minusProd(el.id)}>
                                      -
                                  </Button>
                                  <div>{el.count}</div>
                                  <Button 
                                    onClick={() => addProd(el.id)}>
                                      +
                                  </Button>
                                </Col>
                                <Col xs={4}><b>{el.count * el.price} UAH</b></Col>
                              </Row>
                            </Col>
                          </Row>
                })
              }
            </div>  : 
            <div className={styles.emptyCart}>
              <img 
               src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNfqVQbUZWNPqWBQAMYxstwlH-EqwLxVeUVw&usqp=CAU'
               alt='empty cart'
              />
              <h3>Товар відстуній</h3>
            </div>
          }
          <div className={styles.footer}>
            <div className={styles.total}>
              <p className={styles.title}>Итого</p>
              <p className={styles.dushed}></p>
              <TotalPrice/>
            </div>
            <Button className='w-100' variant="success">
              Оформити замовлення
            </Button>
          </div>
        </Offcanvas.Body>
        
      </Offcanvas>
    </>
  );
}

export default Cart;