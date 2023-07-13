/* eslint-disable @typescript-eslint/no-explicit-any */
import styled from "styled-components";
import SVG from "react-inlinesvg/esm";
import { v4 as uuidv4 } from "uuid";
import { useState, useEffect } from "react";
import CartItemComponent from "./CartItemComponent";
import { OrangeButton, UnStyledLink } from "./StyledComponents";

const CheckoutModalContainer = styled.div`
    background-color: white;
    z-index: 100;
    padding: 3rem;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 0.5rem;
    max-width: 548px;
    box-sizing: border-box;
    transition: 0.5s;
    a {
        button {
            margin: 2rem 0 0rem 0;
        }
    }
    @media screen and (max-width: 1024px) {
        width: 80%;
        top: 50%;
        padding: 1rem;
        transition: 0.5s;
    }
    @media screen and (max-width: 768px) {
        width: 90%;
        top: 50%;
        padding: 1rem;
        transition: 0.5s;
    }
`;
const SummaryContainer = styled.div`
    display: flex;
    border-radius: 0.5rem;
`;
const SummaryLeftContainer = styled.div`
    width: 55%;
    background-color: #f1f1f1;
    display: flex;
    align-items: center;
    box-sizing: border-box;
    padding: 0.5rem;
    border-top-left-radius: 0.5rem;
    border-bottom-left-radius: 0.5rem;
`;
const SummaryRightContainer = styled.div`
    width: 45%;
    background-color: black;
    box-sizing: border-box;
    padding: 2rem;
    border-top-right-radius: 0.5rem;
    border-bottom-right-radius: 0.5rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-start;
    gap: 0.5rem;
`;
const CheckoutHeading = styled.h1`
    color: #000;
    font-size: 32px;
    font-weight: 700;
    line-height: 36px;
    letter-spacing: 1.143px;
    text-transform: uppercase;
`;
const CheckoutSubHeading = styled.h6`
    color: #000;
    font-size: 15px;
    font-weight: 500;
    line-height: 25px;
    opacity: 0.5;
`;
const CartContainer = styled.div`
    display: grid;
    gap: 1rem;
    align-items: start;
`;
const GrandTotalHeading = styled.h3`
    color: #fff;
    font-size: 15px;
    font-weight: 500;
    line-height: 25px;
    opacity: 0.5;
    margin: 0;
`;
const GrandTotalSubHeading = styled.h5`
    color: #fff;
    text-align: right;
    font-size: 18px;
    font-family: Manrope;
    font-weight: 700;
    text-transform: uppercase;
    margin: 0;
`;
const ViewingText = styled.p`
    color: #000;
    font-size: 12px;
    font-family: Manrope;
    font-weight: 700;
    letter-spacing: -0.214px;
    opacity: 0.5;
    text-align: center;
    border-top: 1px solid rgba(0, 0, 0, 0.4);
    cursor: pointer;
    padding: 0.5rem;
    &:hover {
        text-decoration: underline;
    }
`;
interface Cart {
    name: string;
    image: string;
    quantity: string;
    total: number;
}

export default function CheckoutModal({
    cart,
    setIsCheckoutModalOpen,
    setCart,
}: any) {
    const [mappedProducts, setMappedProducts] = useState<any>("");
    const [isHidden, setIsHidden] = useState<boolean>(true);
    const [totalPrice, setTotalPrice] = useState<any>("");
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
        const total = Object.values(cart).reduce(
            (accumulator: number, item: unknown) => {
                const cartItem = item as Cart;
                return accumulator + cartItem.total;
            },
            0
        );
        const vat2 = parseFloat((total * 0.2).toFixed(2));
        setTotalPrice(total + vat2 + 50);
    }, [cart]);
    function handleButton() {
        setIsCheckoutModalOpen(false);
        setCart({});
    }

    function handleHiddenProducts() {
        setIsHidden((prevHidden: boolean) => !prevHidden);
    }

    return (
        <CheckoutModalContainer>
            <SVG src="/assets/checkout/icon-order-confirmation.svg" />
            <CheckoutHeading>THANK YOU FOR YOUR ORDER</CheckoutHeading>
            <CheckoutSubHeading>
                You will receive an email confirmation shortly
            </CheckoutSubHeading>
            <SummaryContainer>
                <SummaryLeftContainer>
                    <CartContainer>
                        {mappedProducts.length > 1 ? (
                            <>
                                {isHidden ? mappedProducts[0] : mappedProducts}
                                {isHidden ? (
                                    <ViewingText onClick={handleHiddenProducts}>
                                        and {mappedProducts.length - 1} other
                                        item(s)
                                    </ViewingText>
                                ) : (
                                    <ViewingText onClick={handleHiddenProducts}>
                                        View Less
                                    </ViewingText>
                                )}
                            </>
                        ) : (
                            mappedProducts
                        )}
                    </CartContainer>
                </SummaryLeftContainer>
                <SummaryRightContainer>
                    <GrandTotalHeading>GRAND TOTAL</GrandTotalHeading>
                    <GrandTotalSubHeading>$ {totalPrice}</GrandTotalSubHeading>
                </SummaryRightContainer>
            </SummaryContainer>
            <UnStyledLink onClick={handleButton} to={"/"}>
                <OrangeButton>BACK TO HOME</OrangeButton>
            </UnStyledLink>
        </CheckoutModalContainer>
    );
}
