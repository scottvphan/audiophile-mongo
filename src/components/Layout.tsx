/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import CartModal from "./CartModal";



export default function Layout() {
    const [cart, setCart] = useState<any>({});
    const [isCartOpen, setIsCartOpen] = useState<any>(false)
    const NavbarProps = {
        cart: cart,
        setCart: setCart,
        isCartOpen: isCartOpen,
        setIsCartOpen: setIsCartOpen
    }
    return (
        <>
            <Navbar {...NavbarProps}  />
            {isCartOpen && <CartModal />}
            <Outlet context={{cart, setCart, isCartOpen, setIsCartOpen}} />
            <Footer />
        </>
    );
}

// eslint-disable-next-line react-refresh/only-export-components
// export function useCartContext() {
//     return useContext(CartContext);
// }
