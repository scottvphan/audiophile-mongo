import mobileImage from '/assets/home/mobile/image-header.jpg';
import tabletImage from '/assets/home/tablet/image-header.jpg';
import desktopImage from '/assets/home/desktop/image-header.jpg';
import SVG from 'react-inlinesvg'
import styled from "styled-components"
import ProductPreview from '../components/ProductPreview';

export default function homePage(){
    const StyledDiv = styled.div`
        height:100%;
        background-color: white;
    `
    const NewProductContainer = styled.div`
        color:white;
        display:flex;
    `
    const StyledImg = styled.img`
        width:50%;
    `
    const StyledSection = styled.section`
        padding:0 20rem;
        width:100%;
        background-image: url(${desktopImage});
        background-position: center bottom;
        background-repeat: no-repeat;
        display:flex;
        background-size:cover;
        height:50rem;
        @media screen and (max-width:1024px) {
            background-image: url(${tabletImage});
        }
        @media screen and (max-width:768px) {
            background-image: url(${mobileImage});
        }
    `
    const StyledHeading = styled.h1`
        font-style: normal;
        font-weight: 700;
        font-size: 56px;
        line-height: 58px;
        letter-spacing: 2px;
    `
    const ProductHeading = styled.h5`
        font-family: 'Manrope';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 19px;
        letter-spacing: 10px;
        color:#FFFFFF;
        opacity:0.5;
    `
    const ProductDescription = styled.p`
        font-style: normal;
        font-weight: 500;
        font-size: 15px;
        line-height: 25px;
        color: #FFFFFF;
        mix-blend-mode: normal;
        opacity: 0.75;
    `
    const ProductContainer = styled.div`
        width:45%;
        margin:auto 0;
    `
    const ProductButton = styled.button`
        background-color: #D87D4A;
        padding:1rem;
        color:white;
        font-style: normal;
        font-weight: 700;
        font-size: 13px;
        line-height: 18px;
        letter-spacing: 1px;
    `
    const ProductListContainer = styled.div`
        background-color:white;
    `
    const ProductCard = styled.div`
        background: #F1F1F1;
        border-radius: 8px;
        text-align:center;
        padding: 0 1rem;
        width:100%;
    `
    const CardListContainer = styled.div`
        display:flex;
        justify-content: space-between;
        padding:1rem 20rem;
        gap:2rem;
    `
    const ProductCardHeading = styled.h1`
        font-style: normal;
        font-weight: 700;
        font-size: 18px;
        line-height: 25px;
        text-align: center;
        letter-spacing: 1.28571px;
    `
    const ProductCardSubHeading = styled.h6`
        font-family: 'Manrope';
        font-style: normal;
        font-weight: 700;
        font-size: 13px;
        line-height: 18px;
        letter-spacing: 1px;
        color: #000000;
        mix-blend-mode: normal;
        opacity: 0.5;
    `
    const ShopTextContainer = styled.div`
        display:flex;
        justify-content: center;
        align-items: center;
        gap:10px;
    `
    return(
        <StyledDiv>
            <NewProductContainer>
                <StyledSection>
                    <ProductContainer>
                        <ProductHeading>NEW PRODUCT</ProductHeading>
                        <StyledHeading>XX99 MARK II HEADPHONES</StyledHeading>
                        <ProductDescription>Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast</ProductDescription>
                        <ProductButton>SEE PRODUCT</ProductButton>
                    </ProductContainer>
                </StyledSection>
            </NewProductContainer>
            <ProductListContainer>
                <CardListContainer>
                    <ProductCard>
                        <ProductCardHeading>HEADPHONES</ProductCardHeading>
                        <ShopTextContainer>
                            <ProductCardSubHeading>SHOP</ProductCardSubHeading>
                            <SVG src="assets/shared/desktop/icon-arrow-right.svg" />
                        </ShopTextContainer>
                    </ProductCard>
                    <ProductCard>
                        <ProductCardHeading>SPEAKERS</ProductCardHeading>
                        <ShopTextContainer>
                            <ProductCardSubHeading>SHOP</ProductCardSubHeading>
                            <SVG src="assets/shared/desktop/icon-arrow-right.svg" />
                        </ShopTextContainer>
                    </ProductCard>
                    <ProductCard>
                        <ProductCardHeading>EARPHONES</ProductCardHeading>
                        <ShopTextContainer>
                            <ProductCardSubHeading>SHOP</ProductCardSubHeading>
                            <SVG src="assets/shared/desktop/icon-arrow-right.svg" />
                        </ShopTextContainer>
                    </ProductCard>
                </CardListContainer>
            </ProductListContainer>
            <ProductPreview />
        </StyledDiv>
    )
}