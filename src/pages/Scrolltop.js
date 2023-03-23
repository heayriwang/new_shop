import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Scrolltop = () => {

    const { pathname } = useLocation();
    const scrTop = () => {
        window.scrollTo(0, 0)
    }

    useEffect(() => {
        scrTop();
    }, [pathname])

    return null;
}
export default Scrolltop;