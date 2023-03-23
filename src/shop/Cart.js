import axios from "axios";
import { useEffect, useState } from "react";

const Cart = ({ shopData, cart, setCart }) => {
    const [sw, setW] = useState([]);
    const getKr = async () => {
        const w = await axios.get('https://api.manana.kr/exchange/rate.json')
        setW(w.data)
    }

    useEffect(() => {
        getKr()
    }, []);

    const allPrice = cart.reduce((current, next) => current + Number(next.price * next.num), 0);

    const crarModify = (id) => {
        console.log("변함 : ", id, cart);

        const newCart = cart.map(it => it.id === id ? { ...it, num: it.num + 1 } : it);

        setCart(newCart);
    }


    return (
        <>
            <h1>장바구니</h1>
            {
                cart.map(it => <li key={it.id}>
                    {it.id}
                    {it.name}
                    {it.desc}
                    {it.price}
                    {it.num}
                    <button onClick={() => crarModify(it.id)}>+</button>
                    <img src={it.img} alt="" />
                </li>)
            }

            <h2>
                합계 :
                {
                    allPrice &&
                    parseInt(allPrice * sw[1]?.rate).toLocaleString()
                }
                원
            </h2>

        </>
    )

}
export default Cart;