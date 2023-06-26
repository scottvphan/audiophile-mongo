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
const InputContainer = styled.div`
    display: flex;
    gap: 1rem;
    width:60%;
    div{
        width:45%;
    }
    button{
        width:55%;
    }
`;
const FeaturesContainer = styled.div`
    gap: 5rem;
    display:flex;
    margin: 2rem 0;
`;
const FeatureContainer = styled.div`
    width: 60%;
`;
const FeaturesHeading = styled.h1`
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 36px;
    letter-spacing: 1.14286px;
    text-transform: uppercase;
    color: #000000;
`
const FeaturesText = styled.p`
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    line-height: 25px;
    color: #000000;
    mix-blend-mode: normal;
    opacity: 0.5;
`
const InTheBoxContainer = styled.div`
    width: 40%;
    display:grid;
`;
const InTheBoxListContainer = styled.div`
    display: flex;
    gap: 0 1rem;
    align-items: center;
    height:5%;
`;
const InTheBoxAmount = styled.h6`
    font-weight: 700;
    font-size: 15px;
    line-height: 25px;
    color: #d87d4a;
    margin:0;
`;
const InTheBoxItem = styled.p`
    font-weight: 500;
    font-size: 15px;
    line-height: 25px;
    color: #000000;
    mix-blend-mode: normal;
    opacity: 0.5;
    margin:0;
`;
const ImageGalleryContainer = styled.div`
    display: grid;
    grid-template-areas:
        "a b"
        "c b";
    gap: 1rem;
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
`;
const RecommendationImage = styled.img`
    width: 100%;
    border-radius: 0.5rem;
`;
const RecommendationCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    button{
        width:40%;
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
                    <OrangeButton onClick={() => handleLinkClick(data.slug)}>SEE PRODUCT</OrangeButton>
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
            setIsCartOpen(true)
            window.scrollTo(0, 0);
    }
    }
    const handleLinkClick = (productData:string) =>{
        const productURL = `/products/details/${productData}`
        window.location.href = productURL
    }

    return (
        <>
            <GoBackButton />
            <ProductDetail>
                <ProductImageContainer>
                    <ProductImg src={data.image.desktop} />
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
                    <h2>{"$ " + data.price}</h2>
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
                    <h1>IN THE BOX</h1>
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
