import styles from './CartLinkIcon.module.scss'
import { Badge } from 'react-bootstrap';

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
                src='data:image/png;base64,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'
                alt='cart'/>
        </a>
    )
}

export default CartLinkIcon;