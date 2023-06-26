import styled from "styled-components";
import SVG from "react-inlinesvg";
import { Link } from "react-router-dom";
    const ProductListContainer = styled.div`
        background-color: white;
        margin:2rem 0;
    `;
    const ProductCard = styled(Link)`
        background: #f1f1f1;
        border-radius: 8px;
        text-align: center;
        padding: 0 1rem;
        width: 100%;
        text-decoration: none;
        color: inherit;
        transition:0.3s;
        &:hover{
            transform:scale(1.1);
            transition:0.3s;
        }
    `;
    const CardListContainer = styled.div`
        display: flex;
        justify-content: space-between;
        gap: 2rem;
    `;
    const ProductCardHeading = styled.h1`
        font-style: normal;
        font-weight: 700;
        font-size: 18px;
        line-height: 25px;
        text-align: center;
        letter-spacing: 1.28571px;
    `;
    const ProductCardSubHeading = styled.h6`
        font-family: "Manrope";
        font-style: normal;
        font-weight: 700;
        font-size: 13px;
        line-height: 18px;
        letter-spacing: 1px;
        color: #000000;
        mix-blend-mode: normal;
        opacity: 0.5;
    `;
    const ShopTextContainer = styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 10px;
    `;
    const ProductImage = styled.img`
        position:relative;
        width:100%;
    `
export default function ProductCardList() {
    return (
        <ProductListContainer>
            <CardListContainer>
                <ProductCard to={"/products/headphones"}>
                    <ProductImage src="/assets/shared/desktop/image-category-thumbnail-headphones.png" />
                    <ProductCardHeading>HEADPHONES</ProductCardHeading>
                    <ShopTextContainer>
                        <ProductCardSubHeading>SHOP</ProductCardSubHeading>
                        <SVG src="/assets/shared/desktop/icon-arrow-right.svg" />
                    </ShopTextContainer>
                </ProductCard>
                <ProductCard to={"/products/speakers"}>
                    <ProductImage src="/assets/shared/desktop/image-category-thumbnail-speakers.png" />
                    <ProductCardHeading>SPEAKERS</ProductCardHeading>
                    <ShopTextContainer>
                        <ProductCardSubHeading>SHOP</ProductCardSubHeading>
                        <SVG src="/assets/shared/desktop/icon-arrow-right.svg" />
                    </ShopTextContainer>
                </ProductCard>
                <ProductCard to={"/products/earphones"}>
                    <ProductImage src="/assets/shared/desktop/image-category-thumbnail-earphones.png" />
                    <ProductCardHeading>EARPHONES</ProductCardHeading>
                    <ShopTextContainer>
                        <ProductCardSubHeading>SHOP</ProductCardSubHeading>
                        <SVG src="/assets/shared/desktop/icon-arrow-right.svg" />
                    </ShopTextContainer>
                </ProductCard>
            </CardListContainer>
        </ProductListContainer>
    );
}
