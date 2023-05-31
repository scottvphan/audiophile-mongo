import SVG from 'react-inlinesvg'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Nav = styled.nav`
    background-color:black;
    color:white;
    height:10vh;
    border-bottom: 1px solid #0E0E0E;
`
const LinkContainer = styled.div`
    display:flex;
    gap:20px;
`
const NavContainer = styled.div`
    padding: 1rem 10rem;
    display:flex;
    justify-content: space-between;
    align-items: center;
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