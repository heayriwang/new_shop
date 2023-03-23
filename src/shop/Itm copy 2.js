import { useNavigate, useParams } from "react-router-dom";

const Itm = ({ shopData, cart, setCart }) => {
    const { itm } = useParams();
    const Itm = shopData.find(it => String(it.id) === itm);

    const GO = useNavigate();

    const addCart = () => {

        setCart([
            ...cart,
            {
                id: Itm.id,
                name: Itm.name,
                price: Itm.price,
                desc: Itm.description,
                img: Itm.api_featured_image,
                num: 1
            }
        ])
        GO('/cart');
    }

    return (
        <div className="itm">
            {
                Itm &&
                <>
                    <figure>
                        <img src={Itm.api_featured_image} alt="" />
                    </figure>
                    <strong>
                        {Itm.name}
                    </strong>
                    <p>
                        {Itm.description?.subsrt(0, 100)}{Itm.description?.length > 100 ? '...' : ''}
                    </p>
                    <button onClick={addCart}>Add cart</button>
                </>
            }

        </div>
    )
}
export default Itm;