/* eslint-disable @typescript-eslint/no-explicit-any */
import styled from "styled-components";
import ItemQuantityInput from "./ItemQuantityInput";

const CartPreviewComponentContainer = styled.div`
    display: flex;
    align-items: center;
    @media screen and (max-width: 768px) {
        flex-direction:column
    }
`;
const CartPreviewComponentLeft = styled.div`
    width: 70%;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    @media screen and (max-width: 768px) {
        flex-direction:column;

    }
`;
const CartPreviewComponentRight = styled.div`
    width: 30%;
    @media screen and (max-width: 768px) {
        width:40%;
    }
`;
const StyledImg = styled.img`
    border-radius: 8px;
`;
const ProductInfoContainer = styled.div`
    height: 100%;
    @media screen and (max-width: 768px) {
        flex-direction:column;
        display:flex;
        align-items: center;
        text-align: center;
    }
`;
const ProductInfoHeading = styled.div`
    font-style: normal;
    font-weight: 700;
    font-size: 15px;
    line-height: 25px;
    color: #000000;
    padding: 0;
    margin: 0;
`;
const ProductInfoPrice = styled.p`
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 25px;
    color: #000000;
    mix-blend-mode: normal;
    opacity: 0.5;
    padding: 0;
    margin: 0;
`;
const DeleteButton = styled.p`
    color: #000;
    font-family: Manrope;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    letter-spacing: 1px;
    text-transform: uppercase;
    margin: 0;
    cursor:pointer;
    transition:0.3s;
    &:hover{
        color:#D87D4A;
        transition:0.3s;
    }
`;
export default function CartPreviewComponent({ setCart, data }: any) {
    const fixedName = data?.name.replace(
        /headphones|earphones|speaker|wireless/gi,
        ""
    );

    function handleDelete() {
        setCart((prevState: any) => {
            const updatedCart = { ...prevState };
            delete updatedCart[data.id];
            return updatedCart;
        });
    }

    return (
        <CartPreviewComponentContainer>
            <CartPreviewComponentLeft>
                <StyledImg src={data.image} />
                <ProductInfoContainer>
                    <ProductInfoHeading>{fixedName}</ProductInfoHeading>
                    <ProductInfoPrice>$ {data.price}</ProductInfoPrice>
                    <DeleteButton onClick={handleDelete}>DELETE</DeleteButton>
                </ProductInfoContainer>
            </CartPreviewComponentLeft>
            <CartPreviewComponentRight>
                <ItemQuantityInput
                    setCart={setCart}
                    data={data}
                    id={data.id}
                    quantity={data.quantity}
                    price={data.price}
                />
            </CartPreviewComponentRight>
        </CartPreviewComponentContainer>
    );
}
