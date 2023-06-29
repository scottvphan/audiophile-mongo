/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from "react";
import { Outlet, useOutletContext } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import CartModal from "./CartModal";
import { useAuth0 } from "@auth0/auth0-react";
import { Backdrop } from "./StyledComponents";
import CheckoutModal from "./CheckoutModal";
import HamburgerMenu from "./HamburgerMenu";
import axios from "axios";

export default function Layout() {
    const { isAuthenticated, user } = useAuth0();
    const [formData, setFormData] = useState<any>("");
    const [isCheckoutModalOpen, setIsCheckoutModalOpen] = useState(false);
    const [isHamburgerOpen, setIsHamburgerOpen] = useState<boolean>(false);
    const [cart, setCart] = useState<any>(
        isAuthenticated
            ? JSON.parse(localStorage.getItem(`${user?.email}`) ?? "{}")
            : JSON.parse(sessionStorage.getItem("cart") ?? "{}")
    );
    const [isCartOpen, setIsCartOpen] = useState<any>(false);
    const NavbarProps = {
        cart: cart,
        setCart: setCart,
        isCartOpen: isCartOpen,
        setIsCartOpen: setIsCartOpen,
        isHamburgerOpen: isHamburgerOpen,
        setIsHamburgerOpen: setIsHamburgerOpen,
    };

    const postData = async () => {
        const dataPosted = {
            name: formData.name,
            email: formData.email,
            phoneNumber: formData.phoneNumber,
            address: formData.address,
        };
        await axios.post("http://localhost:4000/form", dataPosted);
    };

    useEffect(() => {
        if (!isAuthenticated) {
            if (JSON.stringify(cart) !== sessionStorage.getItem("cart")) {
                sessionStorage.setItem("cart", JSON.stringify(cart));
            }
        } else {
            sessionStorage.clear();
            console.log("authenticated");
            if (
                JSON.stringify(cart) !== localStorage.getItem(`${user?.email}`)
            ) {
                localStorage.setItem(`${user?.email}`, JSON.stringify(cart));
            }
        }
    }, [cart, isAuthenticated, user]);

    useEffect(() => {
        if (formData) {
            console.log(formData);
            postData();
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [formData]);

    return (
        <>
            {isCartOpen || (isCheckoutModalOpen && <Backdrop />)}
            {isCheckoutModalOpen && (
                <CheckoutModal
                    cart={cart}
                    setIsCheckoutModalOpen={setIsCheckoutModalOpen}
                    setCart={setCart}
                />
            )}
            <Navbar {...NavbarProps} />
            {isHamburgerOpen && <HamburgerMenu {...NavbarProps} />}
            {isCartOpen && <CartModal {...NavbarProps} />}
            <Outlet
                context={{
                    cart,
                    setCart,
                    isCartOpen,
                    setIsCartOpen,
                    formData,
                    setFormData,
                    isCheckoutModalOpen,
                    setIsCheckoutModalOpen,
                }}
            />
            <Footer />
        </>
    );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useLayoutOutletContext() {
    return useOutletContext<any>();
}
