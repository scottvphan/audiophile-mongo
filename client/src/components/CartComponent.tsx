/* eslint-disable @typescript-eslint/no-explicit-any */
import styled from "styled-components"
import ItemQuantityInput from "./ItemQuantityInput"

const CartComponentContainer = styled.div`
    display:flex;
    align-items: center;
`
const CartComponentLeft = styled.div`
    width:70%;
    display:flex;
    align-items: center;
    gap:0.5rem;
`
const CartComponentRight = styled.div`
    width:30%;
`
const StyledImg = styled.img`
    width:64px;
    height:64px;
    border-radius:8px;
`
const ProductInfoContainer = styled.div`

`
const ProductInfoHeading = styled.div`
    font-style: normal;
    font-weight: 700;
    font-size: 15px;
    line-height: 25px;
    color: #000000;
    padding:0;
    margin:0;
`
const ProductInfoPrice = styled.p`
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 25px;
    color: #000000;
    mix-blend-mode: normal;
    opacity: 0.5;
    padding:0;
    margin:0;
`
export default function CartComponent({ setCart, data}:any){
    console.log(data)
    return(
        <CartComponentContainer>
            <CartComponentLeft>
                <StyledImg src={data.image} />
                <ProductInfoContainer>
                    <ProductInfoHeading>{data.name}</ProductInfoHeading>
                    <ProductInfoPrice>$ {data.price}</ProductInfoPrice>
                </ProductInfoContainer>
            </CartComponentLeft>
            <CartComponentRight>
                <ItemQuantityInput setCart={setCart} data={data} id={data.id} quantity={data.quantity} price={data.price} />
            </CartComponentRight>
        </CartComponentContainer>
    )
}