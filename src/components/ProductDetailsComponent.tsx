/* eslint-disable @typescript-eslint/no-explicit-any */
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { useLayoutOutletContext } from "./Layout";
import ItemQuantityInput from "./ItemQuantityInput";
import GoBackButton from "./GoBackButton";
import { OrangeButton } from "./StyledComponents";

const ProductDetail = styled.div`
    display: flex;
    grid-template-columns: 1fr 1fr;
    @media screen and (max-width: 768px){
        flex-direction: column;
    }
    box-sizing: border-box;
    overflow: hidden;
`;
const ProductImageContainer = styled.div`
    width: 100%;
    /* height:100%; */
    box-sizing: border-box;
`;
const ProductImg = styled.img`
    width: 100%;
    /* height:100%; */
    box-sizing: border-box;
`;
const ProductImgSource = styled.source`
    width: 100%;
    height:100%;
`;
const ProductDescriptionContainer = styled.div`
    /* width: 100%; */
    padding: 3rem;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: flex-start;
    /* @media screen and (max-width: 560px) {
        padding: 0;
    } */
    box-sizing:border-box;
    @media screen and (max-width:560px) {
        padding:1rem;
    }
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
    @media screen and (max-width:560px) {
        font-size:1.5rem;
    }
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
const InputContainer = styled.div`
    display: flex;
    gap: 1rem;
    width: 60%;
    div {
        width: 45%;
    }
    button {
        width: 55%;
    }
    @media screen and (max-width:768px) {
        width:100%;
        button{
            width: 100%;
        }
        div{
            width:100%;
        }
    }
`;
const FeaturesContainer = styled.div`
    gap: 0 5rem;
    display: flex;
    @media screen and (max-width: 768px) {
        flex-direction: column;
        gap:1rem;
    }
`;
const FeatureContainer = styled.div`
    width:70%;
    @media screen and (max-width: 560px) {
        width: 100%;
    }
`;
const FeaturesHeading = styled.h1`
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 36px;
    letter-spacing: 1.14286px;
    text-transform: uppercase;
    color: #000000;
`;
const FeaturesText = styled.p`
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    line-height: 25px;
    color: #000000;
    mix-blend-mode: normal;
    opacity: 0.5;
`;
const InTheBoxContainer = styled.div`
    display: grid;
    width: 30%;
    box-sizing: border-box;
    margin:1em 0;
    @media screen and (max-width:768px) {
        width:100%;
    }
`;
const InTheBoxListContainer = styled.div`
    display: flex;
    gap: 0 1rem;
    align-items: center;
    height: 5%;
`;
const InTheBoxAmount = styled.h6`
    font-weight: 700;
    font-size: 15px;
    line-height: 25px;
    color: #d87d4a;
    margin: 0;
`;
const InTheBoxItem = styled.p`
    font-weight: 500;
    font-size: 15px;
    line-height: 25px;
    color: #000000;
    mix-blend-mode: normal;
    opacity: 0.5;
    margin: 0;
`;
const ImageGalleryContainer = styled.div`
    display: grid;
    grid-template-areas:
        "a b"
        "c b";
    gap: 1rem;
    @media screen and (max-width: 560px) {
        grid-template-areas:
            "a"
            "b"
            "c";
    }
`;
const Image1 = styled.img`
    grid-area: a;
    width: 100%;
    height: 100%;
`;
const Image2 = styled.img`
    grid-area: c;
    width: 100%;
    height: 100%;
`;
const Image3 = styled.img`
    grid-area: b;
    width: 100%;
    height: 100%;
`;
const RecommendationHeading = styled.h1`
    text-align: center;
`;
const RecommendationContainer = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 2rem;
    @media screen and (max-width:560px) {
        flex-direction:column;
    }
`;
const RecommendationImage = styled.img`
    width: 100%;
    border-radius: 0.5rem;
`;
const RecommendationCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    button {
        width: 40%;
    }
    @media screen and (max-width: 768px) {
        button{
            width:80%;
        }
    }
    @media screen and (max-width: 560px) {
        button {
            width: 100%;
        }
    }
