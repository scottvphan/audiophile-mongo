import mobileImage from "/assets/home/mobile/image-header.jpg";
import tabletImage from "/assets/home/tablet/image-header.jpg";
import desktopImage from "/assets/home/desktop/image-header.jpg";
import styled from "styled-components";
import ProductPreview from "../components/ProductPreview";
import { useAuth0 } from "@auth0/auth0-react";
import LogoutButton from "../components/LogoutButton";
import LoginButton from "../components/LoginButton";
import ProductCardList from "../components/ProductCardList";

const StyledDiv = styled.div`
    height: 100%;
    background-color: white;
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
    height: 50rem;
    @media screen and (max-width: 1024px) {
        background-image: url(${tabletImage});
    }
    @media screen and (max-width: 768px) {
        background-image: url(${mobileImage});
    }
`;
const StyledHeading = styled.h1`
    font-style: normal;
    font-weight: 700;
    font-size: 56px;
    line-height: 58px;
    letter-spacing: 2px;
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
`;
const ProductButton = styled.button`
    background-color: #d87d4a;
    padding: 1rem;
    color: white;
    font-style: normal;
    font-weight: 700;
    font-size: 13px;
    line-height: 18px;
    letter-spacing: 1px;
`;

export default function HomePage() {
    const { isAuthenticated } = useAuth0();

    return (
        <>
            {isAuthenticated ? <LogoutButton /> : <LoginButton />}
            <StyledDiv>
                <NewProductContainer>
                    <StyledSection>
                        <ProductContainer>
                            <ProductHeading>NEW PRODUCT</ProductHeading>
                            <StyledHeading>
                                XX99 MARK II HEADPHONES
                            </StyledHeading>
                            <ProductDescription>
                                Experience natural, lifelike audio and
                                exceptional build quality made for the
                                passionate music enthusiast
                            </ProductDescription>
                            <ProductButton>SEE PRODUCT</ProductButton>
                        </ProductContainer>
                    </StyledSection>
                </NewProductContainer>
                <ProductCardList />
                <ProductPreview />
            </StyledDiv>
        </>
    );
}
