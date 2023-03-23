import axios from "axios";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import Layout from "./Layout";
import Cart from "./shop/Cart";
import CateList from "./shop/CateList";
import Itm from "./shop/Itm";
import List from "./shop/List";
import ListAll from "./shop/ListAll";
import SearchResult from "./shop/SearchResult";

const App = () => {

    const [shopData, setShopData] = useState([]);
    const [cart, setCart] = useState([]);

    const url = 'https://desipossa.github.io/shop_cra/assets/data.json'


    const getData = async () => {
        const r = await axios.get(url);
        setShopData(r.data);
    }



    useEffect(() => {
        getData();
    }, []);

    const originalItm = shopData.map(it => it.category);
    const filterItm = originalItm.filter(Boolean);
    const categoryItm = [...new Set(filterItm)];

    console.log(categoryItm)


    return (

        <Routes>
            <Route path="/" element={<Layout categoryItm={categoryItm} cart={Cart} />} >
                <Route index element={<Main />} />
                <Route path="/all" element={<ListAll shopData={shopData} />} />
                <Route path="/:cate" element={<CateList shopData={shopData} />} />
                <Route path="detail/:itm" element={<Itm shopData={shopData} cart={cart} setCart={setCart} />} />
                <Route path="search" element={<SearchResult shopData={shopData} />} />
                <Route path="cart" element={<cart shopData={shopData} cart={cart} setCart={setCart} />} />

            </Route>
        </Routes>
    )
}

export default App;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               