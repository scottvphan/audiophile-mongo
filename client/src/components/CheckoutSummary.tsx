/* eslint-disable @typescript-eslint/no-explicit-any */
import styled from "styled-components";
import { useLayoutOutletContext } from "./Layout";
import { useState, useEffect } from "react";
import CartItemComponent from "./CartItemComponent";
import { v4 as uuidv4 } from "uuid";
import { OrangeButton, UnStyledLink } from "./StyledComponents";
import LoaderComponent from "./LoaderComponent";

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
    margin: ${(isPreview: any) => (isPreview ? "0.2rem 0rem" : "0")};
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
    margin: ${(isPreview: any) => (isPreview ? "0.2rem 0rem" : "0")};
`;
const CheckoutInformationContainer = styled.div<{ isPreview: any }>`
    display: grid;
    align-items: center;
    grid-template-columns: 1fr 1fr;
    justify-content: space-between;
    gap: 1rem;
    margin: ${(isPreview: any) => (isPreview ? "1rem 0rem" : "0")};
`;
interface Cart {
    name: string;
    image: string;
    quantity: string;
    total: number;
}

export default function CheckoutSummary({ isPreview, isCheckout, isConfirmation, setIsCheckoutModalOpen }: any) {
    const { cart, isCartLoaded, shippingData, postOrder, setFormData, shippingPrice, totalPrice, setTotalPrice } = useLayoutOutletContext();
    const [productTotal, setProductTotal] = useState<number>(0);
    const [mappedProducts, setMappedProducts] = useState<any>(0);
    const [vat, setVat] = useState<number>(0);

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
                isConfirmation: isConfirmation ? isConfirmation : false,
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
        if(!shippingData){
            setProductTotal(total);
            const vat2 = parseFloat((total * 0.0625).toFixed(2));
            setTotalPrice((total + vat2 + 50).toFixed(2));
            setVat(vat2);
        } else{
            setProductTotal(total);
            const vat2 = parseFloat((total * 0.0625).toFixed(2));
            setTotalPrice((total + vat2 + shippingData[2].shippingAmount.amount).toFixed(2));
            setVat(vat2);
        }
    }, [cart, shippingData, isConfirmation, shippingPrice, setTotalPrice]);

    function handleConfirmationButton(){
        setIsCheckoutModalOpen((prevCheckout: any) => !prevCheckout);
        postOrder(vat);
        setFormData(undefined);
    }

    return (
        <>
            {isCartLoaded ? (
                <>
                    <SummaryHeading>Summary</SummaryHeading>
                    {!isPreview || !isConfirmation && (
                        <CartContainer>{mappedProducts}</CartContainer>
                    )}
                    <CheckoutInformationContainer isPreview={isPreview}>
                        {isConfirmation && (
                            <>
                                <CheckoutInformationHeading>
                                    SHIPPING
                                </CheckoutInformationHeading>
                                <CheckoutInformationText>
                                    $ {shippingPrice ? shippingPrice : "MISSING DATA" }
                                </CheckoutInformationText>
                            </>
                        )}
                        <CheckoutInformationHeading>
                            TAX (6.25%)
                        </CheckoutInformationHeading>
                        <CheckoutInformationText>
                            $ {vat ? vat : "Missing VAT"}
                        </CheckoutInformationText>
                        <CheckoutInformationHeading>
                            PRODUCT TOTAL
                        </CheckoutInformationHeading>
                        <CheckoutInformationText>
                            $ {productTotal.toFixed(2)}
                        </CheckoutInformationText>
                        <CheckoutInformationHeading>
                            TOTAL AMOUNT
                        </CheckoutInformationHeading>
                        <CheckoutInformationText>
                            $ {totalPrice}
                        </CheckoutInformationText>
                    </CheckoutInformationContainer>
                    {isPreview &&
                        <UnStyledLink to={"/checkout"}>
                            <OrangeButton>CONTINUE TO CART</OrangeButton>
                        </UnStyledLink>
                    }
                    {isCheckout && 
                        <OrangeButton form="hook-form">CONFIRM PURCHASE</OrangeButton>
                    }
                    {isConfirmation && 
                        <OrangeButton onClick={handleConfirmationButton}>CHECKOUT</OrangeButton>
                    }
                </>
            ) : (
                <LoaderComponent />
            )}
        </>
    );
}
