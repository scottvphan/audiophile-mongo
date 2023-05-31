import SVG from 'react-inlinesvg'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Nav = styled.nav`
    background-color:#101010;
    color:white;
    padding: 0rem 20rem;
`
const LinkContainer = styled.div`
    display:flex;
    gap:20px;
`
const NavContainer = styled.div`
    display:flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #ffffff33;
    padding:0.5rem 0;
`
const StyledLink = styled(Link)`
    color:white;
    font-weight:700;
    text-decoration:none;
`
export default function Navbar(){

    return(
        <Nav>
            <NavContainer>
                <h1>audiophile</h1>
                <LinkContainer>
                    <StyledLink to="/">HOME</StyledLink>
                    <StyledLink to="/">HEADPHONES</StyledLink>
                    <StyledLink to="/">SPEAKERS</StyledLink>
                    <StyledLink to="/">EARPHONES</StyledLink>
                </LinkContainer>
                <SVG src='assets/shared/desktop/icon-cart.svg'/>
            </NavContainer>
        </Nav>
    )
}