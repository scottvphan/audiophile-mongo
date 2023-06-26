import styled from "styled-components";
import SVG from "react-inlinesvg";
import { Link } from "react-router-dom";
import { StyledSVG } from "./StyledComponents";
import logo from "/assets/shared/desktop/logo.svg";

const Footer = styled.footer`
    background-color: black;
    color: white;
`;
const LinkContainer = styled.div`
    display: flex;
    gap: 2.5rem;
`;
const FooterContainer = styled.div`
    padding: 2rem 20rem;
    display: flex;
    flex-direction: column;
`;
const StyledLink = styled(Link)`
    color: white;
    font-weight: 700;
    text-decoration: none;
    transition: 0.3s;
    transform:scale(1);
    letter-spacing:2px;
    &:hover {
        color: #d87d4a;
        transition: 0.3s;
        transform:scale(1.1);
        letter-spacing:4px;
    }
`;
const LeftContainer = styled.div`
    width: 50%;
`;
const RightContainer = styled.div`
    width: 50%;
    display: flex;
    justify-content: flex-end;
    gap: 1rem;
    align-items: center;
`;
const TopFooterContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
const BottomFooterContainer = styled.div`
    display: flex;
    gap: 20rem;
`;
const StyledParagraph = styled.p`
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    line-height: 25px;
    mix-blend-mode: normal;
    opacity: 0.5;
`;
export default function Navbar() {
    return (
        <Footer>
            <FooterContainer>
                <TopFooterContainer>
                    <SVG src={logo} />
                    <LinkContainer>
                        <StyledLink to="/">HOME</StyledLink>
                        <StyledLink to="/products/headphones">
                            HEADPHONES
                        </StyledLink>
                        <StyledLink to="/products/speakers">
                            SPEAKERS
                        </StyledLink>
                        <StyledLink to="/products/earphones">
                            EARPHONES
                        </StyledLink>
                    </LinkContainer>
                </TopFooterContainer>
                <BottomFooterContainer>
                    <LeftContainer>
                        <StyledParagraph>
                            Audiophile is an all in one stop to fulfill your
                            audio needs. We're a small team of music lovers and
                            sound specialists who are devoted to helping you get
                            the most out of personal audio. Come and visit our
                            demo facility - we’re open 7 days a week.
                        </StyledParagraph>
                        <StyledParagraph>
                            Copyright 2021. All Rights Reserved
                        </StyledParagraph>
                    </LeftContainer>
                    <RightContainer>
                        <StyledSVG src="/assets/facebook.svg"></StyledSVG>
                        <StyledSVG src="/assets/twitter.svg"></StyledSVG>
                        <StyledSVG src="/assets/instagram.svg"></StyledSVG>
                    </RightContainer>
                </BottomFooterContainer>
            </FooterContainer>
        </Footer>
    );
}
