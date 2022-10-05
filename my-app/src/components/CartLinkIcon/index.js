import styles from './CartLinkIcon.module.scss'
import { Badge } from 'react-bootstrap';
// import cartIcon from '../../../public/icon/carticon.png'

function CartLinkIcon({handleShow, filteredStoreArr}){
    // console.log(filteredStoreArr)
    return (
        // 'cart-link'
        <a 
          className={styles.link} 
          href='#' 
          variant="primary" 
          onClick={handleShow}>
            <Badge 
                className={styles.icon} 
                pill 
                bg="warning" 
                text="dark">
                    {filteredStoreArr.length}
            </Badge>
            <img 
                height={26}
                src="./icon/carticon.png"
                alt='cart'/>
        </a>
    )
}

export default CartLinkIcon;