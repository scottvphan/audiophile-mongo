import styled from "styled-components";
import CartComponent from "./CartComponent";

const Backdrop = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(
        0,
        0,
        0,
        0.5
    );
    display: block;
    z-index:0;
`;
const CartContainer = styled.div`
    position:absolute;
    top:20%;
    left:67%;
    /* width:15%; */
    background-color: white;
    z-index:1;
    padding:1rem;
`;
const TopContainer = styled.div`
    display:flex;
    align-items: center;
    justify-content: space-between;
`
const CartHeading = styled.h1`
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 25px;
    letter-spacing: 1.28571px;
    text-transform: uppercase;
    color: #000000;
`
const RemoveAll = styled.p`
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    line-height: 25px;
    text-decoration-line: underline;
    color: #000000;
    mix-blend-mode: normal;
    opacity: 0.5;
`
export default function CartModal() {
    return (
        <>
            <Backdrop />
            <CartContainer>
                <TopContainer>
                    <CartHeading>Cart (3)</CartHeading>
                    <RemoveAll>Remove All</RemoveAll>
                </TopContainer>
                <CartComponent />
            </CartContainer>
        </>
    );
}
