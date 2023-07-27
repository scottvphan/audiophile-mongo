import styled from "styled-components";
import CheckoutSummary from "../components/CheckoutSummary";
import GoBackButton from "../components/GoBackButton";
import { useLayoutOutletContext } from "../components/Layout";
import Loader from "../components/Loader";
import { useState, useEffect } from 'react';
import CartItemComponent from "../components/CartItemComponent";
import {v4 as uuidv4} from 'uuid'

const CheckoutPageContainer = styled.div`
    min-height:56.5vh;
    padding: 1rem 20rem;
    background-color: #cfcfcf;
    @media screen and (max-width: 1440px) {
        padding: 1rem 5rem;
    }
    @media screen and (max-width: 1024px) {
        padding: 1rem 2rem;
    }
    @media screen and (max-width: 768px) {
        padding: 1rem;
    }
    @media screen and (max-width: 560px) {
        padding: 0.5rem;
    }
`;
const CheckoutContainer = styled.div`
    display: flex;
    gap: 1.5rem;
    flex-direction: row-reverse;
    @media screen and (max-width: 768px) {
        flex-direction: column;
        width: 100%;
    }
`;
const CheckoutSummaryContainer = styled.div`
    width: 80%;
    background-color: white;
    padding: 1rem;
    border-radius: 0.5rem;
    align-self: flex-start;
    button {
        margin: 1rem 0;
    }
    box-sizing: border-box;
    @media screen and (max-width: 768px) {
        width: 100%;
    }
`;
const CartContainer = styled.div`
    display: grid;
    align-items: start;
    background-color: white;
    padding:1rem;
    box-sizing:border-box;
    border-radius:0.5rem;
    width:50%;
    align-self:start;
    @media screen and (max-width: 768px) {
        width: 100%;
    }
`;

export default function ConfirmationPage() {
    const { isShippingDataLoaded, setIsCheckoutModalOpen } = useLayoutOutletContext();
    const { cart, shippingData } = useLayoutOutletContext();
    const [mappedProducts, setMappedProducts] = useState<any>(0);

    useEffect(() => {
        const cartArray = Object.values(cart);
        const mappedArray = cartArray.map((cart: any) => {
            const fixedName = cart.name.replace(
                /headphones|earphones|speaker|wireless/gi,
                ""
            );
            const cartProps = {
                image: cart.image,
                fixedName: fixedName,
                quantity: cart.quantity,
                price: cart.price,
            };
            return <CartItemComponent key={uuidv4()} {...cartProps} />;
        });
        setMappedProducts(mappedArray);
    }, [cart, shippingData]);
    return (
        <>
            {isShippingDataLoaded ? (
                <CheckoutPageContainer>
                    <GoBackButton />
                    <CheckoutContainer>
                        <CartContainer>{mappedProducts}</CartContainer>
                        <CheckoutSummaryContainer>
                            <CheckoutSummary isConfirmation setIsCheckoutModalOpen={setIsCheckoutModalOpen} />
                        </CheckoutSummaryContainer>
                    </CheckoutContainer>
                </CheckoutPageContainer>
            ) : (
                <Loader />
            )}
        </>
    );
}
