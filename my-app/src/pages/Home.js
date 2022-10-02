import { useContext} from 'react';
import { Container } from 'react-bootstrap';
import ContextValues from '../context/ContextValues';
import FreshProducts from '../components/FreshProduct';
import HomeCarusel from '../components/HomeCarusel'

function Home(){
    const { productsStoreArr } = useContext(ContextValues);
    
    return (
      <Container>
         <HomeCarusel/>
         <FreshProducts freshProducts={productsStoreArr.filter(el => el.id > (productsStoreArr.length - 3))}/>
      </Container>
    )
}

export default Home;