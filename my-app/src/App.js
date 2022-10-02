import './App.css';
import { useEffect, useState } from 'react';
import ContextValues from './context/ContextValues'
import { Routes, Route } from "react-router-dom";
import Layout from './components/Layout';
import Home from './pages/Home';
import About from "./pages/About"
import Social from './pages/Social';
import Store from './pages/Store';
import Product from './components/Product';
import NotFoundPage from "./components/NotFoundPage";
import QAA from './components/QAA';
import Delivery from "./components/Delivery";
import Politicy from "./components/Politicy";

function App() {
  const [productsStoreArr, setProductsStoreArr] = useState([]);
  const [filteredStoreArr, setFilteredStoreArr] = useState([]);
  const [storeObj, setStoreObj] = useState({});
  const [aboutObj, setAboutObj] = useState({});
  const [connectObj, setConnectObj] = useState({});
  const [adressShopsArr, setAdressShopsArr] = useState([]);
  const [show, setShow] = useState(false);
  


  useEffect(() => {
    setAdressShopsArr([
      {
        id: 1,
        title : 'Магазин 1',
        adress: 'ул. Братиславська, 32а, Київ',
        index: '02156',
        country: 'Україна',
        tell: '+38 095 142-23-08'
      },
      {
        id: 2,
        title : 'Магазин 2',
        adress: 'ул. Довженко, 7, Київ',
        index: '38420',
        country: 'Україна',
        tell: '+38 123 456-78-90'
      },
      {
        id: 3,
        title : 'Магазин 3',
        adress: 'ул. Мініна, 1, Київ',
        index: '41062',
        country: 'Україна',
        tell: '+38 098 765-43-21'
        }
    ])
  }, [])

  useEffect(() => {
    setStoreObj(
      {
        title: 'Магазин',
        imgSrc: './img/store/title.webp'
      }
    )
  }, []);

  useEffect(() => {
    setAboutObj(
      {
        title: 'Про нас',
        imgSrc: './img/about-us/about-us.webp'
      })
  }, []);

  useEffect(() => {
    setConnectObj(
      {
        title: "Зв'язок",
        imgSrc: './img/connect/connect.webp'
      })
  }, []);

  useEffect(() => {
    setProductsStoreArr([
      {
        "id": 1,
        "name": "Acounts",
        "article": '0001',
        "imgSrc": './img/store/1-1.webp',
        "imgSrc2": './img/store/1-2.webp',
        "price": 270,
        "description": 'Это информация о товаре. Расскажите подробно, что он из себя представляет, и перечислите всю необходимую информацию: размеры, материалы, инструкции по уходу и т. д. Это также хорошая возможность сообщить, в чем особенность вашей продукции и какую выгоду покупатели получат в итоге. Подробные сведения о товаре помогут вашим посетителям определиться с покупкой.',
        "count": 1,
        "addToCart": false
      },
      {
        "id": 2,
        "name": 'Peg-top',
        "article": '0002',
        "imgSrc": './img/store/2-1.webp',
        "imgSrc2": './img/store/2-2.webp',
        "price": 50,
        "description": 'Это информация о товаре. Расскажите подробно, что он из себя представляет, и перечислите всю необходимую информацию: размеры, материалы, инструкции по уходу и т. д. Это также хорошая возможность сообщить, в чем особенность вашей продукции и какую выгоду покупатели получат в итоге. Подробные сведения о товаре помогут вашим посетителям определиться с покупкой.',
        "count": 1,
        "addToCart": false
      },
      {
        "id": 3,
        "name": 'Wooden-car',
        "article": '0003',
        "imgSrc": './img/store/3-1.webp',
        "imgSrc2": './img/store/3-2.webp',
        "price": 120,
        "description": 'Это информация о товаре. Расскажите подробно, что он из себя представляет, и перечислите всю необходимую информацию: размеры, материалы, инструкции по уходу и т. д. Это также хорошая возможность сообщить, в чем особенность вашей продукции и какую выгоду покупатели получат в итоге. Подробные сведения о товаре помогут вашим посетителям определиться с покупкой.',
        "count": 1,
        "addToCart": false
      },
      {
        "id": 4,
        "name": 'Pyramid',
        "article": '0004',
        "imgSrc": './img/store/4-1.webp',
        "imgSrc2": './img/store/4-1.webp',
        "price": 150,
        "description": 'Это информация о товаре. Расскажите подробно, что он из себя представляет, и перечислите всю необходимую информацию: размеры, материалы, инструкции по уходу и т. д. Это также хорошая возможность сообщить, в чем особенность вашей продукции и какую выгоду покупатели получат в итоге. Подробные сведения о товаре помогут вашим посетителям определиться с покупкой.',
        "count": 1,
        "addToCart": false
      },
      {
        "id": 5,
        "name": 'Skittles',
        "article": '0005',
        "imgSrc": './img/store/5-1.webp',
        "imgSrc2": './img/store/5-1.webp',
        "price": 540,
        "description": 'Это информация о товаре. Расскажите подробно, что он из себя представляет, и перечислите всю необходимую информацию: размеры, материалы, инструкции по уходу и т. д. Это также хорошая возможность сообщить, в чем особенность вашей продукции и какую выгоду покупатели получат в итоге. Подробные сведения о товаре помогут вашим посетителям определиться с покупкой.',
        "count": 1,
        "addToCart": false
      },
      {
        "id": 6,
        "name": 'Figures',
        "article": '0006',
        "imgSrc": './img/store/6-1.webp',
        "imgSrc2": './img/store/6-1.webp',
        "price": 180,
        "description": 'Это информация о товаре. Расскажите подробно, что он из себя представляет, и перечислите всю необходимую информацию: размеры, материалы, инструкции по уходу и т. д. Это также хорошая возможность сообщить, в чем особенность вашей продукции и какую выгоду покупатели получат в итоге. Подробные сведения о товаре помогут вашим посетителям определиться с покупкой.',
        "count": 1,
        "addToCart": false
      },
      {
        "id": 7,
        "name": 'Logic-figures',
        "article": '0007',
        "imgSrc": './img/store/7-1.webp',
        "imgSrc2": './img/store/7-1.webp',
        "price": 270,
        "description": 'Это информация о товаре. Расскажите подробно, что он из себя представляет, и перечислите всю необходимую информацию: размеры, материалы, инструкции по уходу и т. д. Это также хорошая возможность сообщить, в чем особенность вашей продукции и какую выгоду покупатели получат в итоге. Подробные сведения о товаре помогут вашим посетителям определиться с покупкой.',
        "count": 1,
        "addToCart": false
      },
      {
        "id": 8,
        "name": 'Constructor',
        "article": '0008',
        "imgSrc": './img/store/8-1.webp',
        "imgSrc2": './img/store/8-1.webp',
        "price": 440,
        "description": 'Это информация о товаре. Расскажите подробно, что он из себя представляет, и перечислите всю необходимую информацию: размеры, материалы, инструкции по уходу и т. д. Это также хорошая возможность сообщить, в чем особенность вашей продукции и какую выгоду покупатели получат в итоге. Подробные сведения о товаре помогут вашим посетителям определиться с покупкой.',
        "count": 1,
        "addToCart": false
      },
      {
        "id": 9,
        "name": 'Music-desk',
        "article": '0009',
        "imgSrc": './img/store/9-1.webp',
        "imgSrc2": './img/store/9-1.webp',
        "price": 230,
        "description": 'Это информация о товаре. Расскажите подробно, что он из себя представляет, и перечислите всю необходимую информацию: размеры, материалы, инструкции по уходу и т. д. Это также хорошая возможность сообщить, в чем особенность вашей продукции и какую выгоду покупатели получат в итоге. Подробные сведения о товаре помогут вашим посетителям определиться с покупкой.',
        "count": 1,
        "addToCart": false
      },
      {
        "id": 10,
        "name": 'Train',
        "article": '0010',
        "imgSrc": './img/store/10-1.webp',
        "imgSrc2": './img/store/10-1.webp',
        "price": 300,
        "description": 'Это информация о товаре. Расскажите подробно, что он из себя представляет, и перечислите всю необходимую информацию: размеры, материалы, инструкции по уходу и т. д. Это также хорошая возможность сообщить, в чем особенность вашей продукции и какую выгоду покупатели получат в итоге. Подробные сведения о товаре помогут вашим посетителям определиться с покупкой.',
        "count": 1,
        "addToCart": false
      },
      {
        "id": 11,
        "name": 'Instruments',
        "article": '0011',
        "imgSrc": './img/store/11-1.webp',
        "imgSrc2": './img/store/11-1.webp',
        "price": 260,
        "description": 'Это информация о товаре. Расскажите подробно, что он из себя представляет, и перечислите всю необходимую информацию: размеры, материалы, инструкции по уходу и т. д. Это также хорошая возможность сообщить, в чем особенность вашей продукции и какую выгоду покупатели получат в итоге. Подробные сведения о товаре помогут вашим посетителям определиться с покупкой.',
        "count": 1,
        "addToCart": false
      },
      {
        "id": 12,
        "name": 'Toy-swing',
        "article": '0012',
        "imgSrc": './img/store/12-1.webp',
        "imgSrc2": './img/store/12-1.webp',
        "price": 180,
        "description": 'Это информация о товаре. Расскажите подробно, что он из себя представляет, и перечислите всю необходимую информацию: размеры, материалы, инструкции по уходу и т. д. Это также хорошая возможность сообщить, в чем особенность вашей продукции и какую выгоду покупатели получат в итоге. Подробные сведения о товаре помогут вашим посетителям определиться с покупкой.',
        "count": 1,
        "addToCart": false
      }
    ])
  }, []);
  
  useEffect(()=>{
    setFilteredStoreArr(productsStoreArr.filter(el => el.addToCart));
  }, [productsStoreArr])


  const addToCart = (product) => {
    setProductsStoreArr(productsStoreArr.map(el => ({...el, addToCart: el.id === product.id ? true : el.addToCart})));
  }
  
  const removeFromCart = (id) => setFilteredStoreArr(prev => prev.filter(el => el.id !== id));

  const  addProd = (id) => setFilteredStoreArr(prev => prev.map(el => el.id === id ? ({...el, count: el.count += 1}) : el));
  const minusProd = (id) => setFilteredStoreArr(prev => prev.map(el => el.id === id ? ({...el, count: el.count -= 1}) : el));

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  console.log(filteredStoreArr)


  const value = {
    productsStoreArr,
    filteredStoreArr,
    adressShopsArr, 
    storeObj,
    aboutObj,
    connectObj,
    show, 
    setProductsStoreArr,
    setFilteredStoreArr, 
    removeFromCart,
    addProd,
    minusProd,
    addToCart,
    handleClose,
    handleShow,
    setShow
    }


  return (
      <ContextValues.Provider value={value}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About titleBlock={aboutObj} />} />
            <Route path="store" element={<Store titleBlock={storeObj} />}/>
            <Route path="/store/:productId" element={<Product />} />
            <Route path="social" element={<Social titleBlock={connectObj} />} />
            <Route path="qaa" element={<QAA/>}/>
            <Route path="deliveryAndReturn" element={<Delivery/>}/>
            <Route path="politicy" element={<Politicy/>}/>
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </ContextValues.Provider>
  )
}

export default App;
