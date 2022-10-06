import { useState, useContext } from 'react';
import { Offcanvas } from 'react-bootstrap';
import { Link } from "react-router-dom";
import ContextValues from '../../context/ContextValues';

function Menu({styles}){
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const { aboutObj, socialObj, storeObj} = useContext(ContextValues);

    return (
        <div className={styles.menuBurger}>
            <div className={styles.menuBurgerBtn}>
                <a onClick={handleShow}>
                    <img 
                        width={36} 
                        src='./icon/burgermenu.png'/>
                </a>
            </div>
            <Offcanvas 
              show={show} 
              onHide={handleClose}
              className={styles.menuBurger}>
                <Offcanvas.Header className={styles.menuHeader} closeButton/>
                <Offcanvas.Body className={styles.menuMobile} >
                    <nav className={styles.navMobile}>
                        <ul className='list-unstyled'>
                            <li className="me-md-4 me-xl-5">
                                <Link to="/" onClick={handleClose}>Головна</Link>
                            </li>
                            <li className="me-md-4 me-xl-5">
                                <Link to="/store" onClick={handleClose}>{storeObj.title}</Link>
                            </li>
                            <li className="me-md-4 me-xl-5">
                               <Link to="/about" onClick={handleClose}>{aboutObj.title}</Link>
                            </li>
                            <li className="me-md-4 me-xl-5">
                               <Link to="/social" onClick={handleClose}>{socialObj.title}</Link>
                            </li>
                        </ul>
                    </nav>
                </Offcanvas.Body>
            </Offcanvas>
        </div>
    )
}

export default Menu;