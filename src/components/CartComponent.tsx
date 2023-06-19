import styled from "styled-components"

const CartComponentContainer = styled.div`
    display:flex;
    align-items: center;
`
const CartComponentLeft = styled.div`
    width:60%;
    display:flex;
    align-items: center;
    gap:0.5rem;
`
const CartComponentRight = styled.div`
    width:40%;
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
const StyledInput = styled.input`
    width:100%;
`
export default function CartComponent(){

    return(
        <CartComponentContainer>
            <CartComponentLeft>
                <StyledImg src="/assets/cart/image-xx59-headphones.jpg" />
                <ProductInfoContainer>
                    <ProductInfoHeading>XX99 MK II</ProductInfoHeading>
                    <ProductInfoPrice>$2,999</ProductInfoPrice>
                </ProductInfoContainer>
            </CartComponentLeft>
            <CartComponentRight>
                <StyledInput type="number" />
            </CartComponentRight>
        </CartComponentContainer>
    )
}