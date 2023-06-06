import styled from "styled-components";
import SVG from 'react-inlinesvg'

export default function ProductDetailPage() {
    const ProductDetailContainer = styled.div`
        padding: 0 20rem;
        margin: 2em 0;
    `;
    const ProductDetails = styled.div`
        display: flex;
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
        display: flex;
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
    const InputContainer = styled.div`
        display: flex;
        gap: 1rem;
    `;
    const Input = styled.input`
        width: 40%;
    `;
    const FeaturesContainer = styled.div`
        display: flex;
    `;
    const FeatureContainer = styled.div``;
    const InTheBoxContainer = styled.div``;
    const ImageGalleryContainer = styled.div`
        display:grid;
        grid-template-areas: 
        "a b"
        "c b"
        ;
        gap:1rem;
    `
    const Image1 = styled.img`
        grid-area:a;
        width:100%;
        height:100%;
    `
    const Image2 = styled.img`
        grid-area:c;
        width:100%;
        height:100%;
    `
    const Image3 = styled.img`
        grid-area:b;
        width:100%;
        height:100%;
    `
    const RecommendationHeading = styled.h1`
        text-align:center;
    `
    const RecommendationCardContainer = styled.div`
        display:grid;
        grid-template-columns: 1fr 1fr 1fr;
        gap:1rem;
    `
    const RecommendationCard = styled.div`
        display:flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width:100%;
    `
    const RecommendationImg = styled.img`
        width:100%;
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
    return (
        <ProductDetailContainer>
            <h1>Go Back</h1>
            <ProductDetails>
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
                    <h2>$ 2,999</h2>
                    <InputContainer>
                        <Input type="number" />
                        <ProductButton>Add To Cart</ProductButton>
                    </InputContainer>
                </ProductDescriptionContainer>
            </ProductDetails>
            <FeaturesContainer>
                <FeatureContainer>
                    <h1>FEATURES</h1>
                    <p>
                        Featuring a genuine leather head strap and premium
                        earcups, these headphones deliver superior comfort for
                        those who like to enjoy endless listening. It includes
                        intuitive controls designed for any situation. Whether
                        you’re taking a business call or just in your own
                        personal space, the auto on/off and pause features
                        ensure that you’ll never miss a beat. The advanced
                        Active Noise Cancellation with built-in equalizer allow
                        you to experience your audio world on your terms. It
                        lets you enjoy your audio in peace, but quickly interact
                        with your surroundings when you need to. Combined with
                        Bluetooth 5. 0 compliant connectivity and 17 hour
                        battery life, the XX99 Mark II headphones gives you
                        superior sound, cutting-edge technology, and a modern
                        design aesthetic.
                    </p>
                </FeatureContainer>
                <InTheBoxContainer></InTheBoxContainer>
            </FeaturesContainer>
            <ImageGalleryContainer>
                <Image1 src="\assets\product-xx99-mark-two-headphones\desktop\image-gallery-1.jpg" />
                <Image2 src="\assets\product-xx99-mark-two-headphones\desktop\image-gallery-2.jpg" />
                <Image3 src="\assets\product-xx99-mark-two-headphones\desktop\image-gallery-3.jpg" />
            </ImageGalleryContainer>
            <RecommendationHeading>You May Also Like</RecommendationHeading>
            <RecommendationCardContainer>
                <RecommendationCard>
                    <RecommendationImg src="\assets\product-xx99-mark-one-headphones\desktop\image-category-page-preview.jpg"/>
                    <h1>XX99 MARK I</h1>
                    <ProductButton>See Product</ProductButton>
                </RecommendationCard>
                <RecommendationCard>
                    <RecommendationImg src="\assets\product-xx99-mark-one-headphones\desktop\image-category-page-preview.jpg"/>
                    <h1>XX99 MARK I</h1>
                    <ProductButton>See Product</ProductButton>
                </RecommendationCard>
                <RecommendationCard>
                    <RecommendationImg src="\assets\product-xx99-mark-one-headphones\desktop\image-category-page-preview.jpg"/>
                    <h1>XX99 MARK I</h1>
                    <ProductButton>See Product</ProductButton>
                </RecommendationCard>
            </RecommendationCardContainer>
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
        </ProductDetailContainer>
    );
}
