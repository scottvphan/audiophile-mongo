/* eslint-disable @typescript-eslint/no-explicit-any */
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { useLayoutContext } from "./Layout";
import { useAuth0 } from "@auth0/auth0-react";

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
    gap: 5rem;
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
    width: 15%;
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
`;
const InTheBoxItem = styled.p`
    font-weight: 500;
    font-size: 15px;
    line-height: 25px;
    color: #000000;
    mix-blend-mode: normal;
    opacity: 0.5;
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
const RecommendationButton = styled.div`
    background-color: #d87d4a;
    padding: 0.5rem;
    color: white;
    text-align: center;
    cursor: pointer;
`;
const RecommendationCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
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
const StyledLink = styled(Link)`
    text-decoration: none;
    font-weight: 700;
    color: #d87d4a;
`;

export default function ProductDetails(props: any) {
    const data = props.data;
    const [mappedList, setMappedList] = useState<any>("");
    const [mappedListLoaded, setMappedListLoaded] = useState<boolean>(false);
    const [mappedRecommended, setMappedRecommended] = useState<any>("");
    const { cart, setCart } = useLayoutContext();
    const [itemAmount, setItemAmount] = useState<number>(0);
    const { isAuthenticated, user } = useAuth0();

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
                    <RecommendationButton onClick={() => handleLinkClick(data.slug)}>SEE PRODUCT</RecommendationButton>
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
                    total: data.price * itemAmount,
                },
            });
        }
    }
    const handleLinkClick = (productData:string) =>{
        const productURL = `/products/details/${productData}`
        window.location.href = productURL
    }

    useEffect(() => {
        if (!isAuthenticated) {
            if (JSON.stringify(cart) !== sessionStorage.getItem("cart")) {
                sessionStorage.setItem("cart", JSON.stringify(cart));
            }
        } else {
            if (
                JSON.stringify(cart) !== localStorage.getItem(`${user?.email}`)
            ) {
                localStorage.setItem(`${user?.email}`, JSON.stringify(cart));
            }
        }
    }, [cart, isAuthenticated, user?.email]);

    return (
        <>
            <StyledLink to={"/"}>Go Back</StyledLink>
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
                        <Input
                            onChange={(event: any) => {
                                const value = event.target.value;
                                setItemAmount(value);
                            }}
                            type="number"
                        />
                        <ProductButton onClick={addToCart}>
                            Add To Cart
                        </ProductButton>
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
