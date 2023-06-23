/* eslint-disable @typescript-eslint/no-explicit-any */
import SVG from "react-inlinesvg";
import styled from "styled-components";
import { Link } from "react-router-dom";
import logo from "/assets/shared/desktop/logo.svg";

const Nav = styled.nav`
    background-color: #101010;
    /* background-color:black; */
    color: white;
    padding: 0rem 20rem;
    z-index: 1;
    position: relative;
`;
const LinkContainer = styled.div`
    display: flex;
    gap: 20px;
`;
const NavContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #ffffff33;
    padding: 0.5rem 0;
`;
const StyledLink = styled(Link)`
    color: white;
    font-weight: 700;
    text-decoration: none;
    transition: 0.3s;
    &:hover {
        color: #d87d4a;
        transition: 0.3s;
    }
`;
const StyledSVG = styled(SVG)`
    cursor: pointer;
    :first-of-type {
        &:hover {
            color: white !important;
            cursor: default;
            path {
                transition: 0.3s;
                fill: white;
            }
        }
    }
`;
export default function Navbar({ setIsCartOpen, isCartOpen }: any) {
    console.log();
    return (
        <Nav>
            <NavContainer>
                <StyledSVG src={logo} />
                <LinkContainer>
                    <StyledLink to="/">HOME</StyledLink>
                    <StyledLink to="/products/headphones">
                        HEADPHONES
                    </StyledLink>
                    <StyledLink to="/products/speakers">SPEAKERS</StyledLink>
                    <StyledLink to="/products/earphones">EARPHONES</StyledLink>
                </LinkContainer>
                <StyledSVG
                    onClick={() => {
                        setIsCartOpen(!isCartOpen);
                    }}
                    src="/assets/shared/desktop/icon-cart.svg"
                />
            </NavContainer>
        </Nav>
    );
}
