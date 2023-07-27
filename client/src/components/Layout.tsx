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
    const [shippingData, setShippingData] = useState<any>("");
    const [isShippingDataLoaded, setIsShippingDataLoaded] =
        useState<boolean>(false);
    const [shippingPrice, setShippingPrice] = useState<any>("");

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
    
    const getShippingData = async () => {
        console.log(formData)
        axios
            .get(`http://localhost:4000/rates`, { params: {
                form: formData
            } })
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
                setShippingData(mappedRates);
                setIsShippingDataLoaded(true);
            });
    };

    useEffect(() => {
        if (isAuthenticated) {
            addUser();
            getCart();
        }
    }, [isAuthenticated]);

    useEffect(() => {
        if (!isAuthenticated && !isLoading) {
            if (JSON.stringify(cart) !== sessionStorage.getItem("cart")) {
                sessionStorage.setItem("cart", JSON.stringify(cart));
                setIsCartLoaded(true);
            }
        } else {
            if (isCartLoaded) {
                sessionStorage.removeItem("cart");
                updateCart();
                setIsShippingDataLoaded(false);
            }
        }
    }, [cart, isAuthenticated, user, isLoading, isCartLoaded]);

    useEffect(() => {
        if (formData) {
            getShippingData();
            setFormData(undefined);
        }
    }, [formData]);

    useEffect(() => {
        if(shippingData){
            sessionStorage.setItem("shippingData", JSON.stringify(shippingData))
        }
    }, [shippingData])

    useEffect(() =>{
        if(isCartLoaded){
            const sessionShippingData = JSON.parse(sessionStorage.getItem("shippingData") as any)
            if(sessionShippingData){
                setShippingData(sessionShippingData)
                setIsShippingDataLoaded(true)
            }
        }
    }, [isCartLoaded])
    
    function handleCloseModal() {
        setIsCartOpen(false);
    }
    return (
        <>
            {isCartOpen && (<Backdrop onClick={handleCloseModal} />)}
            {isCheckoutModalOpen && (<Backdrop />)}
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
                    shippingData,
                    isShippingDataLoaded,
                    shippingPrice,
                    setShippingPrice,
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
