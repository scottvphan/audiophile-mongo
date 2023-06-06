import SVG from "react-inlinesvg";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Footer = styled.footer`
    background-color:black;
    /* background-color: #101010; */
    color: white;
`;
const LinkContainer = styled.div`
    display: flex;
    gap: 20px;
`;
const FooterContainer = styled.div`
    padding: 0rem 20rem;
    display: flex;
    flex-direction: column;
`;
const StyledLink = styled(Link)`
    color: white;
    font-weight: 700;
    text-decoration: none;
`;
const LeftContainer = styled.div`
    width:50%;
`;
const RightContainer = styled.div`
    width:50%;
    display:flex;
    justify-content: flex-end;
    gap:1rem;
    align-items: center;
`;
const TopFooterContainer = styled.div`
    display:flex;
    justify-content: space-between;
    align-items: center;
`;
const BottomFooterContainer = styled.div`
    display:flex;
    gap:20rem;
`
const StyledParagraph = styled.p`
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    line-height: 25px;
    mix-blend-mode: normal;
    opacity: 0.5;
`
export default function Navbar() {
    return (
        <Footer>
            <FooterContainer>
                <TopFooterContainer>
                    <h1>audiophile</h1>
                    <LinkContainer>
                        <StyledLink to="/">HOME</StyledLink>
                        <StyledLink to="/">HEADPHONES</StyledLink>
                        <StyledLink to="/">SPEAKERS</StyledLink>
                        <StyledLink to="/">EARPHONES</StyledLink>
                    </LinkContainer>
                </TopFooterContainer>
                <BottomFooterContainer>
                    <LeftContainer>
                        <StyledParagraph>
                            Audiophile is an all in one stop to fulfill your audio
                            needs. We're a small team of music lovers and sound
                            specialists who are devoted to helping you get the most
                            out of personal audio. Come and visit our demo facility
                            - we’re open 7 days a week.
                        </StyledParagraph>
                        <StyledParagraph>Copyright 2021. All Rights Reserved</StyledParagraph>
                    </LeftContainer>
                    <RightContainer>
                        <SVG src="assets/facebook.svg"></SVG>
                        <SVG src="assets/twitter.svg"></SVG>
                        <SVG src="assets/instagram.svg"></SVG>
                    </RightContainer>
                </BottomFooterContainer>
            </FooterContainer>
        </Footer>
    );
}
