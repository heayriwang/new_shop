import { Link, Outlet } from "react-router-dom";
import Header from "./pages/Header";
import Nav from "./pages/Nav"



const Layout = ({ shopData, categoryItm, cart }) => {
    return (
        <div className="Wrap">
            <Header cart={cart} categoryItm={categoryItm} />
            <Outlet />
        </div>
    )
}
export default Layout;