/* eslint-disable @typescript-eslint/no-explicit-any */
import styled from "styled-components";
import CartComponent from "./CartComponent";
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

const Backdrop = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: block;
    z-index: 10;
`;
const CartContainer = styled.div`
    position: absolute;
    top: 10%;
    left: 65%;
    /* width:15%; */
    background-color: white;
    z-index: 11;
    padding: 1rem;
    border-radius: 0.5rem;
`;
const TopContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;
const CartHeading = styled.h1`
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 25px;
    letter-spacing: 1.28571px;
    text-transform: uppercase;
    color: #000000;
`;
const RemoveAll = styled.p`
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    line-height: 25px;
    color: #000000;
    mix-blend-mode: normal;
    opacity: 0.5;
    cursor:pointer;
    &:hover{
        text-decoration: underline;
    }
`;
const TotalContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;
const TotalPrice = styled.h6`
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    line-height: 25px;
    color: #000000;
    mix-blend-mode: normal;
    opacity: 0.5;
`
const MappedContainer = styled.div`
    display: grid;
    gap: 0.5rem;
    align-items: center;
`;
const CheckoutButton = styled.button`
    background-color: #d87d4a;
    color: white;
    font-style: normal;
    font-weight: 700;
    font-size: 13px;
    line-height: 18px;
    text-align: center;
    letter-spacing: 1px;
    text-transform: uppercase;
    border:none;
    width:100%;
    padding:0.8rem;
    :disabled{
        cursor:not-allowed;
    }
`;
interface Cart {
    name: string;
    image: string;
    quantity: string;
    total: number;
}
export default function CartModal({ cart, setCart, setIsCartOpen }: any) {
    const [mappedData, setMappedData] = useState<any>("");
    const [totalPrice, setTotalPrice] = useState<any>(0);
    useEffect(() => {
        const mappeddata = Object.values(cart).map((data: any) => {
            return <CartComponent key={uuidv4()} cart={cart} setCart={setCart} data={data} />;
        });
        setMappedData(mappeddata);
        const total = Object.values(cart).reduce(
            (accumulator: number, item: unknown) => {
                const cartItem = item as Cart;
                return accumulator + cartItem.total;
            },
            0
        );
        setTotalPrice(total);
    }, [cart, setCart]);
    function removeAllItems() {
        setCart({});
    }
    function handleCloseModal(){
        setIsCartOpen(false)
    }
    const cartLength = Object.values(cart).length;
    return (
        <>
            <Backdrop onClick={handleCloseModal} />
            <CartContainer>
                {cartLength > 0 ?
                    <>
                        <TopContainer>
                            <CartHeading>Cart ({cartLength})</CartHeading>
                            <RemoveAll onClick={removeAllItems}>Remove All</RemoveAll>
                        </TopContainer>
                        <MappedContainer>{mappedData}</MappedContainer>
                        <TotalContainer>
                            <TotalPrice>TOTAL</TotalPrice>
                            <h4>$ {totalPrice}</h4>
                        </TotalContainer>
                        <CheckoutButton onClick={() => {window.location.href = '/checkout'}}>Check Out</CheckoutButton>
                    </>
                :
                <>
                    <TopContainer>
                        <CartHeading>Cart ({cartLength})</CartHeading>
                    </TopContainer>
                    <MappedContainer>{mappedData}</MappedContainer>
                    <TotalContainer>
                        <TotalPrice>TOTAL</TotalPrice>
                        <h4>$ {totalPrice}</h4>
                    </TotalContainer>
                    <CheckoutButton disabled onClick={() => {window.location.href = '/checkout'}}>Check Out</CheckoutButton>
                </>
                }
            </CartContainer>
        </>
    );
}
