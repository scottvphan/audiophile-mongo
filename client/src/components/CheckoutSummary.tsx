/* eslint-disable @typescript-eslint/no-explicit-any */
import styled from "styled-components";
import { useLayoutOutletContext } from "./Layout";
import { useState, useEffect } from "react";
import CartItemComponent from "./CartItemComponent";
import { v4 as uuidv4 } from "uuid";
import { OrangeButton, UnStyledLink } from "./StyledComponents";

const SummaryHeading = styled.h4`
    font-weight: 700;
    font-size: 18px;
    line-height: 25px;
    letter-spacing: 1.28571px;
    text-transform: uppercase;
`;
const CartContainer = styled.div`
    display: grid;
    gap: 1rem;
    align-items: start;
`;
const CheckoutInformationHeading = styled.h2`
    font-size: 15px;
    line-height: 25px;
    color: #000000;
    mix-blend-mode: normal;
    opacity: 0.5;
    margin: 0;
    margin: ${(isPreview:any) =>  isPreview? "0.2rem 0rem" : "0"};
`;
const CheckoutInformationText = styled.h4`
    font-weight: 700;
    font-size: 18px;
    line-height: 25px;
    text-align: right;
    text-transform: uppercase;
    color: #000000;
    margin: 0;
    :last-child {
        color: #d87d4a;
    }
    margin: ${(isPreview:any) =>  isPreview? "0.2rem 0rem" : "0"};
`;
const CheckoutInformationContainer = styled.div<{isPreview: any}>`
    display: grid;
    align-items: center;
    grid-template-columns: 1fr 1fr;
    justify-content: space-between;
    gap: 1rem;
    margin: ${(isPreview:any) =>  isPreview? "1rem 0rem" : "0"};

`;
interface Cart {
    name: string;
    image: string;
    quantity: string;
    total: number;
}

export default function CheckoutSummary({ isPreview }: any) {
    const { cart } = useLayoutOutletContext();
    const [productTotal, setProductTotal] = useState<number>(0);
    const [totalPrice, setTotalPrice] = useState<number>(0);
    const [mappedProducts, setMappedProducts] = useState<any>(0);
    const [vat, setVat] = useState<number>();
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
        setProductTotal(total);
        const vat2 = parseFloat((total * 0.2).toFixed(2));
        setTotalPrice(total + vat2 + 50);
        setVat(vat2);
    }, [cart]);

    return (
        <>
            <SummaryHeading>Summary</SummaryHeading>
            {!isPreview && <CartContainer>{mappedProducts}</CartContainer>}
            <CheckoutInformationContainer isPreview={isPreview}>
                <CheckoutInformationHeading>SHIPPING</CheckoutInformationHeading>
                <CheckoutInformationText>$ 50</CheckoutInformationText>
                <CheckoutInformationHeading>VAT (20%)</CheckoutInformationHeading>
                <CheckoutInformationText>$ {vat ? vat : "Missing VAT"}</CheckoutInformationText>
                <CheckoutInformationHeading>PRODUCT TOTAL</CheckoutInformationHeading>
                <CheckoutInformationText>$ {productTotal}</CheckoutInformationText>
                <CheckoutInformationHeading>TOTAL AMOUNT</CheckoutInformationHeading>
                <CheckoutInformationText>$ {totalPrice}</CheckoutInformationText>
            </CheckoutInformationContainer>
            {isPreview ? (
                <UnStyledLink to={"/checkout"}>
                    <OrangeButton>
                        CONTINUE TO CART
                    </OrangeButton>
                </UnStyledLink>
            ) :
            (
                <OrangeButton form="hook-form">
                    CHECKOUT
                </OrangeButton>
            )
            }
        </>
    );
}
