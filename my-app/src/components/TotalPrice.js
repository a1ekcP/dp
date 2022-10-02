import { useEffect, useState, useContext } from "react";
import ContextValues from '../context/ContextValues';


function TotalPrice(){
    const[countTotalPrice, setCountTotalPrice] = useState([]);
    const { filteredStoreArr } = useContext(ContextValues);

    useEffect(() => {
        setCountTotalPrice(filteredStoreArr.reduce((acum, el) => {
            return acum + (el.price * el.count);
        }, 0))
    }, [filteredStoreArr])

    return (
        <p style={{fontSize: 26}}>{countTotalPrice} UAH</p>
    )
}

export default TotalPrice;