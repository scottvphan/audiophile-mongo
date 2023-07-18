import mobileImage from "/assets/home/mobile/image-header.jpg";
import tabletImage from "/assets/home/tablet/image-header.jpg";
import desktopImage from "/assets/home/desktop/image-header.jpg";
import styled from "styled-components";
import ProductPreview from "../components/ProductPreview";
import { useAuth0 } from "@auth0/auth0-react";
import LogoutButton from "../components/LogoutButton";
import LoginButton from "../components/LoginButton";
import ProductCardList from "../components/ProductCardList";
import AdComponent from "../components/AdComponent";
import { OrangeButton, UnStyledLink } from "../components/StyledComponents";

const ProductInfoContainer = styled.div`
    min-height:65vh;
    height: 100%;
    background-color: white;
    padding: 0 20rem;
    margin: 10rem 0;
    @media screen and (max-width: 1440px) {
        padding: 0rem 5rem;
    }
    @media screen and (max-width: 1024px) {
        padding: 0rem 2rem;
    }
`;
const NewProductContainer = styled.div`
    color: white;
    display: flex;
`;
const StyledSection = styled.section`
    padding: 0 20rem;
    width: 100%;
    background-image: url(${desktopImage});
    background-position: center bottom;
    background-repeat: no-repeat;
    display: flex;
    background-size: cover;
    box-sizing:border-box;
    height:100vh;
    div {
        a {
            button {
                width: 30%;
            }
        }
    }
    @media screen and (max-width: 1440px) {
        padding: 0 5rem;
    }
    @media screen and (max-width: 1024px) {
        background-image: url(${tabletImage});
        padding: 0 2rem;
        div {
            a {
                button {
                    width: 50%;
                }
            }
        }
    }
    @media screen and (max-width: 560px) {
        background-image: url(${mobileImage});
        padding:0;
    }
`;
const StyledHeading = styled.h1`
    font-style: normal;
    font-weight: 700;
    font-size: 56px;
    line-height: 58px;
    letter-spacing: 2px;
    @media screen and (max-width: 560px) {
        font-size:1.5rem;
    }
`;
const ProductHeading = styled.h5`
    font-family: "Manrope";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 19px;
    letter-spacing: 10px;
    color: #ffffff;
    opacity: 0.5;
`;
const ProductDescription = styled.p`
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    line-height: 25px;
    color: #ffffff;
    mix-blend-mode: normal;
    opacity: 0.75;
`;
const ProductContainer = styled.div`
    width: 45%;
    margin: auto 0;
    @media screen and (max-width: 1024px) {
        width:70%;
        margin: auto;
        text-align: center;
    }
`;

export default function HomePage() {
    const { isAuthenticated } = useAuth0();

    return (
        <>
            {isAuthenticated ? <LogoutButton /> : <LoginButton />}
            <NewProductContainer>
                <StyledSection>
                    <ProductContainer>
                        <ProductHeading>NEW PRODUCT</ProductHeading>
                        <StyledHeading>XX99 MARK II HEADPHONES</StyledHeading>
                        <ProductDescription>
                            Experience natural, lifelike audio and exceptional
                            build quality made for the passionate music
                            enthusiast
                        </ProductDescription>
                        <UnStyledLink
                            to={"/products/details/xx99-mark-two-headphones"}
                        >
                            <OrangeButton>SEE PRODUCT</OrangeButton>
                        </UnStyledLink>
                    </ProductContainer>
                </StyledSection>
            </NewProductContainer>
            <ProductInfoContainer>
                <ProductCardList />
                <ProductPreview />
                <AdComponent />
            </ProductInfoContainer>
        </>
    );
}
