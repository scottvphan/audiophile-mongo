import styled from "styled-components";
import SVG from "react-inlinesvg";
import { Link } from "react-router-dom";
const ProductListContainer = styled.div`
    background-color: white;
    margin: 2rem 0;
`;
const ProductCard = styled(Link)`
    background: #f1f1f1;
    border-radius: 8px;
    text-align: center;
    padding: 0 1rem;
    width: 100%;
    text-decoration: none;
    color: inherit;
    transition: 0.3s;
    box-sizing: border-box;
    &:hover {
        transform: scale(1.1);
        transition: 0.3s;
    }
    display:grid;
    grid-template-rows:1fr 0.2fr 0.1fr;
`;
const CardListContainer = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 2rem;
    @media screen and (max-width: 560px) {
        display: grid;
    }
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
    gap: 0.5rem;
`;
const ProductImage = styled.img`
    position: relative;
    width: 100%;
    height:100%;
`;
export default function ProductCardList({ handleMenu }: any) {
    return (
        <ProductListContainer>
            <CardListContainer>
                <ProductCard onClick={handleMenu} to={"/products/headphones"}>
                    <picture>
                        <source
                            media="(min-width:769px)"
                            src="/assets/shared/desktop/image-category-thumbnail-headphones.png"
                        />
                        <source
                            media="(min-width:561px)"
                            src="/assets/shared/tablet/image-category-thumbnail-headphones.png"
                        />
                        <ProductImage src="/assets/shared/desktop/image-category-thumbnail-headphones.png" />
                    </picture>
                    <ProductCardHeading>HEADPHONES</ProductCardHeading>
                    <ShopTextContainer>
                        <ProductCardSubHeading>SHOP</ProductCardSubHeading>
                        <SVG src="/assets/shared/desktop/icon-arrow-right.svg" />
                    </ShopTextContainer>
                </ProductCard>
                <ProductCard onClick={handleMenu} to={"/products/speakers"}>
                    <picture>
                        <source
                            media="(min-width:769px)"
                            src="/assets/shared/desktop/image-category-thumbnail-speakers.png"
                        />
                        <source
                            media="(min-width:561px)"
                            src="/assets/shared/tablet/image-category-thumbnail-speakers.png"
                        />
                        <ProductImage src="/assets/shared/desktop/image-category-thumbnail-speakers.png" />
                    </picture>
                    <ProductCardHeading>SPEAKERS</ProductCardHeading>
                    <ShopTextContainer>
                        <ProductCardSubHeading>SHOP</ProductCardSubHeading>
                        <SVG src="/assets/shared/desktop/icon-arrow-right.svg" />
                    </ShopTextContainer>
                </ProductCard>
                <ProductCard onClick={handleMenu} to={"/products/earphones"}>
                    <picture>
                        <source
                            media="(min-width:769px)"
                            src="/assets/shared/desktop/image-category-thumbnail-earphones.png"
                        />
                        <source
                            media="(min-width:561px)"
                            src="/assets/shared/tablet/image-category-thumbnail-earphones.png"
                        />
                        <ProductImage src="/assets/shared/desktop/image-category-thumbnail-earphones.png" />
                    </picture>
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
