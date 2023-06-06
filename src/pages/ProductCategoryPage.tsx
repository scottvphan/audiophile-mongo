import styled from "styled-components";
import SVG from 'react-inlinesvg'
export default function ProductCategoryPage() {
    const ProductCategoryContainer = styled.div`
        margin-bottom: 2rem;
    `;
    const ProductCategoryHeader = styled.header`
        background-color: black;
        color: white;
        padding: 1rem;
        text-align: center;
        margin-bottom: 2rem;
    `;
    const ProductCategoryListContainer = styled.div`
        display: grid;
        grid-template-columns: 1fr 1fr;
        padding: 0 20rem;
        gap: 5rem;
    `;
    const ProductImageContainer = styled.div`
        width: 100%;
    `;
    const ProductImg = styled.img`
        width: 100%;
    `;
    const ProductDescriptionContainer = styled.div`
        width: 100%;
        padding: 3rem;
        display:flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: flex-start;
    `;
    const ProductDescriptionNewTag = styled.h6`
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 19px;
        letter-spacing: 10px;
        text-transform: uppercase;
        color: #d87d4a;
    `;
    const ProductDescriptionHeading = styled.h1`
        font-style: normal;
        font-weight: 700;
        font-size: 40px;
        line-height: 44px;
        letter-spacing: 1.42857px;
        text-transform: uppercase;
        color: #000000;
    `;
    const ProductDescription = styled.p`
        font-style: normal;
        font-weight: 500;
        font-size: 15px;
        line-height: 25px;
        color: #000000;
        mix-blend-mode: normal;
        opacity: 0.5;
    `;
    const ProductButton = styled.button`
        background: #d87d4a;
        padding: 1rem;
        color: white;
        font-weight: 700;
        border: none;
        letter-spacing: 0.25em;
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
        display:flex;
        justify-content: center;
        align-items: center;
        gap:10px;
    `
    // const ProductContainer = styled.div``
    return (
        <ProductCategoryContainer>
            <ProductCategoryHeader>
                <h1>HEADPHONES</h1>
            </ProductCategoryHeader>
            <ProductCategoryListContainer>
                {/* <ProductContainer> */}
                <ProductImageContainer>
                    <ProductImg src="\assets\product-xx99-mark-two-headphones\desktop\image-category-page-preview.jpg" />
                </ProductImageContainer>
                <ProductDescriptionContainer>
                    <ProductDescriptionNewTag>
                        NEW PRODUCT
                    </ProductDescriptionNewTag>
                    <ProductDescriptionHeading>
                        XX99 Mark II Headphones
                    </ProductDescriptionHeading>
                    <ProductDescription>
                        The new XX99 Mark II headphones is the pinnacle of
                        pristine audio. It redefines your premium headphone
                        experience by reproducing the balanced depth and
                        precision of studio-quality sound.
                    </ProductDescription>
                    <ProductButton>See Product</ProductButton>
                </ProductDescriptionContainer>
                <ProductDescriptionContainer>
                    <ProductDescriptionHeading>
                        XX99 Mark II Headphones
                    </ProductDescriptionHeading>
                    <ProductDescription>
                        The new XX99 Mark II headphones is the pinnacle of
                        pristine audio. It redefines your premium headphone
                        experience by reproducing the balanced depth and
                        precision of studio-quality sound.
                    </ProductDescription>
                    <ProductButton>See Product</ProductButton>
                </ProductDescriptionContainer>
                <ProductImageContainer>
                    <ProductImg src="\assets\product-xx99-mark-two-headphones\desktop\image-category-page-preview.jpg" />
                </ProductImageContainer>
                <ProductImageContainer>
                    <ProductImg src="\assets\product-xx99-mark-two-headphones\desktop\image-category-page-preview.jpg" />
                </ProductImageContainer>
                <ProductDescriptionContainer>
                    <ProductDescriptionHeading>
                        XX99 Mark II Headphones
                    </ProductDescriptionHeading>
                    <ProductDescription>
                        The new XX99 Mark II headphones is the pinnacle of
                        pristine audio. It redefines your premium headphone
                        experience by reproducing the balanced depth and
                        precision of studio-quality sound.
                    </ProductDescription>
                    <ProductButton>See Product</ProductButton>
                </ProductDescriptionContainer>
                {/* </ProductContainer> */}
            </ProductCategoryListContainer>
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
        </ProductCategoryContainer>
    );
}
