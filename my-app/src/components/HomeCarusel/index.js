import styles from "./HomeCarusel.module.scss"
import { Link } from "react-router-dom";
import { Card, Carousel} from 'react-bootstrap';

function HomeCarusel(){

   return (
      <section className={`${styles.presentation} mb-5 py-4`}>

         <div className={styles.wrapper}>
            <div>
               <Carousel>
                  <Carousel.Item>
                     <img
                      className="d-block w-100"
                      src="https://static.wixstatic.com/media/ea26fd_d6707452dba0495a8a6d57650c358dbf~mv2_d_2000_1265_s_2.jpg/v1/fill/w_602,h_620,al_l,q_85,usm_0.66_1.00_0.01,enc_auto/ea26fd_d6707452dba0495a8a6d57650c358dbf~mv2_d_2000_1265_s_2.jpg"
                      alt="First slide"
                     />
                     <Carousel.Caption className={styles.caption}>
                        <h3>Играем вместе</h3>
                        <p>Новая колекция поездов</p>
                        <Link 
                         to="/store"
                         className={`${styles.button} ${styles.red}`} 
                         type="submit">В магазин
                        </Link>
                     </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                     <img
                      className="d-block w-100"
                      src="https://static.wixstatic.com/media/ea26fd_d6d73744d2d8482695fdd417001ddd5f~mv2_d_3161_2000_s_2.jpg/v1/fill/w_602,h_620,al_l,q_85,usm_0.66_1.00_0.01,enc_auto/ea26fd_d6d73744d2d8482695fdd417001ddd5f~mv2_d_3161_2000_s_2.jpg"
                      alt="Second slide"
                     />
                     <Carousel.Caption className={`fs-2 fw-bold ${styles.caption}`}>
                        <h3>Детки растут</h3>
                        <p>С нашими развивающими игрушками</p>
                        <Link 
                         to="/store" 
                         className={`${styles.button} ${styles.red}`} 
                         type="submit">В магазин
                        </Link>
                     </Carousel.Caption>
                  </Carousel.Item>
               </Carousel>
            </div>
            <div>
               <Card className='h-100'>
                  <Card.Img
                   src="https://static.wixstatic.com/media/ea26fd_28f3dfe8832f4ac1a2fc0f21095e5d3d~mv2_d_2000_1887_s_2.jpg/v1/fill/w_560,h_560,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/ea26fd_28f3dfe8832f4ac1a2fc0f21095e5d3d~mv2_d_2000_1887_s_2.jpg"
                   alt="Second slide" />
                  <Card.ImgOverlay className="h-25">
                     <Card.Title className='fs-2 fw-bold mb-4'>
                        Про наш магазин
                     </Card.Title>
                     <Link 
                      to="/about" 
                      className={`${styles.button} ${styles.blue}`}>
                        Дiзнатись
                     </Link>
                  </Card.ImgOverlay>
               </Card> 
            </div>
            <div>
               <img 
                  src="https://static.wixstatic.com/media/ea26fd_5bad1846a1934c63a36fd7e3af0c10c3~mv2_d_2000_2000_s_2.jpg/v1/fill/w_254,h_240,al_c,q_85,usm_0.66_1.00_0.01/ea26fd_5bad1846a1934c63a36fd7e3af0c10c3~mv2_d_2000_2000_s_2.webp"
                  alt="pyramid"/>
            </div>
            <div>
               <img 
                  src="https://static.wixstatic.com/media/ea26fd_d9cc0e15ec5e4360a0497d8bd1123d31~mv2_d_2000_2000_s_2.jpg/v1/fill/w_254,h_320,al_c,q_85,usm_0.66_1.00_0.01/ea26fd_d9cc0e15ec5e4360a0497d8bd1123d31~mv2_d_2000_2000_s_2.webp"
                  alt="train"/>
            </div>
            <div>
               <Card>
                  <Card.Img
                   src="https://static.wixstatic.com/media/ea26fd_6bced28aa460434dbf4a50f7e847d646~mv2_d_3632_4826_s_4_2.jpg/v1/crop/x_0,y_929,w_3632,h_2413/fill/w_602,h_400,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/ea26fd_6bced28aa460434dbf4a50f7e847d646~mv2_d_3632_4826_s_4_2.jpg"
                   alt="Second slide" />
                  <Card.ImgOverlay className="h-25">
                     <Card.Title className='fs-2 fw-bold w-75 mb-4'>
                        Знижка 20% на всi iграшковi потяги
                     </Card.Title>
                     <Link 
                     to="/store" 
                     className={`${styles.button} ${styles.blue}`}>
                        В магазин
                     </Link>
                  </Card.ImgOverlay>
               </Card>
            </div>
         </div>
      </section>
    )
}

export default HomeCarusel;