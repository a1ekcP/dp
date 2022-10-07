import { useContext} from 'react';
import { Container } from 'react-bootstrap';
import ContextValues from '../context/ContextValues';
import FreshProducts from '../components/FreshProduct';
import HomeMain from '../components/HomeMain'

function Home(){
    const { productsStoreArr } = useContext(ContextValues);
    
    return (
      <Container>
         <HomeMain/>
         <FreshProducts freshProducts={productsStoreArr.filter(el => el.id > (productsStoreArr.length - 3))}/>
      </Container>
    )
}

export default Home;