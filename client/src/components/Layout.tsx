/* eslint-disable react-hooks/exhaustive-deps */
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
    const { isAuthenticated, user, isLoading } = useAuth0();
    const [formData, setFormData] = useState<any>("");
    const [isCheckoutModalOpen, setIsCheckoutModalOpen] = useState(false);
    const [isHamburgerOpen, setIsHamburgerOpen] = useState<boolean>(false);
    const [cart, setCart] = useState<any>(
        JSON.parse(sessionStorage.getItem("cart") ?? "{}")
    );
    const [isCartLoaded, setIsCartLoaded] = useState<boolean>(false);
    const [isCartOpen, setIsCartOpen] = useState<any>(false);
    const NavbarProps = {
        cart: cart,
        setCart: setCart,
        isCartOpen: isCartOpen,
        setIsCartOpen: setIsCartOpen,
        isHamburgerOpen: isHamburgerOpen,
        setIsHamburgerOpen: setIsHamburgerOpen,
    };
    const [shippingPrice, setShippingPrice] = useState<any>("");
    const [isShippingPriceLoaded, setIsShippingPriceLoaded] =
        useState<boolean>(false);

    const postOrder = async () => {
        const dataPosted = {
            name: formData.name,
            email: formData.email,
            phoneNumber: formData.phoneNumber,
            address: formData.address,
            credit: formData?.credit,
            cash: formData?.cash,
        };
        await axios.post("http://localhost:4000/form", [
            dataPosted,
            user?.email,
        ]);
    };

    const addUser = async () => {
        const userData = {
            name: user?.name,
            email: user?.email,
        };
        await axios.post("http://localhost:4000/user", userData);
    };

    const updateCart = async () => {
        const userCart = [cart, user?.email];
        await axios.post("http://localhost:4000/cart", userCart);
    };

    const getCart = async () => {
        axios
            .get(`http://localhost:4000/cart/${user?.email}`)
            .then((res) => {
                const data = res.data;
                const fixedData = data.map((obj: any) => {
                    const productId = obj.id;
                    const { ...rest } = obj;
                    return { [productId]: rest };
                });
                const finalObj = {};
                for (let i = 0; i < fixedData.length; i++) {
                    Object.assign(finalObj, fixedData[i]);
                }
                setCart(finalObj);
                setIsCartLoaded(true);
            })
            .catch((error) => {
                if (error) {
                    console.log(error);
                }
            });
    };

    const getShippingPrice = async () => {
        console.log("getting rates");
        console.log(formData.address);
        axios
            .get(
                `http://localhost:4000/rates:${JSON.stringify(
                    formData.address
                )}`
            )
            .then((res) => {
                console.log(res.data.shippingRate.rateResponse.rates);
                const rates = res.data.shippingRate.rateResponse.rates;
                const mappedRates = rates.map((data: any) => {
                    return {
                        shippingAmount: data.shippingAmount,
                        deliveryDays: data.deliveryDays,
                        estimatedDeliveryDate: data.estimatedDeliveryDate,
                        serviceType: data.serviceType,
                    };
                });
                console.log(mappedRates);
                setShippingPrice(mappedRates);
                setIsShippingPriceLoaded(true);
            });
    };

    useEffect(() => {
        if (isAuthenticated) {
            addUser();
            getCart();
        }
    }, [isAuthenticated]);

    useEffect(() => {
        if (formData) {
            axios
                .get(
                    `http://localhost:4000/rates:${JSON.stringify(
                        formData.address
                    )}`
                )
                .then((res) => {
                    console.log(res.data);
                });
        }
        // if(formData) {
        //     getShippingPrice()
        // }
    }, [formData]);

    useEffect(() => {
        if (!isAuthenticated && !isLoading) {
            if (JSON.stringify(cart) !== sessionStorage.getItem("cart")) {
                sessionStorage.setItem("cart", JSON.stringify(cart));
                setIsCartLoaded(true);
            }
        } else {
            if (isCartLoaded) {
                sessionStorage.clear();
                updateCart();
                setIsShippingPriceLoaded(false);
            }
        }
    }, [cart, isAuthenticated, user, isLoading, isCartLoaded]);

    // useEffect(() => {
    //     isCartLoaded && updateCart()
    // }, [isCartOpen])

    useEffect(() => {
        if (formData) {
            postOrder();
            getShippingPrice();
            setFormData(undefined);
        }
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
                    isCartLoaded,
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
//
