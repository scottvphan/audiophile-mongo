import styled from "styled-components";
import ProductCardList from "./ProductCardList";
import { Backdrop } from "./StyledComponents";

const HamburgerMenuContainer = styled.div`
    background-color: white;
    z-index:10;
    padding:1rem;
    position:absolute;
    width:100vw;
    box-sizing:border-box;
`
export default function HamburgerMenu({ setIsHamburgerOpen }: any){
    function handleMenu(){
        setIsHamburgerOpen((prevState:boolean) => !prevState)
    }
    return(
        <>
            <Backdrop onClick={handleMenu} />
            <HamburgerMenuContainer>
                <ProductCardList handleMenu = {handleMenu} />
            </HamburgerMenuContainer>
        </>
    )
}