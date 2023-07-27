import styled from "styled-components";

const CartItemContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
    margin: 0;
    padding: 0;
    height: 100%;
`;
const CartImageContainer = styled.div`
    width: 20%;
`;
const CartImage = styled.img`
    width: 100%;
    border-radius: 0.5rem;
`;
const CartInfoContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 0.2fr;
    gap: 0 1rem;
    height: 100%;
    width: 100%;
    align-items: center;
`;
const CartInfoName = styled.h5`
    font-weight: 700;
    font-size: 15px;
    line-height: 25px;
    color: #000000;
    margin: 0;
    text-overflow: clip;
    align-self: start;
`;
const CartPrice = styled.h5`
    font-weight: 700;
    font-size: 14px;
    line-height: 25px;
    color: #000000;
    mix-blend-mode: normal;
    opacity: 0.5;
    margin: 0;
    align-self: end;
`;
const CartQuantity = styled.h5`
    font-weight: 700;
    font-size: 15px;
    line-height: 25px;
    text-align: right;
    color: #000000;
    mix-blend-mode: normal;
    opacity: 0.5;
    margin: 0;
    align-self: start;
`;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function CartItemComponent({image, fixedName, quantity, price, }: any) {
    return (
        <CartItemContainer>
            <CartImageContainer>
                <CartImage src={image} />
            </CartImageContainer>
            <CartInfoContainer>
                <CartInfoName>{fixedName}</CartInfoName>
                <CartQuantity>x {quantity}</CartQuantity>
                <CartPrice>$ {price}</CartPrice>
            </CartInfoContainer>
        </CartItemContainer>
    );
}
