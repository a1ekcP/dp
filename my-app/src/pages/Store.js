import SingleProduct from '../components/SingleProduct';
import ContextValues from '../context/ContextValues';
import PageTitle from '../components/PageTitle';
import StoreInputSearch from '../components/StoreInputSearch';
import { Row, Container } from 'react-bootstrap';
import { useContext, useState } from 'react';

function Store({titleBlock}){
    const {productsStoreArr} = useContext(ContextValues);
    const [searchValue, setSearchValue] = useState('');
    
    return (
        <Container>
            <section>
                <PageTitle titleBlock={titleBlock}/>
            </section>

            <section>
                <StoreInputSearch searchValue={searchValue} setSearchValue={setSearchValue}/>

                <Row xs={1} md={3} className="g-4 mb-4">
                    {productsStoreArr.filter(el => el.name.toLowerCase().includes(searchValue.toLowerCase())).map(el => <SingleProduct key={el.id} productStore={el}/>)}
                </Row>
            </section>
        </Container>
    )
}

export default Store;