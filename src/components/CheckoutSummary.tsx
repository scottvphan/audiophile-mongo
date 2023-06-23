/* eslint-disable @typescript-eslint/no-explicit-any */
import styled from "styled-components"
import { useLayoutOutletContext } from "./Layout"
import { useState, useEffect } from "react"
import {v4 as uuidv4} from 'uuid'
import { useForm } from "react-hook-form"

const SummaryHeading = styled.h4`
    font-weight: 700;
    font-size: 18px;
    line-height: 25px;
    letter-spacing: 1.28571px;
    text-transform: uppercase;
`
const CartContainer = styled.div`
    display:grid;
    gap:1rem;
    align-items: start;
`
const CartItemContainer = styled.div`
    display:flex;
    align-items: center;
    gap:1rem;
    margin:0;
    padding:0;
    height:100%;
`
const CartImageContainer = styled.div`
    width:20%;
`
const CartImage = styled.img`
    width:100%;
    border-radius:0.5rem;
`
const CartInfoContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0 1rem;
    height:100%;
    width:70%;
`
const CartInfoName = styled.h5`
    font-weight: 700;
    font-size: 15px;
    line-height: 25px;
    color: #000000;
    margin:0;
    text-overflow: clip;
`
const CartPrice = styled.h5`
    font-weight: 700;
    font-size: 14px;
    line-height: 25px;
    color: #000000;
    mix-blend-mode: normal;
    opacity: 0.5;
    margin:0;
    align-self:end;
`
const CartQuantity = styled.h5`
    font-weight: 700;
    font-size: 15px;
    line-height: 25px;
    text-align: right;
    color: #000000;
    mix-blend-mode: normal;
    opacity: 0.5;
    margin:0;
`

const CheckoutInformationHeading = styled.h2`
    font-size: 15px;
    line-height: 25px;
    color: #000000;
    mix-blend-mode: normal;
    opacity: 0.5;
    margin:0;
`
const CheckoutInformationText = styled.h4`
    font-weight: 700;
    font-size: 18px;
    line-height: 25px;
    text-align: right;
    text-transform: uppercase;
    color: #000000;
    margin:0;
    :last-child{
        color:#D87D4A;
    }
`
const CheckoutInformationContainer = styled.div`
    display:grid;
    align-items: center;
    grid-template-columns: 1fr 1fr;
    justify-content: space-between;
    gap:1rem;
`
const PayButton = styled.button`
    background-color:#D87D4A;
    padding:1rem;
    color:white;
    font-weight:700;
    text-transform: uppercase;
    width:100%;
    border:none;
    margin:1rem 0;
`
interface Cart {
    name: string;
    image: string;
    quantity: string;
    total: number;
}
interface FormValues {
    name: string;
    email: string;
    phoneNumber: string;
    address: string;
    zipcode: number;
    city: string;
    country: string;
    // eMoney: boolean;
    // cash: boolean;
    eMoneyNumber: string;
    eMoneyPin: string;
}

export default function CheckoutSummary({onSubmit, formRef}:any){
    const { cart } = useLayoutOutletContext()
    const [productTotal, setProductTotal] = useState<number>(0)
    const [totalPrice, setTotalPrice] = useState<number>(0);
    const [mappedProducts, setMappedProducts] = useState<any>(0)
    const { handleSubmit } = useForm<FormValues>()
    const [vat, setVat] = useState<number>()
    useEffect(() =>{
        const cartArray = Object.values(cart)
        const mappedArray = cartArray.map((cart:any) =>{
            const fixedName = cart.name.replace(/headphones|earphones|speaker/gi, '')
            return(
                <CartItemContainer key={uuidv4()}>
                    <CartImageContainer>
                        <CartImage src={cart.image} />
                    </CartImageContainer>
                    <CartInfoContainer>
                        <CartInfoName>{fixedName}</CartInfoName>
                        <CartQuantity>x {cart.quantity}</CartQuantity>
                        <CartPrice>$ {cart.price}</CartPrice>
                    </CartInfoContainer>
                </CartItemContainer>
            )
        })
        setMappedProducts(mappedArray)
        const total = Object.values(cart).reduce(
            (accumulator: number, item: unknown) => {
                const cartItem = item as Cart;
                return accumulator + cartItem.total;
            },
            0
        );
        setProductTotal(total)
        console.log(Object.values(cart))
        const vat2 = parseFloat((total * 0.2).toFixed(2))
        setTotalPrice(total + vat2 + 50);
        setVat(vat2)
    }, [cart])

    useEffect(() =>{
        console.log(totalPrice)
    }, [totalPrice])
    return(
        <>
            <SummaryHeading>Summary</SummaryHeading>
            <CartContainer>
                {mappedProducts}
            </CartContainer>
            <CheckoutInformationContainer>
                <CheckoutInformationHeading>SHIPPING</CheckoutInformationHeading>
                <CheckoutInformationText>$ 50</CheckoutInformationText>
                <CheckoutInformationHeading>VAT (INCLUDED)</CheckoutInformationHeading>
                <CheckoutInformationText>$ {vat ? vat : 'Missing VAT'}</CheckoutInformationText>
                <CheckoutInformationHeading>PRODUCT TOTAL</CheckoutInformationHeading>
                <CheckoutInformationText>$ {productTotal}</CheckoutInformationText>
                <CheckoutInformationHeading>TOTAL AMOUNT</CheckoutInformationHeading>
                <CheckoutInformationText>$ {totalPrice}</CheckoutInformationText>
            </CheckoutInformationContainer>
            <PayButton onClick={() =>{
                formRef.current.submit()
            }}>CONTINUE & PAY</PayButton>
        </>
    )
}