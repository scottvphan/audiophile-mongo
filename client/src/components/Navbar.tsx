/* eslint-disable @typescript-eslint/no-explicit-any */
import SVG from "react-inlinesvg";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import logo from "/assets/shared/desktop/logo.svg";
import hamburger from "/assets/hamburger.svg";
import { StyledSVG, UnStyledLink } from "./StyledComponents";

const Nav = styled.nav`
    background-color: #101010;
    color: white;
    padding: 0rem 20rem;
    z-index: 20;
    position: relative;
    @media screen and (max-width: 1440px) {
        padding: 0rem 5rem;
    }
    @media screen and (max-width: 1024px) {
        padding: 0rem 2rem;
    }
    min-height:10vh;
`;
const LinkContainer = styled.div`
    display: flex;
    gap: 2.5rem;
    @media screen and (max-width: 1024px) {
        display: none;
    }
`;
const NavContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #ffffff33;
    padding: 2rem 0;
`;
const StyledLink = styled(Link)`
    color: white;
    font-weight: 700;
    text-decoration: none;
    transition: 0.3s;
    transform: scale(1);
    letter-spacing: 2px;
    &:hover {
        color: #d87d4a;
        transition: 0.3s;
        transform: scale(1.1);
        letter-spacing: 4px;
    }
`;
const HamburgerMenu = styled(SVG)`
    display: none;
    @media screen and (max-width: 1024px) {
        display: block;
    }
`;
const SVGContainer = styled.div`
    display: flex;
    gap: 1rem;
    align-items: center;
    height:100%;
`;
const StyledLogo = styled(SVG)`
    width: 100%;
    height: 50%;
    transition:0.3s;
    &:hover{
        path{
            transition:0.3s;
            fill:#D87D4A;
        }
    }
`;
export default function Navbar({
    cart,
    setIsCartOpen,
    isCartOpen,
    setIsHamburgerOpen,
}: any) {
    const location = useLocation();
    
    const isCart = location.pathname.includes('cart')
    const isCheckout = location.pathname.includes('checkout')
    
    function handleCart() {
        if (Object.keys(cart).length !== 0) {
            setIsCartOpen(!isCartOpen);
        }
    }
    return (
        <Nav>
            <NavContainer>
                <SVGContainer>
                    <HamburgerMenu
                        onClick={() => {
                            setIsHamburgerOpen(
                                (prevState: boolean) => !prevState
                            );
                        }}
                        src={hamburger}
                    />
                    <UnStyledLink to={"/"}>
                        <StyledLogo src={logo} />
                    </UnStyledLink>
                </SVGContainer>
                <LinkContainer>
                    <StyledLink to="/">HOME</StyledLink>
                    <StyledLink to="/products/headphones">
                        HEADPHONES
                    </StyledLink>
                    <StyledLink to="/products/speakers">SPEAKERS</StyledLink>
                    <StyledLink to="/products/earphones">EARPHONES</StyledLink>
                </LinkContainer>
                <StyledSVG
                    onClick={handleCart}
                    src="/assets/shared/desktop/icon-cart.svg"
                />
            </NavContainer>
        </Nav>
    );
}