`;
const RecommendationCardHeading = styled.h4`
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 33px;
    text-align: center;
    text-transform: uppercase;
    color: #000000;
`;

export default function ProductDetails(props: any) {
    const data = props.data;
    const [mappedList, setMappedList] = useState<any>("");
    const [mappedListLoaded, setMappedListLoaded] = useState<boolean>(false);
    const [mappedRecommended, setMappedRecommended] = useState<any>("");
    const { cart, setCart, setIsCartOpen } = useLayoutOutletContext();
    const [itemAmount, setItemAmount] = useState<number>(0);

    useEffect(() => {
        const mappedData = data.includes.map((data: any) => {
            return (
                <InTheBoxListContainer key={uuidv4()}>
                    <InTheBoxAmount>{data.quantity}x</InTheBoxAmount>
                    <InTheBoxItem>{data.item}</InTheBoxItem>
                </InTheBoxListContainer>
            );
        });
        setMappedList(mappedData);
        setMappedListLoaded(true);
    }, [data.includes]);

    useEffect(() => {
        const mappedData = data.others.map((data: any) => {
            return (
                <RecommendationCard key={uuidv4()}>
                    <Link to={`/products/details/${data.slug}`}>
                        <RecommendationImage src={data.image.desktop} />
                    </Link>
                    <RecommendationCardHeading>
                        {data.name}
                    </RecommendationCardHeading>
                    <OrangeButton onClick={() => handleLinkClick(data.slug)}>
                        SEE PRODUCT
                    </OrangeButton>
                </RecommendationCard>
            );
        });
        setMappedRecommended(mappedData);
    }, [data.others]);

    function addToCart() {
        if (itemAmount > 0) {
            setCart({
                ...cart,
                [data.id]: {
                    name: data.name,
                    image: `/assets/cart/image-${data.slug}.jpg`,
                    quantity: itemAmount,
                    price: data.price,
                    total: data.price * itemAmount,
                    id: data.id,
                },
            });
            setIsCartOpen(true);
            window.scrollTo(0, 0);
        }
    }
    const handleLinkClick = (productData: string) => {
        const productURL = `/products/details/${productData}`;
        window.location.href = productURL;
    };

    return (
        <>
            <GoBackButton />
            <ProductDetail>
                <ProductImageContainer>
                    <picture>
                        <ProductImgSource media="(min-width:1440px)" srcSet={data.image.desktop} />
                        <ProductImgSource media="(min-width:768px)"  srcSet={data.image.tablet} />
                        <ProductImg src={data.image.mobile} />
                    </picture>
                </ProductImageContainer>
                <ProductDescriptionContainer>
                    {data.new && (
                        <ProductDescriptionNewTag>
                            NEW PRODUCT
                        </ProductDescriptionNewTag>
                    )}
                    <ProductDescriptionHeading>
                        {data.name}
                    </ProductDescriptionHeading>
                    <ProductDescription>{data.description}</ProductDescription>
                    <ProductDescriptionHeading>{"$ " + data.price}</ProductDescriptionHeading>
                    <InputContainer>
                        <ItemQuantityInput setItemAmount={setItemAmount} />
                        <OrangeButton onClick={addToCart}>
                            ADD TO CART
                        </OrangeButton>
                    </InputContainer>
                </ProductDescriptionContainer>
            </ProductDetail>
            <FeaturesContainer>
                <FeatureContainer>
                    <FeaturesHeading>FEATURES</FeaturesHeading>
                    <FeaturesText>{data.features}</FeaturesText>
                </FeatureContainer>
                <InTheBoxContainer>
                    <ProductDescriptionHeading>IN THE BOX</ProductDescriptionHeading>
                    {mappedListLoaded && mappedList}
                </InTheBoxContainer>
            </FeaturesContainer>
            <ImageGalleryContainer>
                <Image1 src={data.gallery.first.desktop} />
                <Image2 src={data.gallery.second.desktop} />
                <Image3 src={data.gallery.third.desktop} />
            </ImageGalleryContainer>
            <RecommendationHeading>You May Also Like</RecommendationHeading>
            <RecommendationContainer>
                {mappedRecommended}
            </RecommendationContainer>
        </>
    );
}
