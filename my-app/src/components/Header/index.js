import { Container, Row, Col } from 'react-bootstrap';
import { NavLink, Link } from "react-router-dom";
import { useContext } from 'react';
import styles from "./Header.module.scss"
import Cart from '../Cart';
import Menu from './Menu';
import ContextValues from '../../context/ContextValues';

function Header(){
   const { aboutObj, connectObj, storeObj} = useContext(ContextValues);

    return (
      <header>
        <Container>
            <Row className="py-5 align-items-center">
                <Col xs={6} lg={4}>
                        <Link to="/" className="fw-bold">
                     <h1 className={`${styles.title} text-uppercase`}>
                            Пог<span>р</span>ає<span>м</span>о
                    </h1>
                        </Link>
                </Col>
                <Col xs={6} lg={8}>
                  <Row className='align-items-center justify-content-end'>
                     <Col xs='auto' lg={10}>
                        <Menu styles={styles}/>
                        <nav className={styles.nav}>
                           <ul>
                              <li>
                                 <NavLink 
                                    to="/" 
                                    className={({ isActive }) => isActive ? styles.activeLink : undefined}>
                                       Головна
                                 </NavLink>
                              </li>
                              <li>
                                 <NavLink to="/store" className={({ isActive }) => isActive ? styles.activeLink: undefined}>
                                    {storeObj.title}
                                 </NavLink>
                              </li>
                              <li>
                                 <NavLink to="/about" className={({ isActive }) => isActive ? styles.activeLink : undefined}>
                                    {aboutObj.title}
                                 </NavLink>
                              </li>
                              <li>
                                 <NavLink to="/social" className={({ isActive }) => isActive ? styles.activeLink: undefined}>
                                    {connectObj.title}
                                 </NavLink>
                              </li>
                           </ul>
                        </nav>
                     </Col>
                     <Col xs='auto' lg={2} className='text-end'>
                        <Cart/>
                     </Col>
                  </Row>
                </Col>
            </Row>
        </Container>
      </header>

    )
}

export default Header;