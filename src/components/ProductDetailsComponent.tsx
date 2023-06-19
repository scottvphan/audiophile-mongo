/* eslint-disable @typescript-eslint/no-explicit-any */
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';
import {v4 as uuidv4} from 'uuid'

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
`;
const FeatureContainer = styled.div``;
const InTheBoxContainer = styled.div``;
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
const StyledLink = styled(Link)`
    text-decoration: none;
    font-weight: 700;
    color: #d87d4a;
`;
export default function ProductDetails(props: any) {
    console.log(props)
    const [mappedList, setMappedList] = useState<any>('')
    const [mappedListLoaded, setMappedListLoaded] = useState<boolean>(false)
    useEffect(() =>{
        const mappedData = props.data.includes.map((data:any) => {
            return(
                <li key={uuidv4()}>{data.item}</li>
            )
        })
        setMappedList(mappedData)
        setMappedListLoaded(true)
    }, [props.data.includes])
    return (
        <>
            <StyledLink to={"/"}>Go Back</StyledLink>
            <ProductDetail>
                <ProductImageContainer>
                    <ProductImg src={props.data.image.desktop} />
                </ProductImageContainer>
                <ProductDescriptionContainer>
                    {props.data.new && (
                        <ProductDescriptionNewTag>
                            NEW PRODUCT
                        </ProductDescriptionNewTag>
                    )}
                    <ProductDescriptionHeading>
                        {props.data.name}
                    </ProductDescriptionHeading>
                    <ProductDescription>
                        {props.data.description}
                    </ProductDescription>
                    <h2>{'$ ' + props.data.price}</h2>
                    <InputContainer>
                        <Input type="number" />
                        <ProductButton>Add To Cart</ProductButton>
                    </InputContainer>
                </ProductDescriptionContainer>
            </ProductDetail>
            <FeaturesContainer>
                <FeatureContainer>
                    <h1>FEATURES</h1>
                    <p>
                        {props.data.features}
                    </p>
                </FeatureContainer>
                <InTheBoxContainer>
                    <ul>
                        {mappedListLoaded && mappedList}
                    </ul>
                </InTheBoxContainer>
            </FeaturesContainer>
            <ImageGalleryContainer>
                <Image1 src={props.data.gallery.first.desktop} />
                <Image2 src={props.data.gallery.second.desktop} />
                <Image3 src={props.data.gallery.third.desktop} />
            </ImageGalleryContainer>
            <RecommendationHeading>You May Also Like</RecommendationHeading>
        </>
    );
}
