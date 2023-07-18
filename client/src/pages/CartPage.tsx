/* eslint-disable @typescript-eslint/no-explicit-any */
import styled from "styled-components";
import CheckoutSummary from "../components/CheckoutSummary";
import { useLayoutOutletContext } from "../components/Layout";
import GoBackButton from "../components/GoBackButton";
import { useEffect, useState } from 'react'
import {v4 as uuidv4} from 'uuid'
import CartPreviewComponent from "../components/CartPreviewComponent";

const CartPageContainer = styled.div`
    padding: 1rem 20rem;
    min-height:65vh;
    background-color: #cfcfcf;
    @media screen and (max-width:1440px) {
        padding: 1rem 5rem;
    }
    @media screen and (max-width:1024px) {
        padding: 1rem 2rem;
    }
    @media screen and (max-width:768px) {
        padding:1rem;
    }
    @media screen and (max-width:560px) {
        padding:0.5rem;
    }
`;
const CartPreviewContainer = styled.div`
    display: flex;
    gap: 1.5rem;
    @media screen and (max-width: 768px) {
        flex-direction:column;
    }
`;
const CartContainer = styled.div`
    width: 70%;
    background-color: white;
    padding: 2rem;
    border-radius: 0.5rem;
    box-sizing: border-box;
    @media screen and (max-width: 768px) {
        width:100%;
        padding:1rem;
    }
`;
const CartSummaryContainer = styled.div`
    width: 30%;
    background-color: white;
    padding: 1rem;
    border-radius: 0.5rem;
    align-self: flex-start;
    button{
        margin:1rem 0;
    }
    box-sizing: border-box;
    @media screen and (max-width: 768px) {
        width:100%;
        padding:1rem;
    }
`;
const CheckoutHeading = styled.h1`
    margin: 0;
    letter-spacing:0.3rem;
    @media screen and (max-width: 768px) {
        text-align: center;
    }
`;
const MappedCartContainer = styled.div`
    display: grid;
    gap: 1rem;
    align-items: start;
    margin:2rem 0;
`;
export default function CartPage() {
    const { cart, setCart } = useLayoutOutletContext()
    const [mappedCart, setMappedCart] = useState<any>('')
    
    useEffect(() => {
        const mappeddata = Object.values(cart).map((data: any) => {
            const ComponentProps = {
                cart: cart,
                setCart: setCart,
                data: data,
                key: uuidv4(),
            }
            return (
                <CartPreviewComponent {...ComponentProps}/>
            );
        });
        setMappedCart(mappeddata);
    }, [cart, setCart]);

    return (
        <CartPageContainer>
            <GoBackButton />
            <CartPreviewContainer>
                <CartContainer>
                    <CheckoutHeading>SHOPPING CART</CheckoutHeading>
                    <MappedCartContainer>
                        {mappedCart}
                    </MappedCartContainer>
                </CartContainer>
                <CartSummaryContainer>
                    <CheckoutSummary isPreview />
                </CartSummaryContainer>
            </CartPreviewContainer>
        </CartPageContainer>
    );
}
