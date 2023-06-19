import styled from "styled-components";
import SVG from 'react-inlinesvg'

export default function ProductList() {

    const ProductListContainer = styled.div`
        background-color: white;
    `;
    const ProductCard = styled.div`
        background: #f1f1f1;
        border-radius: 8px;
        text-align: center;
        padding: 0 1rem;
        width: 100%;
    `;
    const CardListContainer = styled.div`
        display: flex;
        justify-content: space-between;
        padding: 1rem 20rem;
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

    return (
        <ProductListContainer>
            <CardListContainer>
                <ProductCard>
                    <ProductCardHeading>HEADPHONES</ProductCardHeading>
                    <ShopTextContainer>
                        <ProductCardSubHeading>SHOP</ProductCardSubHeading>
                        <SVG src="/assets/shared/desktop/icon-arrow-right.svg" />
                    </ShopTextContainer>
                </ProductCard>
                <ProductCard>
                    <ProductCardHeading>SPEAKERS</ProductCardHeading>
                    <ShopTextContainer>
                        <ProductCardSubHeading>SHOP</ProductCardSubHeading>
                        <SVG src="/assets/shared/desktop/icon-arrow-right.svg" />
                    </ShopTextContainer>
                </ProductCard>
                <ProductCard>
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
