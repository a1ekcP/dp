import { useState, useContext } from 'react';
import { Offcanvas } from 'react-bootstrap';
import { Link } from "react-router-dom";
import ContextValues from '../../context/ContextValues';

function Menu({styles}){
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const { aboutObj, connectObj, storeObj} = useContext(ContextValues);

    return (
        <div className={styles.menuBurger}>
            <div className={styles.menuBurgerBtn}>
                <a onClick={handleShow}>
                    <img 
                        width={36} 
                        src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAY1BMVEUAAAD///98fHwwMDDFxcX5+fnAwMA7OzszMzORkZHz8/MnJyfq6upbW1tKSkrX19eioqKKiooWFhZqamrd3d2Dg4O2trZERESwsLDQ0NDj4+NgYGCpqakgICCampoLCwsZGRnK9PiSAAADq0lEQVR4nO2d23aCMBBFo5Zb5GbVopZq//8rS0QrUOyTWbPOyewvOHuhksyMiVmwY6QDeEcN8VFDfNQQHzXERw3xUUN81BAfNcRHDfFRQ3zUEB81xEcN8ZkYRnFWJOkKlTQpstg+N4w+SsNA+RHNG7Zf0tFexqWdMawa6Vgvpammhq10pJfTjg030nk8sB8aMgreFa+GtXQWT9R3w0o6iTeqm+FaOog31r3hWTqHR87O0L5Lx/DIt+0MWX9meurOkGstM6VZmFw6g2dyc5CO4JmD2UtH8MzecGwJn1Mank3hPF/mIh3BM+x+DuYVjePdrKQjeCY1W+kIntka7mVptzA1R+kInjmaSDqCZyKzWEpn8Mqy2z3xVmkclatiFNIpPFJc6zQn6RgeOfW1tkw6hzeye0WYdQdV/ta8LWfFdG0ffYucUXGdD3tPNpHO83ISO+mQsr34l3+73EemfdTqODupQDKo4EYV5icVOnYZ/gKnyHYjpz8TQ5Gt3nCpbDQVCm4mihA1xEcN8VFDfNQQHzXERw3xUUN81BAfNcRHDfEJzzCvDtl+ico+O1T5f4Z53eCP8l3KOn9ieOIZANueZgwjrm7+Jpoa7lLpTC8m3Y0NGafb3oaGsXQaL8QPQ8Yn6DjeDa10Em/YmyF+3/cZRW/I+SXsia+GfKM0DxJnyPwI3UM0i0/pEF75XBjeH9Iea7g/pN3H1HAtuP+SGd6XYU9hGCdLh6zp/5/H/t88B/8z5P8e8v+W8r8P+dc0/OtS/r1FAPtD/j0+9UOMA6m1BVAv5a95s34VB30Lzqc46j0F0D8MoAccQB/fkdcl/pb/n1mMXpJ7noYSNcRHDfFRQ3zUEB81xEcN8VFDfNQQHzXERw3xUUN8Qjuvjf3MPZpzE5v5cxPpz76kO780GhsSnkGbjs6gpT9HmP8saNaLyX7P8+bq4A+5ncnOf64+/jLmOde7Efjvt2B71Y9ZLgK4Z4Zxom3IMYD7nnhGvebZBnDvGvv/89j9HPjDiP9zCeAeUpbq0zPKAO4D5r/Tmf9ebtoSRk/T7Z64F6Z1Z2i/pVN45Nu6KsZZOoZHzn2tjbNa6ljfqom8lZrqXhFm/bGpH32LjXQWL2yGvSdGxf24f9hK53k57bRDuuNa2zTVTB+/5dkqvrcPreGkQkQyqlB+DEdOJvM0UZwVSbpCJU2KLLZjpQBnouhQQ3zUEB81xEcN8VFDfNQQHzXERw3xUUN81BAfNcRHDfFRQ3x+AHaZf2OZLim7AAAAAElFTkSuQmCC'/>
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
                               <Link to="/social" onClick={handleClose}>{connectObj.title}</Link>
                            </li>
                        </ul>
                    </nav>
                </Offcanvas.Body>
            </Offcanvas>
        </div>
    )
}

export default Menu;